import React from "react";

export default function ProductCard({ title, price, image, tag }: { title: string; price: string; image?: string; tag?: string }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden card-shadow border border-border">
      <div className="h-56 bg-muted/60 flex items-center justify-center">
        {/* Image placeholder */}
        <div className="w-40 h-40 bg-primary/10 rounded-md flex items-center justify-center text-primary">{image ? <img src={image} alt={title} className="object-cover w-full h-full" /> : <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 7h18"/></svg>}</div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">{title}</h3>
          {tag ? <div className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground">{tag}</div> : null}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-foreground/80">{price}</div>
          <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm">Add</button>
        </div>
      </div>
    </div>
  );
}
