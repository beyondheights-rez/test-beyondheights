"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
    clearCart,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  const freeShippingThreshold = 100;
  const progressPercent = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 12;
  const finalTotal = subtotal - discount + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "BEYOND" || promoCode.trim().toUpperCase() === "BEYOND2026") {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderId(`BYND-${Math.floor(100000 + Math.random() * 900000)}`);
      setOrderComplete(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#B59A63", "#111111", "#F1ECE4"],
      });
    }, 1500);
  };

  const handleFinishOrder = () => {
    setOrderComplete(false);
    clearCart();
    closeCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          {/* Slide-over Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#F1ECE4] shadow-2xl flex flex-col justify-between border-l border-[#111111]/[0.082]"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-[#111111]/[0.082] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight">
                    BAG
                  </span>
                  <span className="font-sans font-bold text-xs text-[#B59A63]">
                    ({totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"})
                  </span>
                </div>
                <button
                  onClick={closeCart}
                  className="p-1.5 text-[#111111] hover:text-[#B59A63] transition-colors"
                  aria-label="Close Bag"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Meter */}
              {items.length > 0 && !orderComplete && (
                <div className="bg-[#E9E2D5] px-6 py-3 border-b border-[#111111]/[0.06]">
                  <div className="flex items-center justify-between text-xs font-sans mb-1.5">
                    {amountToFreeShipping === 0 ? (
                      <span className="font-bold text-[#111111] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#B59A63]" />
                        COMPLIMENTARY SHIPPING UNLOCKED
                      </span>
                    ) : (
                      <span className="text-[#444444]">
                        ADD <strong className="text-[#111111]">{(items[0]?.currency || "₹")}{amountToFreeShipping.toFixed(0)}</strong> FOR COMPLIMENTARY SHIPPING
                      </span>
                    )}
                    <span className="font-bold text-[#B59A63]">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-[#111111]/10 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#B59A63] h-full"
                    />
                  </div>
                </div>
              )}

              {/* Cart Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {orderComplete ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#B59A63] text-[#F1ECE4] flex items-center justify-center shadow-lg">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-black text-3xl text-[#111111] uppercase">
                      MANIFESTATION CONFIRMED
                    </h3>
                    <p className="font-sans text-sm text-[#444444]">
                      Order #{orderId || "BYND-839201"} is being prepared at our adaptive distribution hub.
                    </p>
                    <button
                      onClick={handleFinishOrder}
                      className="mt-6 px-6 py-3 bg-[#111111] text-[#F1ECE4] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#B59A63] transition-colors"
                    >
                      CONTINUE DISCOVERY
                    </button>
                  </div>
                ) : items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <span className="font-display font-black text-5xl text-[#111111]/20 uppercase">
                      EMPTY
                    </span>
                    <p className="font-sans text-sm text-[#444444] max-w-xs">
                      Your bag contains no kinetic gear. Explore our autumn/winter system capsule.
                    </p>
                    <button
                      onClick={closeCart}
                      className="px-6 py-3 bg-[#111111] text-[#F1ECE4] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#B59A63] transition-colors"
                    >
                      EXPLORE COLLECTION
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-3 bg-[#EAE3D6] rounded-xs border border-[#111111]/[0.05]"
                      >
                        {/* Thumbnail */}
                        <div className="relative w-20 h-24 bg-[#DCD4C6] overflow-hidden shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover object-center"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h4 className="font-sans font-semibold text-xs text-[#111111]">
                                {item.name}
                              </h4>
                              <p className="font-sans text-[11px] text-[#444444] mt-0.5">
                                {item.size} • {item.color}
                              </p>
                            </div>
                            <span className="font-sans font-bold text-xs text-[#B59A63]">
                              {item.currency || "₹"}{(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#111111]/[0.08]">
                            <div className="flex items-center border border-[#111111]/20 bg-[#F1ECE4]">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-[#111111]/10 text-[#111111]"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2.5 font-sans font-bold text-xs text-[#111111]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-[#111111]/10 text-[#111111]"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-[#444444] hover:text-red-700 p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Promo Code Input */}
                    <form
                      onSubmit={handleApplyPromo}
                      className="pt-2 flex gap-2"
                    >
                      <input
                        type="text"
                        placeholder="PROMO CODE (TRY 'BEYOND')"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-2 bg-[#E6DFD2] border border-[#111111]/10 font-sans text-xs uppercase placeholder:text-[#444444]/60 focus:outline-none focus:border-[#B59A63]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#111111] text-[#F1ECE4] font-sans font-bold text-xs uppercase hover:bg-[#B59A63] transition-colors"
                      >
                        APPLY
                      </button>
                    </form>

                    {promoApplied && (
                      <p className="text-[11px] font-sans font-bold text-[#B59A63] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        10% CODE APPLIED (BEYOND INITIATIVE)
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Cart Footer / Checkout */}
              {items.length > 0 && !orderComplete && (
                <div className="p-6 bg-[#E8E1D4] border-t border-[#111111]/[0.082] space-y-4">
                  <div className="space-y-1.5 text-xs font-sans">
                    <div className="flex justify-between text-[#444444]">
                      <span>Subtotal</span>
                      <span className="font-semibold text-[#111111]">{(items[0]?.currency || "₹")}{subtotal.toLocaleString()}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-[#B59A63]">
                        <span>Initiative Discount (10%)</span>
                        <span>-{(items[0]?.currency || "₹")}{discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#444444]">
                      <span>Shipping</span>
                      <span>{shippingFee === 0 ? "FREE" : `${items[0]?.currency || "₹"}${shippingFee}`}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-[#111111] pt-2 border-t border-[#111111]/10">
                      <span className="font-display text-base uppercase">Total</span>
                      <span className="text-[#B59A63] font-sans">{(items[0]?.currency || "₹")}{finalTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    disabled={isCheckingOut}
                    onClick={handleCheckout}
                    className="w-full py-3.5 bg-[#111111] text-[#F1ECE4] hover:bg-[#B59A63] font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {isCheckingOut ? (
                      <span className="animate-pulse">ENCRYPTING & DISPATCHING...</span>
                    ) : (
                      <>
                        <span>PROCEED TO SECURE CHECKOUT</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] uppercase font-sans text-[#444444]/80 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B59A63]" />
                    <span>256-BIT ENCRYPTED // CARBON NEUTRAL SHIPPING</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
