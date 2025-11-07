import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-2 text-foreground/70">Have a question or need help? Send us a message and we'll respond shortly.</p>

      <form className="mt-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Your name" className="px-4 py-3 border border-border rounded-md" />
          <input placeholder="Email" className="px-4 py-3 border border-border rounded-md" />
        </div>
        <textarea placeholder="Message" className="mt-4 px-4 py-3 border border-border rounded-md w-full h-40" />
        <div className="mt-4">
          <button type="button" className="bg-primary text-primary-foreground px-5 py-3 rounded-md">Send Message</button>
        </div>
      </form>
    </div>
  );
}
