import React from "react";
import ProductCard from "@/components/ProductCard";

const featured = [
  { title: "Handwoven Basket", price: "$45", tag: "New" },
  { title: "Ceramic Vase", price: "$120", tag: "Handmade" },
  { title: "Beaded Necklace", price: "$32", tag: "Artisan" },
  { title: "Wool Shawl", price: "$78", tag: "Cozy" },
];

export default function Index() {
  return (
    <div className="bg-background">
      <section className="pt-12 pb-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">Tribal Handicrafts Marketplace</h1>
            <p className="mt-4 text-lg text-foreground/70 max-w-xl">Discover authentic, handcrafted goods from local artisans. Each piece tells a story — ethically sourced and thoughtfully curated.</p>

            <div className="mt-6 flex gap-3">
              <a href="/shop" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Shop Collections</a>
              <a href="/about" className="inline-flex items-center px-6 py-3 rounded-md border border-border text-foreground/80">Learn More</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <div className="p-4 bg-card rounded-md border border-border">
                <div className="text-sm font-semibold">Free Shipping</div>
                <div className="text-xs text-foreground/70">On orders over $75</div>
              </div>
              <div className="p-4 bg-card rounded-md border border-border">
                <div className="text-sm font-semibold">Authentic Makers</div>
                <div className="text-xs text-foreground/70">Direct from artisans</div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full rounded-lg overflow-hidden card-shadow border border-border">
              <div className="bg-gradient-to-br from-primary/30 to-accent/20 p-8">
                <div className="text-sm text-foreground/70">Featured Artisan</div>
                <div className="mt-4 text-2xl font-semibold">Asha's Weaves</div>
                <p className="mt-2 text-foreground/70">Handloomed textiles rooted in tradition. Each shawl is hand-spun and naturally dyed.</p>
                <div className="mt-4 flex gap-3">
                  <a href="/shop" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium">View Collection</a>
                  <a href="/about" className="text-sm underline">Meet the artisan</a>
                </div>
              </div>
              <div className="p-6 bg-card">
                <div className="grid grid-cols-2 gap-4">
                  {featured.map((p) => (
                    <div key={p.title}>
                      <div className="text-sm font-medium">{p.title}</div>
                      <div className="text-xs text-foreground/70">{p.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold">Featured Collections</h2>
          <p className="text-foreground/70 mt-2">Curated sets that celebrate craft and culture.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((it) => (
              <ProductCard key={it.title} title={it.title} price={it.price} tag={it.tag} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">Stories from Artisans</h3>
            <p className="mt-2 text-foreground/70">Read about the techniques, materials and cultural traditions behind each product.</p>
          </div>
          <div className="flex justify-end">
            <a href="/about" className="bg-primary text-primary-foreground px-5 py-3 rounded-md">Read Stories</a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold">Join our newsletter</h3>
          <p className="text-foreground/70 mt-2">Get early access to new collections and artisan drops.</p>
          <form className="mt-4 flex items-center justify-center gap-2">
            <input aria-label="Email" placeholder="Enter your email" className="px-4 py-3 rounded-l-md border border-border w-80 text-sm" />
            <button className="bg-accent text-accent-foreground px-4 py-3 rounded-r-md text-sm">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
