import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = [
    { title: "Handwoven Basket", price: 45, qty: 1 },
    { title: "Beaded Necklace", price: 32, qty: 2 },
  ];
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Your Cart</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="space-y-4">
            {items.map((it) => (
              <div key={it.title} className="p-4 border border-border rounded-md flex items-center justify-between">
                <div>
                  <div className="font-medium">{it.title}</div>
                  <div className="text-sm text-foreground/70">Qty: {it.qty}</div>
                </div>
                <div className="font-medium">${it.price}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="p-6 border border-border rounded-md bg-card">
          <div className="text-sm text-foreground/70">Order Summary</div>
          <div className="mt-2 text-2xl font-bold">${subtotal}</div>
          <div className="mt-4">
            <Link to="/checkout" className="w-full inline-block text-center bg-primary text-primary-foreground px-4 py-2 rounded-md">Proceed to Checkout</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
