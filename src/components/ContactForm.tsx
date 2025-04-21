
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, connect to backend or email service.
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-3 text-pmblue">Contact Me</h2>
      <p className="mb-4 text-muted-foreground">Have a question or want to get in touch? Fill out the form below.</p>
      {submitted ? (
        <div className="text-pmblue font-semibold py-8 text-center">Thank you! Your message has been sent.</div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="name">Name</label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-white"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2 bg-white"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-pmblue hover:bg-pmblue-dark text-white rounded shadow font-medium"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
