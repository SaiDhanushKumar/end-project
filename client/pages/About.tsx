import React from "react";

export default function About() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">About Tribal Handicrafts Marketplace</h1>
      <p className="mt-4 text-foreground/70 max-w-3xl">
        Create a platform where tribal artisans can display and sell their handcrafted items. The site helps them reach both local customers and businesses around the world, supporting the preservation and marketing of their traditional crafts.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Roles & Capabilities</h2>
        <ul className="list-disc ml-6 mt-3 text-foreground/70">
          <li><strong>Admin:</strong> Manage platform content, monitor transactions, and resolve issues.</li>
          <li><strong>Artisan:</strong> Create and update product listings, manage orders, and communicate with customers.</li>
          <li><strong>Customer:</strong> Explore and purchase handcrafted items, provide reviews, and participate in promotions.</li>
          <li><strong>Cultural Consultant:</strong> Ensure that the content accurately represents traditional crafts and heritage.</li>
        </ul>
      </div>
    </div>
  );
}
