import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <p className="mt-2 text-foreground/70">Complete your order securely.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <form className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input className="w-full px-4 py-3 border border-border rounded-md" placeholder="Your name" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Shipping address</label>
            <input className="w-full px-4 py-3 border border-border rounded-md" placeholder="Street, city, country" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Postal code" className="px-4 py-3 border border-border rounded-md" />
            <input placeholder="Phone" className="px-4 py-3 border border-border rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Payment method</label>
            <select className="w-full px-4 py-3 border border-border rounded-md">
              <option>Credit / Debit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
            </select>
          </div>

          <div className="mt-4">
            <button type="button" className="bg-primary text-primary-foreground px-6 py-3 rounded-md">Place order</button>
          </div>
        </form>

        <aside className="p-6 border border-border rounded-md bg-card">
          <div className="text-sm text-foreground/70">Order Summary</div>
          <div className="mt-2">
            <div className="flex items-center justify-between"><div>Handwoven Basket x1</div><div>$45</div></div>
            <div className="flex items-center justify-between mt-2"><div>Beaded Necklace x2</div><div>$64</div></div>
          </div>
          <div className="mt-4 text-2xl font-bold">$109</div>
          <div className="mt-4">
            <Link to="/shop" className="text-sm underline">Continue shopping</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
