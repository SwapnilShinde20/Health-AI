// src/pages/Login.tsx
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { ShieldCheck, Activity, Loader2 } from "lucide-react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

interface LoginResponse {
  access_token: string;
  token_type: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Login failed");
      }
      return (await res.json()) as LoginResponse;
    },
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
      navigate("/health-dashboard");
    },
  });

  const isLoading = loginMutation.isPending;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Soft background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6">
        <Card className="w-full max-w-4xl overflow-hidden border border-slate-800/60 bg-slate-950/70 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
          <div className="grid gap-0 md:grid-cols-[1.1fr,1fr]">
            {/* Left brand / hero panel – visible on md+ */}
            <div className="relative hidden flex-col justify-between border-r border-slate-800/60 bg-gradient-to-br from-emerald-500/15 via-sky-500/10 to-transparent px-8 py-8 md:flex">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/70 shadow-lg shadow-emerald-500/30">
                  <ShieldCheck className="h-6 w-6 text-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-emerald-300">
                    HealthGuard AI
                  </p>
                  <p className="text-xs text-slate-300/80">
                    Predict · Prepare · Protect
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
                  Intelligent surge forecasting
                </h2>
                <p className="text-sm leading-relaxed text-slate-300/90">
                  Get ahead of ER rushes with real-time insights on{" "}
                  <span className="text-emerald-300">
                    patient inflow, pollution spikes
                  </span>{" "}
                  and{" "}
                  <span className="text-sky-300">
                    event-driven health risks
                  </span>
                  . Designed for hospitals, policymakers and responders.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300">
                    Live risk scoring
                  </span>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-sky-300">
                    Resource planning
                  </span>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-300">
                    Alert automation
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-[11px] text-slate-400/80">
                <div className="flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Hackathon prototype · Mumbai Hacks</span>
                </div>
                <span className="hidden sm:inline">
                  Built with Node.js · FastAPI · React
                </span>
              </div>
            </div>

            {/* Right – login form */}
            <CardContent className="flex flex-col justify-center p-6 sm:p-8">
              <CardHeader className="px-0 pt-0 pb-4">
                <CardTitle className="text-xl font-semibold tracking-tight">
                  Welcome back
                </CardTitle>
                <CardDescription className="mt-1 text-xs sm:text-sm text-slate-400">
                  Sign in to access HealthGuard AI&apos;s live dashboard, risk
                  insights and hospital readiness planner.
                </CardDescription>
              </CardHeader>

              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@hospital.org"
                    className="h-10 border-slate-700/70 bg-slate-950/80 text-sm placeholder:text-slate-500 focus-visible:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-slate-200">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-[11px] font-medium text-slate-400 hover:text-emerald-300"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-10 border-slate-700/70 bg-slate-950/80 text-sm placeholder:text-slate-500 focus-visible:ring-emerald-500"
                  />
                </div>

                {loginMutation.isError && (
                  <p className="text-xs text-red-400">
                    {(loginMutation.error as Error).message ||
                      "Invalid email or password."}
                  </p>
                )}

                <Button
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 disabled:cursor-not-allowed"
                  onClick={() => loginMutation.mutate()}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Logging you in…
                    </>
                  ) : (
                    "Login to dashboard"
                  )}
                </Button>

                <p className="pt-2 text-[11px] leading-relaxed text-slate-400">
                  For demo during the hackathon, use the credentials shared with
                  the jury. Your activity may be{" "}
                  <span className="text-emerald-300">logged for analytics</span>{" "}
                  to showcase system impact.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
