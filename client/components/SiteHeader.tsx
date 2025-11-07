import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { useState } from "react";

const NavLink: React.FC<{ to: string; children: React.ReactNode }>
 = ({ to, children }) => {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
        active ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
};

export default function SiteHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const goProfile = () => {
    if (!user) return navigate('/login');
    const role = user.role;
    switch (role) {
      case 'admin': return navigate('/profile/admin');
      case 'artisan': return navigate('/profile/artisan');
      case 'customer': return navigate('/profile/customer');
      case 'consultant': return navigate('/profile/consultant');
      default: return navigate('/');
    }
  };

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-sm">TH</div>
          <div>
            <div className="text-lg font-semibold">Tribal Handicrafts</div>
            <div className="text-xs text-foreground/60">Marketplace</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/shop" className="hidden md:inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium">
            Start Shopping
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <button onClick={goProfile} className="px-3 py-2 rounded-md text-sm font-medium bg-muted/20">{user.name}</button>
              <button onClick={() => { logout(); navigate('/'); }} className="px-3 py-2 rounded-md text-sm font-medium border border-border">Sign out</button>
            </div>
          ) : (
            <div className="relative">
              <button className="px-3 py-2 rounded-md text-sm font-medium border border-border" onClick={() => setOpen(o => !o)}>Sign in</button>
              {open ? (
                <div className="absolute right-0 mt-2 w-44 bg-card border border-border rounded-md shadow-sm py-2">
                  <Link to="/login/admin" className="block px-3 py-2 text-sm hover:bg-muted/40">Admin</Link>
                  <Link to="/login/artisan" className="block px-3 py-2 text-sm hover:bg-muted/40">Artisan</Link>
                  <Link to="/login/customer" className="block px-3 py-2 text-sm hover:bg-muted/40">Customer</Link>
                  <Link to="/login/consultant" className="block px-3 py-2 text-sm hover:bg-muted/40">Consultant</Link>
                </div>
              ) : null}
            </div>
          )}

          <button className="md:hidden p-2 rounded-md bg-muted/80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
