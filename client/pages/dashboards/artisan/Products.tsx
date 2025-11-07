import React from "react";

export default function ArtisanProducts() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-semibold">Your Products</h2>
      <p className="text-foreground/70 mt-2">Create and manage your product listings.</p>
      <div className="mt-6">
        <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">New Product</button>
      </div>
    </div>
  );
}
