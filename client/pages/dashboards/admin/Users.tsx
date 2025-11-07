import React from "react";

const mockUsers = [
  { id: 1, name: "Asha Weaver", username: "artisan", role: "artisan" },
  { id: 2, name: "Jamie Buyer", username: "customer", role: "customer" },
  { id: 3, name: "Platform Admin", username: "admin", role: "admin" },
  { id: 4, name: "Dr. Rao", username: "consultant", role: "consultant" },
];

export default function AdminUsers() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Users</h2>
        <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Invite user</button>
      </div>

      <div className="mt-6 bg-card border border-border rounded-md overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-muted/40">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((u) => (
              <tr key={u.id} className="border-t border-border">
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.username}</td>
                <td className="px-4 py-3">{u.role}</td>
                <td className="px-4 py-3">
                  <button className="px-3 py-1 rounded-md border border-border text-sm mr-2">Edit</button>
                  <button className="px-3 py-1 rounded-md bg-destructive text-destructive-foreground text-sm">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
