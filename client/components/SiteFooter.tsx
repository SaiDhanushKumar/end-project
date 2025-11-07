import React from "react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-semibold">Tribal Handicrafts</div>
          <p className="mt-2 text-sm text-foreground/70">Celebrating artisans and traditional crafts from around the world.</p>
        </div>

        <div className="flex flex-col">
          <div className="font-medium mb-2">Explore</div>
          <Link to="/shop" className="text-sm text-foreground/70 hover:underline">Shop</Link>
          <Link to="/categories" className="mt-1 text-sm text-foreground/70 hover:underline">Categories</Link>
          <Link to="/about" className="mt-1 text-sm text-foreground/70 hover:underline">About</Link>
        </div>

        <div>
          <div className="font-medium mb-2">Stay in touch</div>
          <p className="text-sm text-foreground/70">Subscribe for new collections and artisan stories.</p>
          <form className="mt-3 flex max-w-md">
            <input aria-label="Email" placeholder="Your email" className="flex-1 rounded-l-md px-3 py-2 border border-border bg-card text-sm" />
            <button className="bg-primary text-primary-foreground px-4 rounded-r-md text-sm font-medium">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-border mt-6">
        <div className="container mx-auto py-4 text-sm text-foreground/60 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Tribal Handicrafts. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
