import React, { useState, useEffect } from 'react';
import { CreditCard, Landmark, Globe, ShieldCheck, ArrowRight, Brain, Sparkles, Heart, Activity } from 'lucide-react';

const Donate: React.FC = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form States
  const [selectedAmount, setSelectedAmount] = useState<number | 'other'>(250);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [receiveUpdates, setReceiveUpdates] = useState(true);
  const [paymentTab, setPaymentTab] = useState<'card' | 'upi' | 'intl'>('card');

  // Card details
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');

  // UPI details
  const [upiId, setUpiId] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate final amount
  const getAmountValue = () => {
    if (selectedAmount === 'other') {
      const parsed = parseFloat(customAmount);
      return isNaN(parsed) ? 0 : parsed;
    }
    return selectedAmount;
  };

  // Derive current step state
  let currentStep = 1;
  if (isSuccess) {
    currentStep = 4;
  } else if (cardNumber || cardName || expiry || cvv || upiId) {
    currentStep = 3;
  } else if (fullName || email || phone) {
    currentStep = 2;
  }

  // Handle submit donation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const finalAmount = getAmountValue();
    if (finalAmount <= 0) {
      setErrorMessage('Please select or enter a valid donation amount.');
      return;
    }

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (paymentTab === 'card') {
      if (!cardNumber.trim() || cardNumber.replace(/\s/g, '').length < 15) {
        setErrorMessage('Please enter a valid card number.');
        return;
      }
      if (!expiry.trim() || !expiry.includes('/')) {
        setErrorMessage('Please enter expiration date (MM/YY).');
        return;
      }
      if (!cvv.trim() || cvv.length < 3) {
        setErrorMessage('Please enter a valid CVV code.');
        return;
      }
    } else if (paymentTab === 'upi') {
      if (!upiId.trim() || !upiId.includes('@')) {
        setErrorMessage('Please enter a valid UPI ID (e.g. name@bank).');
        return;
      }
    }

    // Success transition
    setIsSuccess(true);
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-brand-bg text-brand-ink min-h-screen">
      <div className="max-w-[1600px] mx-auto space-y-16">

        {/* --- Hero / Header Section --- */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-16">
          <div className="flex-1 space-y-4">
            <div className="font-mono text-xs tracking-[0.1em] text-[#0d47a1] uppercase font-bold flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#0d47a1]" />
              MAKE A DIFFERENCE
            </div>
            <h1 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-brand-ink max-w-[600px]">
              Your support builds the future of understanding.
            </h1>
            <p className="text-[15px] md:text-base text-brand-ink-soft max-w-[500px]">
              You are not funding a program.<br />You are building the scientific infrastructure<br />for understanding autistic minds.
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="relative flex items-center justify-between w-full lg:max-w-[800px] pb-4">
            {/* Dashed Line */}
            <div className="absolute top-[18px] left-[50px] right-[50px] h-[1px] border-t border-dashed border-slate-200 z-0" />
            
            <div className="flex flex-col items-center relative z-10 shrink-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border transition-colors ${
                currentStep >= 1 ? 'bg-[#0d47a1] border-[#0d47a1] text-white' : 'bg-white border-slate-200 text-slate-400'
              }`}>
                1
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0d47a1] mt-2">Impact</span>
              <span className="text-xs text-slate-500">Choose value</span>
            </div>

            <div className="flex flex-col items-center relative z-10 shrink-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border transition-colors ${
                currentStep >= 2 ? 'bg-[#0d47a1] border-[#0d47a1] text-white' : 'bg-white border-slate-200 text-slate-400'
              }`}>
                2
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider mt-2 ${currentStep >= 2 ? 'text-[#0d47a1]' : 'text-slate-500'}`}>
                Details
              </span>
              <span className="text-xs text-slate-500">Tell us about you</span>
            </div>

            <div className="flex flex-col items-center relative z-10 shrink-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border transition-colors ${
                currentStep >= 3 ? 'bg-[#0d47a1] border-[#0d47a1] text-white' : 'bg-white border-slate-200 text-slate-400'
              }`}>
                3
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider mt-2 ${currentStep >= 3 ? 'text-[#0d47a1]' : 'text-slate-500'}`}>
                Payment
              </span>
              <span className="text-xs text-slate-500">Secure gateways</span>
            </div>

            <div className="flex flex-col items-center relative z-10 shrink-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border transition-colors ${
                currentStep >= 4 ? 'bg-[#0d47a1] border-[#0d47a1] text-white' : 'bg-white border-slate-200 text-slate-400'
              }`}>
                4
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider mt-2 ${currentStep >= 4 ? 'text-[#0d47a1]' : 'text-slate-500'}`}>
                Receipt
              </span>
              <span className="text-xs text-slate-500">Thank you</span>
            </div>
          </div>
        </header>

        {/* --- Main Checkout Grid --- */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-brand-line pt-10">
          
          {/* Column 1: Choose Impact */}
          <div className="flex flex-col justify-between pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-brand-line pb-8 lg:pb-0 space-y-6">
            <div className="space-y-6">
              <h3 className="font-mono text-xs tracking-[0.1em] text-[#0d47a1] uppercase font-bold">
                1. CHOOSE YOUR IMPACT
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => { setSelectedAmount(25); setCustomAmount(''); }}
                  className={`border rounded-lg py-4 px-2 text-center transition-all ${
                    selectedAmount === 25 ? 'border-[#0d47a1] ring-1 ring-[#0d47a1] bg-slate-50' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`text-lg font-bold ${selectedAmount === 25 ? 'text-[#0d47a1]' : 'text-brand-ink'}`}>$25</div>
                  <div className="text-xs text-slate-500 font-medium">Spark</div>
                </button>

                <button
                  type="button"
                  onClick={() => { setSelectedAmount(100); setCustomAmount(''); }}
                  className={`border rounded-lg py-4 px-2 text-center transition-all ${
                    selectedAmount === 100 ? 'border-[#0d47a1] ring-1 ring-[#0d47a1] bg-slate-50' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`text-lg font-bold ${selectedAmount === 100 ? 'text-[#0d47a1]' : 'text-brand-ink'}`}>$100</div>
                  <div className="text-xs text-slate-500 font-medium">Builder</div>
                </button>

                <button
                  type="button"
                  onClick={() => { setSelectedAmount(250); setCustomAmount(''); }}
                  className={`relative border rounded-lg py-4 px-2 text-center transition-all ${
                    selectedAmount === 250 ? 'border-[#0d47a1] ring-1 ring-[#0d47a1] bg-slate-50' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-[#0d47a1] text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    MOST CHOSEN
                  </span>
                  <div className={`text-lg font-bold ${selectedAmount === 250 ? 'text-[#0d47a1]' : 'text-brand-ink'}`}>$250</div>
                  <div className="text-xs text-slate-500 font-medium">Catalyst</div>
                </button>

                <button
                  type="button"
                  onClick={() => { setSelectedAmount(500); setCustomAmount(''); }}
                  className={`border rounded-lg py-4 px-2 text-center transition-all ${
                    selectedAmount === 500 ? 'border-[#0d47a1] ring-1 ring-[#0d47a1] bg-slate-50' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`text-lg font-bold ${selectedAmount === 500 ? 'text-[#0d47a1]' : 'text-brand-ink'}`}>$500</div>
                  <div className="text-xs text-slate-500 font-medium">Champion</div>
                </button>

                <div className={`col-span-2 border rounded-lg p-3 flex items-center justify-between transition-all ${
                  selectedAmount === 'other' ? 'border-[#0d47a1] ring-1 ring-[#0d47a1] bg-slate-50' : 'border-slate-200 bg-white'
                }`}>
                  <button
                    type="button"
                    onClick={() => setSelectedAmount('other')}
                    className="text-xs font-bold text-slate-500 uppercase shrink-0"
                  >
                    Other Amount
                  </button>
                  <div className="flex items-center gap-1.5 max-w-[120px]">
                    <span className="text-sm font-bold text-brand-ink">$</span>
                    <input
                      type="number"
                      placeholder="Custom"
                      value={customAmount}
                      onChange={(e) => {
                        setSelectedAmount('other');
                        setCustomAmount(e.target.value);
                      }}
                      className="w-full bg-transparent border-b border-slate-300 text-right focus:border-brand-blue outline-none text-sm font-bold text-brand-ink py-0.5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Diagram */}
            <div className="text-center pt-8 space-y-2">
              <div className="text-[#0d47a1] text-2xl select-none opacity-70">◎</div>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Every contribution expands<br />the model of understanding.
              </p>
            </div>
          </div>

          {/* Column 2: Details */}
          <div className="flex flex-col justify-between pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-brand-line pb-8 lg:pb-0 space-y-6">
            <div className="space-y-6">
              <h3 className="font-mono text-xs tracking-[0.1em] text-[#0d47a1] uppercase font-bold">
                2. YOUR DETAILS
              </h3>

              <div className="space-y-3.5">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                />
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-brand-ink-soft"
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                </select>

                <label className="flex items-start gap-2.5 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    checked={receiveUpdates}
                    onChange={(e) => setReceiveUpdates(e.target.checked)}
                    className="mt-0.5"
                  />
                  <span className="text-xs text-brand-ink-soft leading-normal">
                    I would like to receive updates on the lab's progress and impact.
                  </span>
                </label>
              </div>
            </div>

            {/* Diagram */}
            <div className="text-center pt-8 space-y-2">
              <div className="text-[#0d47a1] text-2xl select-none opacity-70">✦</div>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Information connects us.<br />So we can share what we build.
              </p>
            </div>
          </div>

          {/* Column 3: Payment Method */}
          <div className="flex flex-col justify-between pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-brand-line pb-8 lg:pb-0 space-y-6">
            <div className="space-y-6">
              <h3 className="font-mono text-xs tracking-[0.1em] text-[#0d47a1] uppercase font-bold">
                3. PAYMENT METHOD
              </h3>

              <div className="grid grid-cols-3 gap-1.5 border border-slate-200 rounded-lg p-1 bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => setPaymentTab('card')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-md text-xs font-bold uppercase transition-all ${
                    paymentTab === 'card' ? 'bg-white text-[#0d47a1] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentTab('upi')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-md text-xs font-bold uppercase transition-all ${
                    paymentTab === 'upi' ? 'bg-white text-[#0d47a1] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Landmark className="w-3.5 h-3.5" />
                  UPI / Net
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentTab('intl')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-md text-xs font-bold uppercase transition-all ${
                    paymentTab === 'intl' ? 'bg-white text-[#0d47a1] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  Intl
                </button>
              </div>

              {/* Form Input fields dynamically changing */}
              {paymentTab === 'card' && (
                <div className="space-y-3.5">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                    />
                    <CreditCard className="w-4 h-4 text-slate-300 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-center"
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-center"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Name on Card"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                  />
                </div>
              )}

              {paymentTab === 'upi' && (
                <div className="space-y-3.5">
                  <input
                    type="text"
                    placeholder="UPI ID (e.g. name@upi)"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                  />
                  <div className="p-4 border border-dashed border-slate-200 bg-[#f8fafc] text-center rounded-xl">
                    <div className="font-mono text-xs text-slate-500">QR CODE SECURE LINK GENERATOR</div>
                    <div className="w-16 h-16 border border-slate-200 bg-white mx-auto my-2 flex items-center justify-center text-xs text-slate-400">
                      [UPI QR]
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Or enter your VPA to request payment</div>
                  </div>
                </div>
              )}

              {paymentTab === 'intl' && (
                <div className="space-y-3">
                  <p className="text-xs text-brand-ink-soft leading-normal">
                    International contributions are processed securely via Stripe checkout gateway integrations supporting multiple currencies.
                  </p>
                  <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-center font-mono text-xs text-brand-blue font-bold">
                    STRIPE MULTI-CURRENCY CONNECTED
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                Your payment is secure and encrypted.
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-lg text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#0d47a1] hover:bg-[#0a3d8c] text-white py-3.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                DONATE NOW <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-center text-slate-500">
                You will receive an instant confirmation by email.
              </div>
            </div>

            {/* Diagram */}
            <div className="text-center pt-8 space-y-2">
              <div className="text-[#0d47a1] text-2xl select-none opacity-70">✳</div>
              <p className="text-xs text-brand-ink-soft leading-normal">
                Secure systems.<br />So your trust creates real change.
              </p>
            </div>
          </div>

          {/* Column 4: Confirmation Preview */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-6 text-center">
              <h3 className="font-mono text-xs tracking-[0.1em] text-[#0d47a1] uppercase font-bold text-left">
                4. CONFIRMATION
              </h3>

              <div className="py-6 px-4 bg-[#f8fafc] border border-slate-200/60 rounded-xl space-y-6">
                <div className={`w-12 h-12 rounded-full border mx-auto flex items-center justify-center shadow-sm text-lg transition-all ${
                  isSuccess ? 'bg-[#0d47a1] border-[#0d47a1] text-white shadow-[0_0_15px_rgba(13,71,161,0.2)]' : 'bg-white border-slate-200 text-slate-300'
                }`}>
                  {isSuccess ? '✓' : '⌛'}
                </div>
                
                {isSuccess ? (
                  <div className="space-y-3">
                    <div className="text-sm font-bold text-[#0d47a1]">Contribution Complete</div>
                    <p className="text-xs text-brand-ink leading-relaxed">
                      Thank you, <strong className="text-brand-ink">{fullName}</strong>!<br />
                      You have contributed <strong className="text-[#0d47a1]">${getAmountValue()}</strong> to the Empathy Initiative.
                    </p>
                    <p className="text-xs text-brand-ink-soft">
                      A receipt has been dispatched to {email}.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2 text-brand-ink-soft text-xs leading-relaxed">
                    <p>Your contribution helps build the future of human understanding.</p>
                    <div className="font-serif text-[#0d47a1] font-semibold text-sm pt-4">
                      Awaiting Completion
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Diagram */}
            <div className="text-center pt-8 space-y-2">
              <div className="text-[#0d47a1] text-2xl select-none opacity-70">✦</div>
              <p className="text-xs text-brand-ink-soft leading-normal">
                One act of understanding<br />reaches infinitely.
              </p>
            </div>
          </div>

        </form>

        {/* --- Bottom Panel --- */}
        <div className="border border-brand-line rounded-xl grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] bg-brand-bg overflow-hidden shadow-sm">
          
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-brand-line space-y-6">
            <h3 className="font-mono text-xs tracking-[0.1em] text-[#0d47a1] font-bold uppercase">
              WHAT YOUR SUPPORT BUILDS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#0d47a1] bg-[#f8fafc] text-lg shrink-0"><Brain className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-[#0d47a1] font-bold">Advance Science</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed">Fund research that maps cognition, regulation, communication and learning paths.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#0d47a1] bg-[#f8fafc] text-lg shrink-0"><Sparkles className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-[#0d47a1] font-bold">Build Infrastructure</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed">Create the world's first Autism Consciousness Lab and a global shared data ecosystem.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#0d47a1] bg-[#f8fafc] text-lg shrink-0"><Activity className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-[#0d47a1] font-bold">Enable Breakthroughs</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed">Turn theoretical insights into practical tools that help children, families, and classrooms flourish.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#0d47a1] bg-[#f8fafc] text-lg shrink-0"><Heart className="w-5 h-5" /></div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-[#0d47a1] font-bold">Shape a Legacy</h4>
                  <p className="text-xs text-brand-ink-soft leading-relaxed">Help establish a developmental foundation that will transform how humanity understands every mind.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 flex flex-col justify-center items-center bg-[#fafaf9]/30">
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              <div className="flex flex-col items-center text-center w-12 text-xs font-bold text-slate-500">
                <div className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center mb-1 text-xs">👁</div>
                Obs
              </div>
              <span className="text-slate-300 text-xs">&rarr;</span>
              <div className="flex flex-col items-center text-center w-12 text-xs font-bold text-slate-500">
                <div className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center mb-1 text-xs">≣</div>
                Pattern
              </div>
              <span className="text-slate-300 text-xs">&rarr;</span>
              <div className="flex flex-col items-center text-center w-12 text-xs font-bold text-[#0d47a1]">
                <div className="w-7 h-7 rounded-full border border-[#0d47a1] flex items-center justify-center mb-1 text-xs bg-blue-50 font-extrabold">✳</div>
                Understand
              </div>
              <span className="text-slate-300 text-xs">&rarr;</span>
              <div className="flex flex-col items-center text-center w-12 text-xs font-bold text-slate-500">
                <div className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center mb-1 text-xs">↗</div>
                Predict
              </div>
              <span className="text-slate-300 text-xs">&rarr;</span>
              <div className="flex flex-col items-center text-center w-12 text-xs font-bold text-slate-500">
                <div className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center mb-1 text-xs">📦</div>
                Design
              </div>
              <span className="text-slate-300 text-xs">&rarr;</span>
              <div className="flex flex-col items-center text-center w-12 text-xs font-bold text-slate-800">
                <div className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center mb-1 text-xs">👥</div>
                Potential
              </div>
            </div>
            <div className="text-xs text-slate-500 text-center mt-5 italic">
              Donations help move the world from observation to human potential.
            </div>
          </div>

        </div>

        {/* --- Footer --- */}
        <footer className="text-center pt-8 border-t border-brand-line space-y-2">
          <p className="text-sm text-brand-ink-soft leading-normal max-w-3xl mx-auto">
            Moneyball changed baseball by discovering that value had been hiding inside plain sight.
          </p>
          <span className="font-serif italic text-[#0d47a1] text-xl block max-w-2xl mx-auto">
            The Empathy Initiative believes the same thing is true of autism.
          </span>
          <div className="text-xs text-brand-muted uppercase tracking-wider font-mono">
            The intelligence was never missing. The model for seeing it was.
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Donate;
