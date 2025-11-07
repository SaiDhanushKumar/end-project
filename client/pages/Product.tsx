import React from "react";
import { useParams, Link } from "react-router-dom";

const mock: Record<string, any> = {
  "handwoven-basket": {
    title: "Handwoven Basket",
    price: "$45",
    description: "A sturdy handwoven basket made from locally-sourced grasses. Perfect for storage or decor.",
  },
  "ceramic-vase": {
    title: "Ceramic Vase",
    price: "$120",
    description: "Glazed ceramic vase using traditional techniques. Each piece varies slightly.",
  },
  "beaded-necklace": {
    title: "Beaded Necklace",
    price: "$32",
    description: "Colorful necklace handcrafted by artisans using glass and natural beads.",
  },
  "wool-shawl": {
    title: "Wool Shawl",
    price: "$78",
    description: "Handloomed wool shawl, naturally dyed and soft to the touch.",
  },
};

export default function Product() {
  const { id } = useParams();
  const product = id ? mock[id] ?? { title: "Product Not Found", price: "", description: "" } : { title: "Product Not Found", price: "", description: "" };

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="rounded-lg overflow-hidden card-shadow border border-border h-96 bg-muted/40 flex items-center justify-center">
            {/* Placeholder image area */}
            <div className="text-foreground/60">Image placeholder</div>
          </div>
          <h1 className="text-2xl font-semibold mt-6">{product.title}</h1>
          <p className="mt-3 text-foreground/70">{product.description}</p>
        </div>

        <aside className="p-6 border border-border rounded-lg bg-card">
          <div className="text-2xl font-bold">{product.price}</div>
          <div className="mt-4">
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md">Add to cart</button>
          </div>
          <div className="mt-4 text-sm text-foreground/70">Ships in 3-7 business days</div>
          <div className="mt-6">
            <Link to="/shop" className="text-sm underline">Back to shop</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
