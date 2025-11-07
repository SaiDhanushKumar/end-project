import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <p className="mt-3 text-foreground/70">Manage users, products, and orders from this panel.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link to="/dashboards/admin/users" className="p-6 rounded-lg border border-border bg-card hover:shadow-sm">
          <div className="text-lg font-semibold">Users</div>
          <div className="text-sm text-foreground/70 mt-1">View and manage platform users and roles.</div>
        </Link>

        <Link to="/dashboards/admin/products" className="p-6 rounded-lg border border-border bg-card hover:shadow-sm">
          <div className="text-lg font-semibold">Products</div>
          <div className="text-sm text-foreground/70 mt-1">Create, edit, and curate product listings.</div>
        </Link>

        <Link to="/dashboards/admin/orders" className="p-6 rounded-lg border border-border bg-card hover:shadow-sm">
          <div className="text-lg font-semibold">Orders</div>
          <div className="text-sm text-foreground/70 mt-1">Monitor orders and manage fulfillment.</div>
        </Link>
      </div>
    </div>
  );
}
