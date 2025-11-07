import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Role = "admin" | "artisan" | "customer" | "consultant";

type User = {
  username: string;
  name: string;
  role: Role;
};

type AuthContextValue = {
  user: User | null;
  login: (username: string, password: string) => Promise<User | null>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const mockUsers: Record<string, { password: string; name: string; role: Role }> = {
  admin: { password: "adminpass", name: "Platform Admin", role: "admin" },
  artisan: { password: "artisanpass", name: "Asha Weaver", role: "artisan" },
  customer: { password: "customerpass", name: "Jamie Buyer", role: "customer" },
  consultant: { password: "consultantpass", name: "Dr. Rao", role: "consultant" },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem("th_user");
      return raw ? JSON.parse(raw) as User : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("th_user", JSON.stringify(user));
    else localStorage.removeItem("th_user");
  }, [user]);

  const login = async (username: string, password: string) => {
    const record = mockUsers[username];
    if (record && record.password === password) {
      const u: User = { username, name: record.name, role: record.role };
      setUser(u);
      return u;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
