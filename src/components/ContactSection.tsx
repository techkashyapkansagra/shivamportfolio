import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiBase}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        // try to parse error body safely
        let errBody: any = {};
        try {
          errBody = await res.json();
        } catch (_) {
          // ignore parse errors
        }
        throw new Error(errBody?.error || `Request failed with status ${res.status}`);
      }

      alert("Thank you — your message was sent successfully.");
      setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
    } catch (err: any) {
      console.error("Contact form submit error:", err);
      alert("Could not send message: " + (err?.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-bold font-display mb-4">
            Let's Ignite Your Growth
          </h3>
          <p className="text-text-muted text-lg">
            Ready to transform your digital presence? Get in touch for a free
            consultation and let's discuss how we can help your business thrive.
          </p>
        </div>

        <div className="space-y-6">
          <motion.a
            href="tel:9157913391"
            whileHover={{
              x: 5,
            }}
            className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Call Us</p>
              <p className="text-lg font-semibold">9157913391</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:adspark15@gmail.com"
            whileHover={{
              x: 5,
            }}
            className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Email Us</p>
              <p className="text-lg font-semibold">adspark15@gmail.com</p>
            </div>
          </motion.a>

          <motion.div
            whileHover={{
              x: 5,
            }}
            className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Location</p>
              <p className="text-lg font-semibold">India</p>
            </div>
          </motion.div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-text-muted text-sm mb-4">Why choose Adspark?</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>Real Estate Marketing Specialists</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Data-Driven Performance Campaigns</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span>Transparent Reporting & Communication</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{
          opacity: 0,
          x: 20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl bg-surface/50 border border-white/10 backdrop-blur-sm space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company/Business
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option value="">Select a service</option>
              <option value="real-estate">Real Estate Marketing</option>
              <option value="performance-ads">Performance Advertising</option>
              <option value="content-creation">Content Creation</option>
              <option value="seo">SEO Services</option>
              <option value="social-media">Social Media Management</option>
              <option value="full-service">Full Service Package</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              Monthly Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option value="">Select budget range</option>
              <option value="10k-25k">₹10,000 - ₹25,000</option>
              <option value="25k-50k">₹25,000 - ₹50,000</option>
              <option value="50k-100k">₹50,000 - ₹1,00,000</option>
              <option value="100k+">₹1,00,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            placeholder="Tell us about your project and goals..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-60">
          <span>{loading ? "Sending..." : "Get Your Free Consultation"}</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-xs text-text-muted text-center">
          We respect your privacy. Your information will never be shared.
        </p>
      </motion.form>
    </div>
  );
}
