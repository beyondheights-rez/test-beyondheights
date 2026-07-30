import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
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
    <div className="relative">
      {/* Banner */}
      <section className="bg-brand-blue text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-brand-cyan text-xs font-black uppercase tracking-[0.2em]">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">Connect with Beyond Heights</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Reach out to schedule an assessment, request program details, or ask any general questions. We are here to support you.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-orange text-xs font-black uppercase tracking-[0.2em] border-l-4 border-brand-orange pl-3">
                Information
              </span>
              <h2 className="text-3xl font-black text-brand-blue uppercase tracking-tight">
                Our Coimbatore Center
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Visit or call our center to meet our therapists and coordinators. We provide safe, structured environments designed for growth.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Address detail */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover-lift">
                <div className="bg-brand-blue text-brand-cyan p-3 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-blue text-sm uppercase tracking-wider">Address</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Vadavalli, Coimbatore,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone detail */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover-lift">
                <div className="bg-brand-blue text-brand-cyan p-3 rounded-xl">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-blue text-sm uppercase tracking-wider">Phone</h4>
                  <a href="tel:+919876543210" className="text-slate-600 text-xs sm:text-sm mt-1 block hover:text-brand-cyan transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email detail */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover-lift">
                <div className="bg-brand-blue text-brand-cyan p-3 rounded-xl">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-blue text-sm uppercase tracking-wider">Email</h4>
                  <a href="mailto:info@beyondheights.com" className="text-slate-600 text-xs sm:text-sm mt-1 block hover:text-brand-cyan transition-colors break-all">
                    info@beyondheights.com
                  </a>
                </div>
              </div>

              {/* Operating hours */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover-lift">
                <div className="bg-brand-blue text-brand-cyan p-3 rounded-xl">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-blue text-sm uppercase tracking-wider">Hours</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm relative">
            {submitted ? (
              <div className="text-center py-16 space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="bg-brand-emerald/10 text-brand-emerald w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tight">Message Received!</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Thank you for contacting Beyond Heights. Our support team will get back to you within 24–48 business hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-blue transition-colors pt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tight">Send an Inquiry</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Please fill out the form below and we'll connect with you shortly.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-brand-blue uppercase tracking-wider block">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-brand-blue uppercase tracking-wider block">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-brand-blue uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>

                {/* Program dropdown */}
                <div className="space-y-2">
                  <label htmlFor="program" className="text-xs font-bold text-brand-blue uppercase tracking-wider block">Program of Interest</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
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
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-brand-blue uppercase tracking-wider block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm uppercase py-4 rounded-xl shadow-lg transition-all duration-300 hover-lift"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Map Segment */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-brand-blue uppercase tracking-tight">Our Center Location</h3>
            <p className="text-slate-500 text-xs sm:text-sm">Conveniently situated in Vadavalli, Coimbatore, Tamil Nadu.</p>
          </div>
          {/* Beautiful Glassmorphic Map Container */}
          <div className="w-full h-96 rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center text-center p-6 relative">
            <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm border border-slate-100 space-y-2">
                <MapPin className="h-8 w-8 text-brand-orange mx-auto fill-brand-orange/10" />
                <h4 className="font-extrabold text-brand-blue uppercase tracking-wider text-sm">Beyond Heights Center</h4>
                <p className="text-slate-500 text-xs">Vadavalli, Coimbatore, Tamil Nadu, India</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-black uppercase text-brand-cyan hover:underline pt-2"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            {/* Simple Grid Background Representing a Map */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
