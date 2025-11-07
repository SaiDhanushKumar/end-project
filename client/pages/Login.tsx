import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/lib/auth";

export default function Login() {
  const params = useParams();
  const roleParam = params.role as string | undefined;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || "/";

  useEffect(() => {
    if (roleParam) {
      setUsername(roleParam);
      setPassword(`${roleParam}pass`);
    }
  }, [roleParam]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const user = await auth.login(username, password);
    if (user) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid credentials. Try 'admin'/'adminpass' or 'artisan'/'artisanpass'");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-card border border-border rounded-lg">
        <h2 className="text-2xl font-semibold">Sign in {roleParam ? `as ${roleParam}` : ''}</h2>
        <p className="mt-2 text-foreground/70">Use one of the demo accounts: admin, artisan, customer, consultant.</p>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <input className="w-full px-4 py-3 border border-border rounded-md" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" className="w-full px-4 py-3 border border-border rounded-md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error ? <div className="text-sm text-destructive mt-1">{error}</div> : null}
          <div className="flex items-center justify-between">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">Sign in</button>
            <div className="flex gap-2 items-center">
              <button type="button" className="text-sm text-foreground/70" onClick={() => { setUsername("admin"); setPassword("adminpass"); }}>Admin</button>
              <button type="button" className="text-sm text-foreground/70" onClick={() => { setUsername("artisan"); setPassword("artisanpass"); }}>Artisan</button>
              <button type="button" className="text-sm text-foreground/70" onClick={() => { setUsername("customer"); setPassword("customerpass"); }}>Customer</button>
              <button type="button" className="text-sm text-foreground/70" onClick={() => { setUsername("consultant"); setPassword("consultantpass"); }}>Consultant</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
