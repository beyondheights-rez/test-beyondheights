import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: 'general',
        message: ''
      });
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white text-brand-ink min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto space-y-12 sm:space-y-20">

        {/* --- Hero --- */}
        <section className="text-center space-y-3 sm:space-y-4 max-w-[640px] mx-auto">
          <span className="font-mono text-xs tracking-[0.18em] text-[#c68a2c] uppercase font-bold">Contact Us</span>
          <div className="w-10 h-0.5 bg-[#c68a2c] mx-auto" />
          <h1 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.12] sm:leading-[1.1] text-brand-ink tracking-tight">
            Connect with Beyond Heights
          </h1>
          <p className="text-brand-ink-soft text-xs sm:text-base leading-relaxed font-sans">
            Reach out to schedule an assessment, request program details, or ask any general questions. We are here
            to support you.
          </p>
        </section>

        {/* --- Info & Form --- */}
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-xl sm:text-2xl text-brand-ink">Our Coimbatore Center</h2>
              <p className="text-brand-ink-soft text-xs sm:text-sm leading-relaxed font-sans">
                Visit or call our center to meet our therapists and coordinators. We provide safe, structured
                environments designed for growth.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {/* Address detail */}
              <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4">
                <div className="bg-[#0d3b26] text-[#e5b364] p-2.5 sm:p-3 rounded-xl shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Address</h4>
                  <p className="text-brand-ink-soft text-xs sm:text-sm mt-1 leading-relaxed">
                    Vadavalli, Coimbatore,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone detail */}
              <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4">
                <div className="bg-[#0d3b26] text-[#e5b364] p-2.5 sm:p-3 rounded-xl shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Phone</h4>
                  <a href="tel:+919876543210" className="text-brand-ink-soft text-xs sm:text-sm mt-1 block hover:text-[#c68a2c] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email detail */}
              <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4">
                <div className="bg-[#0d3b26] text-[#e5b364] p-2.5 sm:p-3 rounded-xl shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Email</h4>
                  <a href="mailto:info@beyondheights.com" className="text-brand-ink-soft text-xs sm:text-sm mt-1 block hover:text-[#c68a2c] transition-colors break-all">
                    info@beyondheights.com
                  </a>
                </div>
              </div>

              {/* Operating hours */}
              <div className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4">
                <div className="bg-[#0d3b26] text-[#e5b364] p-2.5 sm:p-3 rounded-xl shrink-0">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-ink">Hours</h4>
                  <p className="text-brand-ink-soft text-xs sm:text-sm mt-1 leading-relaxed">
                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#F8F6F1] border border-brand-line rounded-2xl p-5 sm:p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10 sm:py-16 space-y-4 sm:space-y-6">
                <div className="bg-white border border-brand-line text-[#0d3b26] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-ink">Message Received!</h3>
                  <p className="text-brand-ink-soft text-xs sm:text-sm max-w-sm mx-auto font-sans">
                    Thank you for contacting Beyond Heights. Our support team will get back to you within 24–48
                    business hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c68a2c] hover:text-[#a87220] transition-colors pt-2 sm:pt-4 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-ink">Send an Inquiry</h3>
                  <p className="text-brand-ink-soft text-xs sm:text-sm font-sans">Please fill out the form below and we'll connect with you shortly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-brand-ink uppercase tracking-wider block font-sans">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-brand-line text-xs sm:text-sm focus:outline-none focus:border-[#c68a2c] transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-brand-ink uppercase tracking-wider block font-sans">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-brand-line text-xs sm:text-sm focus:outline-none focus:border-[#c68a2c] transition-colors"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-brand-ink uppercase tracking-wider block font-sans">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-brand-line text-xs sm:text-sm focus:outline-none focus:border-[#c68a2c] transition-colors"
                  />
                </div>

                {/* Program dropdown */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="program" className="text-xs font-bold text-brand-ink uppercase tracking-wider block font-sans">Program of Interest</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-brand-line text-xs sm:text-sm focus:outline-none focus:border-[#c68a2c] transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="speech">Speech & Language Therapy</option>
                    <option value="occupational">Occupational Therapy</option>
                    <option value="behavioral">Behavioral Intervention</option>
                    <option value="special-ed">Special Education & Life Skills</option>
                    <option value="athletics">Inclusive Athletics & Running</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-brand-ink uppercase tracking-wider block font-sans">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-brand-line text-xs sm:text-sm focus:outline-none focus:border-[#c68a2c] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#c68a2c] hover:bg-[#a87220] text-white font-sans font-bold text-xs sm:text-sm uppercase py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* --- Map Segment --- */}
        <section className="bg-[#F8F6F1] border border-brand-line rounded-2xl p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-lg sm:text-xl text-brand-ink">Our Center Location</h3>
            <p className="text-brand-ink-soft text-xs sm:text-sm font-sans">Conveniently situated in Vadavalli, Coimbatore, Tamil Nadu.</p>
          </div>
          <div className="w-full h-64 sm:h-96 rounded-2xl bg-white border border-brand-line overflow-hidden flex items-center justify-center text-center p-4 sm:p-6 relative">
            <div className="absolute inset-0 bg-brand-ink/5 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-brand-line max-w-sm space-y-1.5 sm:space-y-2">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#c68a2c] mx-auto" />
                <h4 className="font-sans font-bold uppercase tracking-wider text-xs sm:text-sm text-brand-ink">Beyond Heights Center</h4>
                <p className="text-brand-ink-soft text-[11px] sm:text-xs">Vadavalli, Coimbatore, Tamil Nadu, India</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#c68a2c] hover:underline pt-1.5 sm:pt-2"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
