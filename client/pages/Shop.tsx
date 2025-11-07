import React from "react";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";

const products = [
  { title: "Handwoven Basket", price: "$45", slug: "handwoven-basket" },
  { title: "Ceramic Vase", price: "$120", slug: "ceramic-vase" },
  { title: "Beaded Necklace", price: "$32", slug: "beaded-necklace" },
  { title: "Wool Shawl", price: "$78", slug: "wool-shawl" },
  { title: "Brass Bells", price: "$18", slug: "brass-bells" },
  { title: "Wooden Bowl", price: "$55", slug: "wooden-bowl" },
  { title: "Embroidered Pillow", price: "$48", slug: "embroidered-pillow" },
  { title: "Hand-dyed Rug", price: "$220", slug: "hand-dyed-rug" },
];

export default function Shop() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Shop Collections</h1>
          <p className="mt-2 text-foreground/70">Browse handcrafted items from verified artisans.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <Link to="/categories" className="px-4 py-2 rounded-md border border-border text-sm">All Categories</Link>
          <Link to="/cart" className="px-4 py-2 rounded-md bg-primary text-primary-foreground">View Cart</Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link key={p.slug} to={`/product/${p.slug}`}>
            <ProductCard title={p.title} price={p.price} />
          </Link>
        ))}
      </div>
    </div>
  );
}
