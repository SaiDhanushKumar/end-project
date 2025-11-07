import React from "react";

const mockOrders = [
  { id: 1001, customer: "Jamie Buyer", total: "$89", status: "Processing" },
  { id: 1002, customer: "Asha Weaver", total: "$45", status: "Shipped" },
  { id: 1003, customer: "Ram Seller", total: "$220", status: "Delivered" },
];

export default function AdminOrders() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-semibold">Orders</h2>

      <div className="mt-6 bg-card border border-border rounded-md overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-muted/40">
            <tr>
              <th className="px-4 py-3">Order #</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((o) => (
              <tr key={o.id} className="border-t border-border">
                <td className="px-4 py-3">{o.id}</td>
                <td className="px-4 py-3">{o.customer}</td>
                <td className="px-4 py-3">{o.total}</td>
                <td className="px-4 py-3">{o.status}</td>
                <td className="px-4 py-3">
                  <button className="px-3 py-1 rounded-md border border-border text-sm mr-2">View</button>
                  <button className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
