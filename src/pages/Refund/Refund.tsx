import React, { useEffect } from 'react';

const Refund: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-brand-ink min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-[820px] mx-auto space-y-8 sm:space-y-12">

        {/* Header */}
        <div className="space-y-3 sm:space-y-4 border-b border-brand-line pb-6 sm:pb-8">
          <span className="font-mono text-xs tracking-[0.18em] text-[#c68a2c] uppercase font-bold">Legal</span>
          <div className="w-10 h-0.5 bg-[#c68a2c]" />
          <h1 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.12] sm:leading-[1.1] text-brand-ink tracking-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="font-mono text-xs text-brand-muted">Last updated: July 28, 2026</p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-brand-ink">1. Overview</h2>
            <p className="text-brand-ink-soft leading-relaxed text-xs sm:text-[15px] font-sans">
              This policy explains how Beyond Heights handles refunds and cancellations for donations made through
              this website. All donation payments are processed securely via Razorpay.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">2. Donations Are Generally Non-Refundable</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              Donations made to Beyond Heights are voluntary contributions used directly toward our therapy and
              athletics programs. As such, donations are generally non-refundable once processed, except in the
              circumstances described below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">3. Exceptions</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              A refund may be requested in the following cases:
            </p>
            <ul className="list-disc list-inside text-brand-ink-soft leading-relaxed text-[15px] font-sans space-y-1 pl-2">
              <li>You were charged more than once for the same donation (duplicate transaction).</li>
              <li>An amount was debited from your account due to a technical or payment gateway error, without a
                successful donation being recorded on our end.</li>
              <li>You believe the transaction was unauthorized.</li>
            </ul>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              Refund requests for the above must be raised within 7 business days of the transaction date, along
              with your transaction ID/reference number and payment proof.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">4. Refund Process &amp; Timeline</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              Once a refund request is verified and approved, the amount will be credited back to your original
              payment method within 7–10 business days, subject to your bank's or card issuer's processing
              timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">5. Failed or Pending Transactions</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              If an amount is debited from your account but the donation is not confirmed on our Site (e.g. due to
              a network or gateway timeout), such amounts are typically auto-reversed to your original payment
              method by Razorpay/your bank within their standard processing timelines, without requiring any action
              from you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">6. How to Request a Refund</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              To request a refund under the exceptions above, please email{' '}
              <a href="mailto:info@beyondheights.com" className="text-[#c68a2c] underline hover:text-[#a87220]">
                info@beyondheights.com
              </a>{' '}
              with the subject line "Refund Request", including your name, transaction ID, date of transaction, and
              reason for the request. You may also call us at +91 98765 43210.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">7. Contact Us</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              Beyond Heights, Vadavalli, Coimbatore, Tamil Nadu, India. Email:{' '}
              <a href="mailto:info@beyondheights.com" className="text-[#c68a2c] underline hover:text-[#a87220]">
                info@beyondheights.com
              </a>{' '}
              · Phone: +91 98765 43210.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refund;
