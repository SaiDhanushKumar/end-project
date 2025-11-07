import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "textiles", title: "Textiles" },
  { id: "ceramics", title: "Ceramics" },
  { id: "jewelry", title: "Jewelry" },
  { id: "home", title: "Home Decor" },
];

export default function Categories() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Categories</h1>
      <p className="mt-2 text-foreground/70">Explore by craft and material.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <Link to="/shop" key={c.id} className="block p-6 rounded-lg border border-border bg-card hover:shadow-sm">
            <div className="text-lg font-semibold">{c.title}</div>
            <div className="text-sm text-foreground/70 mt-1">Curated selection of {c.title.toLowerCase()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
