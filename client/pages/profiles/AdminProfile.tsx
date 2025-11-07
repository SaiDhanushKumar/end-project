import React from "react";
import { useAuth } from "@/lib/auth";

export default function AdminProfile() {
  const { user } = useAuth();
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Admin Profile</h1>
      <p className="mt-2 text-foreground/70">Welcome, {user?.name}. Manage site content and support.</p>
    </div>
  );
}
