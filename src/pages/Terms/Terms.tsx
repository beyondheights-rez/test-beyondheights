import React, { useEffect } from 'react';

const Terms: React.FC = () => {
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
            Terms &amp; Conditions
          </h1>
          <p className="font-mono text-xs text-brand-muted">Last updated: July 28, 2026</p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-brand-ink">1. Acceptance of Terms</h2>
            <p className="text-brand-ink-soft leading-relaxed text-xs sm:text-[15px] font-sans">
              By accessing or using this website ("Site"), operated by Beyond Heights ("we", "us", "our"), you agree
              to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please
              discontinue use of the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">2. About Beyond Heights</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              Beyond Heights is an organization based in Vadavalli, Coimbatore, Tamil Nadu, India, providing
              structured autism intervention, therapy, and inclusive athletics programs for neurodivergent
              individuals and their families. Trust/Society Registration No.:{' '}
              <span className="font-mono text-brand-ink">[REGISTRATION NUMBER TO BE ADDED]</span>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">3. Use of the Website</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              You agree to use this Site only for lawful purposes. You must not use the Site in any way that could
              damage, disable, or impair it, or interfere with any other party's use of the Site. All content on
              this Site — including text, images, and graphics — is provided for informational purposes about our
              programs and mission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">4. Donations</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              Donations made through this Site are voluntary contributions toward Beyond Heights' programs,
              including therapy sessions, athletics training, and operational support. Donations are processed
              through a secure, RBI-authorized third-party payment gateway (Razorpay). We do not store your card,
              UPI, or bank account details on our servers. No goods or services are provided in exchange for a
              donation unless explicitly stated. Please review our{' '}
              <a href="/refund-policy" className="text-[#c68a2c] underline hover:text-[#a87220]">
                Refund &amp; Cancellation Policy
              </a>{' '}
              for details on refunds.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">5. User Conduct</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              When submitting information through our contact or inquiry forms, you agree to provide accurate,
              current information. You must not use the Site to transmit any unlawful, defamatory, or harmful
              material.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">6. Intellectual Property</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              All content on this Site, including our name, logo, and program materials, is the property of Beyond
              Heights unless otherwise credited, and may not be reproduced without prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">7. Limitation of Liability</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              Beyond Heights makes reasonable efforts to keep information on this Site accurate and up to date, but
              makes no warranties about completeness or reliability. We are not liable for any indirect or
              consequential loss arising from your use of the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">8. Changes to These Terms</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              We may update these Terms &amp; Conditions from time to time. Changes take effect immediately upon
              being posted to this page, with the "Last updated" date revised accordingly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">9. Governing Law</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              These Terms are governed by the laws of India, and any disputes will be subject to the exclusive
              jurisdiction of the courts in Coimbatore, Tamil Nadu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">10. Contact Us</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              For any questions about these Terms, please reach us at{' '}
              <a href="mailto:info@beyondheights.com" className="text-[#c68a2c] underline hover:text-[#a87220]">
                info@beyondheights.com
              </a>{' '}
              or +91 98765 43210, Vadavalli, Coimbatore, Tamil Nadu, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
