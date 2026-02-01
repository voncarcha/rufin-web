"use client";

import { useState } from "react";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    groupSize: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission - visual placeholder only
    // TODO: Integrate with email service (Formspree, EmailJS, etc.)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDates: "",
      groupSize: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-xs text-[#E07B54] uppercase tracking-wider font-semibold">
              Get in Touch
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium mt-2 mb-6 text-[#2D2D2D]">
              Book Your Dream Trip Today
            </h2>
            <p className="text-[#6B7280] mb-8 leading-relaxed">
              Ready to start planning? Send us an inquiry and our travel experts will get back to you within 24 hours with a personalized quote. No obligation, just friendly advice!
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E07B54]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="#E07B54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D]">Phone / Viber</h3>
                  <a href="tel:+639277219365" className="text-[#6B7280] hover:text-[#E07B54] transition-colors">
                    +63 927 721 9365
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E07B54]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#E07B54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="#E07B54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D]">Email</h3>
                  <a href="mailto:rufintravelandtours@gmail.com" className="text-[#6B7280] hover:text-[#E07B54] transition-colors break-all">
                    rufintravelandtours@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E07B54]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="#E07B54" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#E07B54" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D]">Location</h3>
                  <p className="text-[#6B7280]">Makati City, Philippines</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-black/5">
              <p className="text-sm text-[#6B7280] mb-4">Follow us for travel tips and promos:</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#1A5D5D]/10 flex items-center justify-center text-[#1A5D5D] hover:bg-[#1A5D5D] hover:text-white transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1A5D5D]/10 flex items-center justify-center text-[#1A5D5D] hover:bg-[#1A5D5D] hover:text-white transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1A5D5D]/10 flex items-center justify-center text-[#1A5D5D] hover:bg-[#1A5D5D] hover:text-white transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="glass-card rounded-3xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-6">Send Us an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Juan Dela Cruz"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="juan@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Phone / Viber
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+63 9XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="groupSize" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Number of Travelers
                  </label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select...</option>
                    <option value="1-2">1-2 travelers</option>
                    <option value="3-5">3-5 travelers</option>
                    <option value="6-10">6-10 travelers</option>
                    <option value="11+">11+ travelers</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Destination *
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select destination...</option>
                    <option value="Seoul + Jeju">Seoul + Jeju Island</option>
                    <option value="Jeju Island">Jeju Island Only</option>
                    <option value="Seoul">Seoul Only</option>
                    <option value="Busan">Busan, Korea</option>
                    <option value="Other">Other (specify below)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="travelDates" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Preferred Travel Dates
                  </label>
                  <input
                    type="text"
                    id="travelDates"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., March 15-22"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Additional Message / Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea-field"
                  placeholder="Tell us more about your travel plans, special requests, or questions..."
                  rows={4}
                />
              </div>

              <button type="submit" className="btn-primary w-full text-center justify-center">
                Send Inquiry
              </button>

              <p className="text-xs text-[#6B7280] text-center">
                We'll respond within 24 hours. Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
