import React from "react";
import { Link } from "react-router-dom";

export default function Dashboards() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Dashboards</h1>
      <p className="mt-2 text-foreground/70">Quick access to role-specific areas.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/dashboards/admin" className="p-6 rounded-lg border border-border bg-card">Admin Dashboard</Link>
        <Link to="/dashboards/artisan" className="p-6 rounded-lg border border-border bg-card">Artisan Dashboard</Link>
        <Link to="/dashboards/customer" className="p-6 rounded-lg border border-border bg-card">Customer Dashboard</Link>
        <Link to="/dashboards/consultant" className="p-6 rounded-lg border border-border bg-card">Cultural Consultant</Link>
      </div>
    </div>
  );
}
