import React from "react";
import { Link } from "react-router-dom";

const mockProducts = [
  { id: 1, title: "Handwoven Basket", price: "$45", stock: 12 },
  { id: 2, title: "Ceramic Vase", price: "$120", stock: 3 },
  { id: 3, title: "Beaded Necklace", price: "$32", stock: 20 },
];

export default function AdminProducts() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Products</h2>
        <Link to="/dashboards/admin/products/new" className="px-4 py-2 rounded-md bg-primary text-primary-foreground">New product</Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {mockProducts.map((p) => (
          <div key={p.id} className="p-4 border border-border rounded-md bg-card flex items-center justify-between">
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-foreground/70">{p.price} • {p.stock} in stock</div>
            </div>
            <div className="flex items-center gap-2">
              <Link to={`/dashboards/admin/products/${p.id}`} className="px-3 py-1 rounded-md border border-border text-sm">Edit</Link>
              <button className="px-3 py-1 rounded-md bg-destructive text-destructive-foreground text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
