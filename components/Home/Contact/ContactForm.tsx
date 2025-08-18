"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(`❌ Failed: ${data.error || "Try again."}`);
      }
    } catch (err) {
      setStatus("⚠️ Network error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        autoComplete="name"
        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        autoComplete="email"
        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        value={form.phone}
        onChange={handleChange}
        autoComplete="tel"
        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        autoComplete="off"
        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white h-32"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg"
      >
        {loading ? "Sending..." : "Send Message 🚀"}
      </button>

      {status && (
        <p
          className={`text-center text-sm mt-2 ${
            status.startsWith("✅")
              ? "text-green-400"
              : status.startsWith("❌")
              ? "text-red-400"
              : "text-yellow-400"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
