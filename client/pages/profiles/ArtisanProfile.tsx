import React from "react";
import { useAuth } from "@/lib/auth";

export default function ArtisanProfile() {
  const { user } = useAuth();
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Artisan Profile</h1>
      <p className="mt-2 text-foreground/70">Welcome, {user?.name}. Create and manage your product listings here.</p>
    </div>
  );
}
