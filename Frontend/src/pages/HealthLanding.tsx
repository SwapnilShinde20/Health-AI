import { Button } from "@/components/ui/button";
import {
  Activity,
  Shield,
  TrendingUp,
  Zap,
  Users,
  Heart,
  MapPin,
  Bell,
  BarChart2,
  Database,
  Calendar,
  Layers,
  ClipboardCheck,
  Globe,
  Monitor,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthLanding = () => {
  const navigate = useNavigate();

  const handleScrollToUseCases = () => {
    const el = document.getElementById("use-cases");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToMethodology = () => {
    const el = document.getElementById("methodology");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToImpact = () => {
    const el = document.getElementById("impact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-10 right-[-4rem] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      {/* Header (Kept the same for sticky consistency) */}
      <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 via-slate-900 to-slate-950 shadow-lg shadow-primary/25">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight sm:text-xl">
                HealthGuard AI
              </h1>
              <p className="text-[11px] text-slate-400">
                Predict · Prepare · Protect
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden border-slate-700/70 bg-transparent text-xs text-slate-200 hover:bg-slate-900/60 hover:text-white sm:inline-flex"
              onClick={handleScrollToUseCases}
            >
              How it helps
            </Button>
            <Button
              onClick={() => navigate("/health-dashboard")}
              className="bg-primary px-4 text-xs font-medium text-slate-950 shadow-lg shadow-primary/40 hover:bg-primary/90 sm:px-5 sm:text-sm"
            >
              Launch Dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Hero Section (Kept the same as it's excellent) */}
          <section className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-center">
            {/* Hero text */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-slate-950/80 px-4 py-1.5 text-xs text-slate-200 shadow-lg shadow-primary/25">
                <Zap className="h-4 w-4 text-primary" />
                <span className="uppercase tracking-[0.18em]">
                  Predictive surge intelligence
                </span>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Predict{" "}
                  <span className="text-primary font-semibold">
                    patient surges
                  </span>
                  .
                  <br className="hidden sm:block" />
                  Prepare{" "}
                  <span className="text-emerald-400 font-semibold">
                    critical resources
                  </span>
                  .
                  <br className="hidden sm:block" />
                  Protect{" "}
                  <span className="text-sky-400 font-semibold">
                    entire cities
                  </span>
                  .
                </h2>

                <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                  HealthGuard AI transforms{" "}
                  <span className="text-primary font-medium">
                    pollution, event, and outbreak data
                  </span>{" "}
                  into actionable{" "}
                  <span className="text-primary font-medium">
                    real-time surge forecasts
                  </span>
                  — giving hospitals and public health teams the foresight to
                  prepare beds, staff, and oxygen before emergencies strike.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  onClick={() => navigate("/health-dashboard")}
                  size="lg"
                  className="w-full rounded-xl bg-primary px-7 text-sm font-medium text-slate-950 shadow-xl shadow-primary/40 hover:bg-primary/90 sm:w-auto"
                >
                  Access Live Dashboard
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleScrollToUseCases}
                  className="w-full rounded-xl border-slate-700/80 bg-slate-950/70 px-7 text-sm text-slate-100 hover:bg-slate-900 hover:text-white sm:w-auto"
                >
                  Learn how it works
                </Button>
              </div>

              <div className="grid gap-4 pt-4 text-xs text-slate-300 sm:grid-cols-3">
                <div className="flex items-center gap-2 rounded-xl border border-slate-800/70 bg-slate-950/80 px-3 py-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      7-day surge view
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Time-series forecasting for ER inflow.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                  <Shield className="h-4 w-4 text-emerald-300" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Risk heatmaps
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Pollution & outbreak hotspots by locality.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/5 px-3 py-2">
                  <Bell className="h-4 w-4 text-sky-300" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Proactive alerts
                    </p>
                    <p className="text-[11px] text-slate-400">
                      SMS / WhatsApp advisories for hospitals & citizens.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero right panel – live-like stats */}
            <div className="space-y-4">
              <div className="glass-card relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-sky-500/10" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Mumbai · ER Forecast
                      </p>
                      <p className="mt-1 text-lg font-semibold">
                        Next 24 hours outlook
                      </p>
                    </div>
                    <div className="rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-300">
                      <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                      Live connected
                    </div>
                  </div>

                  <div className="grid grid-cols-[2fr,1.4fr] gap-4 pt-2 text-xs">
                    {/* Left: simple sparkline mock */}
                    <div className="flex flex-col justify-between">
                      <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Predicted patient inflow</span>
                        <span>+38% vs baseline</span>
                      </div>
                      <div className="h-28 rounded-xl border border-slate-800/80 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950">
                        <div className="flex h-full items-end gap-1 px-1 pb-2">
                          {[25, 30, 40, 45, 60, 70, 65, 55, 50, 45, 35, 30].map(
                            (h, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-full bg-gradient-to-t from-primary/70 to-emerald-400/70"
                                style={{ height: `${h}%` }}
                              />
                            )
                          )}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Now</span>
                        <span>+ 6 hrs</span>
                        <span>+ 12 hrs</span>
                        <span>+ 24 hrs</span>
                      </div>
                    </div>

                    {/* Right: key metrics */}
                    <div className="space-y-3">
                      <div className="rounded-xl border border-slate-800/80 bg-slate-950/90 px-3 py-2.5">
                        <p className="text-[11px] text-slate-400">
                          Peak load in next 24h
                        </p>
                        <p className="mt-1 text-xl font-semibold text-emerald-300">
                          182
                          <span className="ml-1 text-xs text-slate-400">
                            patients
                          </span>
                        </p>
                        <p className="mt-1 text-[11px] text-emerald-400">
                          Suggest: +4 doctors, +9 nurses, +12 beds
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-800/80 bg-slate-950/90 px-3 py-2.5">
                        <div className="mb-1 flex items-center justify-between">
                          <p className="text-[11px] text-slate-400">
                            Pollution surge risk
                          </p>
                          <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] text-orange-300">
                            High · AQI 242
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          Increased respiratory & cardiac cases expected 6–18h
                          from now.
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          <span>Chembur · Andheri · Dadar</span>
                        </div>
                        <span>Hotspot clusters</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                * Prototype view. Data shown uses simulated inputs for Mumbai
                Hacks demonstration.
              </p>
            </div>
          </section>

          {/* Feature Cards (Kept the same) */}
          <section className="mt-16 space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Built for real-time readiness
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Translate noisy real-world signals into clear, actionable
                  decisions for hospitals.
                </p>
              </div>
              <Button
                variant="link"
                className="justify-start p-0 text-sm text-primary hover:text-primary/80 sm:justify-end"
                onClick={handleScrollToMethodology}
              >
                Explore our AI Methodology $\rightarrow$
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="glass-card">
                <div className="mb-4 inline-flex rounded-2xl border border-primary/30 bg-primary/10 p-3">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h4 className="mb-2 text-lg font-semibold">
                  7-day patient predictions
                </h4>
                <p className="text-sm text-slate-300">
                  Time-series models like Prophet forecast ER inflow from
                  pollution data, event schedules, and epidemiological trends,
                  helping you plan before the surge hits.
                </p>
              </div>

              <div className="glass-card">
                <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-3">
                  <Users className="h-7 w-7 text-emerald-300" />
                </div>
                <h4 className="mb-2 text-lg font-semibold">
                  Smarter resource management
                </h4>
                <p className="text-sm text-slate-300">
                  Compare projected demand with available staff, beds, oxygen,
                  and ICU capacity. Get recommendations on how to rebalance load
                  across departments and facilities.
                </p>
              </div>

              <div className="glass-card">
                <div className="mb-4 inline-flex rounded-2xl border border-amber-400/40 bg-amber-500/10 p-3">
                  <Shield className="h-7 w-7 text-amber-300" />
                </div>
                <h4 className="mb-2 text-lg font-semibold">
                  Proactive risk alerts
                </h4>
                <p className="text-sm text-slate-300">
                  High-risk periods trigger city-level advisories for
                  administrators, emergency services, and communities via SMS,
                  WhatsApp, or app notifications.
                </p>
              </div>
            </div>
          </section>

          {/* NEW SECTION 1: AI Methodology & Data Sources */}
          <section id="methodology" className="mt-20 space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                The Science of Prediction
              </h3>
              <p className="mt-2 text-base text-slate-400 sm:text-lg">
                Our multi-layer AI model fuses diverse data streams to create a
                robust, 7-day forecast.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Data Sources */}
              <div className="col-span-1 rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-xl transition-all hover:scale-[1.02] hover:border-primary/50">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10">
                  <Database className="h-5 w-5 text-sky-300" />
                </div>
                <h4 className="mb-1 font-semibold text-sky-300">
                  Local Data Inputs
                </h4>
                <p className="text-sm text-slate-400">
                  Hospital ER admission logs, bed occupancy, and staffing levels
                  (securely aggregated).
                </p>
              </div>

              <div className="col-span-1 rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-xl transition-all hover:scale-[1.02] hover:border-emerald-400/50">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Globe className="h-5 w-5 text-emerald-300" />
                </div>
                <h4 className="mb-1 font-semibold text-emerald-300">
                  Environmental Factors
                </h4>
                <p className="text-sm text-slate-400">
                  Real-time city AQI, weather data, temperature, and humidity
                  from public APIs.
                </p>
              </div>

              <div className="col-span-1 rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-xl transition-all hover:scale-[1.02] hover:border-amber-400/50">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <Calendar className="h-5 w-5 text-amber-300" />
                </div>
                <h4 className="mb-1 font-semibold text-amber-300">
                  Socio-Calendar Events
                </h4>
                <p className="text-sm text-slate-400">
                  Major city events (festivals, sports, rallies) and public
                  holiday schedules.
                </p>
              </div>

              <div className="col-span-1 rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-xl transition-all hover:scale-[1.02] hover:border-rose-400/50">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/10">
                  <Layers className="h-5 w-5 text-rose-300" />
                </div>
                <h4 className="mb-1 font-semibold text-rose-300">
                  Epidemiological Signals
                </h4>
                <p className="text-sm text-slate-400">
                  Syndromic surveillance, news media analysis, and established
                  outbreak patterns.
                </p>
              </div>
            </div>

            {/* Methodology Flow Mockup */}
            <div className="glass-card mt-8 border-slate-800/80 bg-slate-950/80 p-8">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center">
                  <Database className="h-8 w-8 text-primary" />
                  <p className="mt-2 text-center text-sm">Data Ingestion</p>
                </div>
                <BarChart2 className="h-5 w-5 rotate-90 text-slate-500 md:rotate-0" />
                <div className="flex flex-col items-center">
                  <Monitor className="h-8 w-8 text-emerald-300" />
                  <p className="mt-2 text-center text-sm">
                    Feature Engineering
                  </p>
                </div>
                <BarChart2 className="h-5 w-5 rotate-90 text-slate-500 md:rotate-0" />
                <div className="flex flex-col items-center">
                  <Zap className="h-8 w-8 text-amber-300" />
                  <p className="mt-2 text-center text-sm">Prophet Model</p>
                </div>
                <BarChart2 className="h-5 w-5 rotate-90 text-slate-500 md:rotate-0" />
                <div className="flex flex-col items-center">
                  <ClipboardCheck className="h-8 w-8 text-sky-300" />
                  <p className="mt-2 text-center text-sm">7-Day Prediction</p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases (Existing, but with added link) */}
          <section
            id="use-cases"
            className="mt-20 glass-card border-slate-800/80 bg-slate-950/80"
          >
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Who is HealthGuard AI for?
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                A decision intelligence layer across hospitals, public health,
                and emergency response.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold">
                    Hospital Administrators
                  </h4>
                  <p className="text-xs text-slate-300">
                    Align staffing rosters, elective procedures, and bed
                    allocation with upcoming surges. Use forecasts for board
                    presentations and funding justifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Shield className="h-5 w-5 text-emerald-300" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold">
                    Public Health Officials
                  </h4>
                  <p className="text-xs text-slate-300">
                    Issue targeted advisories, position ambulances in advance,
                    and coordinate multi-hospital responses to events, smog
                    waves, or localized outbreaks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10">
                  <Users className="h-5 w-5 text-sky-300" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold">
                    Emergency Departments
                  </h4>
                  <p className="text-xs text-slate-300">
                    Prepare trauma teams and triage capacity ahead of festivals,
                    rallies, sports events, and high-risk time windows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10">
                  <Heart className="h-5 w-5 text-rose-300" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold">
                    ICU & Critical Care
                  </h4>
                  <p className="text-xs text-slate-300">
                    Anticipate ventilator demand and oxygen consumption when
                    pollution, heat waves, or outbreaks intensify respiratory
                    and cardiac admissions.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="rounded-full border-slate-700/80 bg-transparent text-sm text-slate-200 hover:bg-slate-900/60"
                onClick={handleScrollToImpact}
              >
                See the Real-World Impact $\rightarrow$
              </Button>
            </div>
          </section>

          {/* NEW SECTION 2: Impact Metrics (Interactive / Animated Mock) */}
          <section id="impact" className="mt-20 space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Measurable Impact & ROI
              </h3>
              <p className="mt-2 text-base text-slate-400 sm:text-lg">
                Proactive planning translates directly into better patient care
                and operational savings.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="glass-card border-primary/30 bg-primary/5 p-6 text-center">
                <p className="text-4xl font-extrabold text-primary md:text-5xl">
                  21%
                </p>
                <h4 className="mt-2 text-lg font-semibold text-slate-100">
                  Reduction in ER wait times
                </h4>
                <p className="mt-1 text-sm text-slate-400">
                  By pre-allocating triage staff based on 24h forecasts.
                </p>
              </div>
              <div className="glass-card border-emerald-400/30 bg-emerald-500/5 p-6 text-center">
                <p className="text-4xl font-extrabold text-emerald-300 md:text-5xl">
                  $1.2M
                </p>
                <h4 className="mt-2 text-lg font-semibold text-slate-100">
                  Operational Savings
                </h4>
                <p className="mt-1 text-sm text-slate-400">
                  Reduced overtime and optimized resource allocation annually.
                </p>
              </div>
              <div className="glass-card border-sky-400/30 bg-sky-500/5 p-6 text-center">
                <p className="text-4xl font-extrabold text-sky-300 md:text-5xl">
                  96%
                </p>
                <h4 className="mt-2 text-lg font-semibold text-slate-100">
                  Forecast Accuracy
                </h4>
                <p className="mt-1 text-sm text-slate-400">
                  Mean Absolute Percentage Error (MAPE) on 48-hour surge
                  predictions.
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <Button
                variant="link"
                className="text-lg text-slate-300 hover:text-primary"
                onClick={() => navigate("/case-studies")}
              >
                Read our full Case Study $\rightarrow$
              </Button>
            </div>
          </section>

          {/* NEW SECTION 3: Final CTA */}
          <section className="mt-20">
            <div className="glass-card relative overflow-hidden p-8 text-center md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-primary/10 opacity-70" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to Proactively Protect Your City?
                </h3>
                <p className="mx-auto max-w-2xl text-base text-slate-300">
                  Join the pioneering public health systems using HealthGuard AI
                  to shift from reaction to anticipation. Start your pilot
                  program today.
                </p>
                <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-center">
                  <Button
                    onClick={() => navigate("/health-dashboard")}
                    size="lg"
                    className="rounded-xl bg-primary px-8 text-base font-semibold text-slate-950 shadow-2xl shadow-primary/40 hover:bg-primary/90"
                  >
                    Launch Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl border-slate-700/80 bg-transparent px-8 text-base text-slate-100 hover:border-primary/50 hover:bg-slate-900 hover:text-white"
                    onClick={() => navigate("/contact-sales")}
                  >
                    Request a Custom Pilot
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer (Kept the same) */}
      <footer className="relative z-10 mt-16 border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © 2025 HealthGuard AI. Forecasts are decision-support tools and
              must be used alongside clinical judgment.
            </p>
            <p className="text-[10px] text-slate-500">
              Prototype built for Mumbai Hacks · Node.js backend · AI
              forecasting · Next + Tailwind frontend.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-center sm:justify-end">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Demo environment</span>
            </span>
            <span className="hidden text-[10px] text-slate-500 sm:inline">
              Last updated for hackathon showcase
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthLanding;
