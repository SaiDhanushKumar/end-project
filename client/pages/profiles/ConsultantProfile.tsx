import React from "react";
import { useAuth } from "@/lib/auth";

export default function ConsultantProfile() {
  const { user } = useAuth();
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Cultural Consultant Profile</h1>
      <p className="mt-2 text-foreground/70">Welcome, {user?.name}. Review content and provide guidance.</p>
    </div>
  );
}
