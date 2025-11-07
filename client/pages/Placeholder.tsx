import React from "react";

export default function Placeholder({ title = "Page" }: { title?: string }) {
  return (
    <div className="min-h-[60vh] container mx-auto py-20 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-3 text-foreground/70">This page is a placeholder. Tell me what you want here and I will implement it.</p>
      </div>
    </div>
  );
}
