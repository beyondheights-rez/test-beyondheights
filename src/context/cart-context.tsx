"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  currency?: string;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size?: string, color?: string) => void;
  addMultipleItems: (
    itemsList: { product: Product; size?: string; color?: string }[]
  ) => void;
  addCombo: (combo: {
    id: string;
    name: string;
    price: number;
    currency?: string;
    image: string;
    description?: string;
    itemCount?: number;
  }) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("beyond_cart");
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        console.error("Failed to parse cart storage", e);
      }
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("beyond_cart", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart storage", e);
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (product: Product, size?: string, color?: string) => {
    const selectedSize = size || product.sizes?.[0] || "Standard";
    const selectedColor = color || product.colors?.[0]?.name || "Standard";
    const activeColorObj = product.colors?.find((c) => c.name === selectedColor);
    const itemImage = activeColorObj?.image || product.image;
    const itemKey = `${product.id}-${selectedSize}-${selectedColor}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: itemKey,
          productId: product.id,
          name: product.name,
          price: product.price,
          currency: product.currency || "₹",
          image: itemImage,
          size: selectedSize,
          color: selectedColor,
          quantity: 1,
        },
      ];
    });

    setIsOpen(true);
  };

  const addMultipleItems = (
    itemsList: { product: Product; size?: string; color?: string }[]
  ) => {
    setItems((prev) => {
      const updated = [...prev];
      itemsList.forEach(({ product, size, color }) => {
        const selectedSize = size || product.sizes?.[0] || "Standard";
        const selectedColor = color || product.colors?.[0]?.name || "Standard";
        const activeColorObj = product.colors?.find((c) => c.name === selectedColor);
        const itemImage = activeColorObj?.image || product.image;
        const itemKey = `${product.id}-${selectedSize}-${selectedColor}`;

        const existingIndex = updated.findIndex((item) => item.id === itemKey);
        if (existingIndex > -1) {
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + 1,
          };
        } else {
          updated.push({
            id: itemKey,
            productId: product.id,
            name: product.name,
            price: product.price,
            currency: product.currency || "₹",
            image: itemImage,
            size: selectedSize,
            color: selectedColor,
            quantity: 1,
          });
        }
      });
      return updated;
    });

    setIsOpen(true);
  };

  const addCombo = (combo: {
    id: string;
    name: string;
    price: number;
    currency?: string;
    image: string;
    description?: string;
    itemCount?: number;
  }) => {
    const itemKey = `combo-${combo.id}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: itemKey,
          productId: combo.id,
          name: combo.name,
          price: combo.price,
          currency: combo.currency || "₹",
          image: combo.image,
          size: `${combo.itemCount || "Bundle"} Items`,
          color: "Special Combo Bundle",
          quantity: 1,
        },
      ];
    });

    setIsOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        openCart,
        closeCart,
        addItem,
        addMultipleItems,
        addCombo,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        quickViewProduct,
        setQuickViewProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
