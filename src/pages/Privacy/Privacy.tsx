import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
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
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-brand-muted">Last updated: July 28, 2026</p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <section className="space-y-2.5 sm:space-y-3">
            <h2 className="font-serif text-lg sm:text-xl text-brand-ink">1. Introduction</h2>
            <p className="text-brand-ink-soft leading-relaxed text-xs sm:text-[15px] font-sans">
              Beyond Heights ("we", "us", "our") respects your privacy. This Privacy Policy explains what
              information we collect through this website, how we use it, and the choices you have.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">2. Information We Collect</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              We may collect the following when you use our contact forms, donation forms, or program inquiry
              forms: your name, email address, phone number, and any message or program details you provide. When
              you make a donation, payment details (card, UPI, netbanking) are collected and processed directly by
              our payment gateway partner, Razorpay — we do not receive or store your full payment credentials.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">3. How We Use Your Information</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              We use the information you provide to respond to inquiries, process and acknowledge donations, send
              donation receipts, and share relevant updates about our programs, provided you have not opted out. We
              do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">4. Payment Processing &amp; Third-Party Services</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              All donation payments are processed through Razorpay, an RBI-regulated payment aggregator. Razorpay's
              own privacy policy and security standards govern the handling of your payment information during a
              transaction. We only receive confirmation of a successful transaction and the donor details you
              submitted on our form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">5. Cookies</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              This Site may use basic cookies or local storage to remember your preferences and improve your
              browsing experience. You can disable cookies through your browser settings, though some features of
              the Site may not function as intended.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">6. Data Sharing &amp; Disclosure</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              We do not share your personal information with third parties except: (a) with service providers who
              help us operate the Site or process payments (such as Razorpay), (b) when required by law, or (c)
              with your explicit consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">7. Data Security</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              We take reasonable technical and organizational measures to protect the information you share with us
              from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">8. Children's Information</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              Where information about a program participant who is a minor is shared with us by a parent or
              guardian for the purpose of a therapy or athletics program inquiry, it is used solely for that
              purpose and treated with the same confidentiality as all other personal data, in accordance with
              guidance from the participant's parent or guardian.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">9. Your Rights &amp; Choices</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              You may request access to, correction of, or deletion of your personal information held by us at any
              time by contacting us using the details below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">10. Changes to This Policy</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              We may update this Privacy Policy periodically. Any changes will be posted on this page with a
              revised "Last updated" date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-brand-ink">11. Contact Us</h2>
            <p className="text-brand-ink-soft leading-relaxed text-[15px] font-sans">
              For any privacy-related questions or requests, please contact us at{' '}
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

export default Privacy;
