import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, Bed, Wind } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"; // already importing useState, just add useEffect
import { healthData } from "@/data/healthData";
import ResourceCard from "@/components/Health/ResourceCard";
import PatientChart from "@/components/Health/PatientChart";
import AQIChart from "@/components/Health/AQIChart";
import EpidemicChart from "@/components/Health/EpidemicChart";
import AlertsPanel from "@/components/Health/AlertsPanel";
import EventsList from "@/components/Health/EventsList";
import ResourceModal from "@/components/Health/ResourceModal";

import { useCityDashboardData } from "@/hooks/useCityDashboardData";

const HealthDashboard = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string>("Mumbai");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    title: string;
    unit: string;
    details: any[];
  } | null>(null);

  // 🔐 Simple auth guard
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  // 🔹 NEW: fetch live data for the selected city
  const { cityData, festivals, isLoading, isError } =
    useCityDashboardData(selectedCity);

  // Fallbacks to your static mock data if backend not ready
  const fallbackCityData = healthData.cities[selectedCity];
  const commonData = healthData.common;

  const currentData = cityData ?? fallbackCityData;
  const currentFestivals =
    festivals.length > 0 ? festivals : commonData.festivals;

  const handleResourceClick = (
    title: string,
    unit: string,
    details: any[]
  ) => {
    setModalData({ title, unit, details });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-lg px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("/")}
              className="border-primary/30"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">HealthGuard AI</h1>
                <p className="text-xs text-muted-foreground">
                  Live Healthcare Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* City Selector */}
        <div className="flex items-center justify-between fade-in">
          <h2 className="text-2xl font-semibold">Patient Surge Predictions</h2>
          <Tabs value={selectedCity} onValueChange={setSelectedCity}>
            <TabsList className="bg-card/80 backdrop-blur-xl border border-primary/20">
              <TabsTrigger
                value="Mumbai"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Mumbai
              </TabsTrigger>
              <TabsTrigger
                value="Delhi"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Delhi
              </TabsTrigger>
              <TabsTrigger
                value="Bengaluru"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Bengaluru
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Loading / error info */}
        {(isLoading || isError) && (
          <p className="text-xs text-muted-foreground">
            {isLoading
              ? "Loading live data from HealthGuard AI backend… (showing fallback demo data if needed)"
              : "Could not fetch live data, showing fallback demo data."}
          </p>
        )}

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up stagger-1">
          <ResourceCard
            title="Staff Required"
            required={currentData.resources.staff.required}
            available={currentData.resources.staff.available}
            unit={currentData.resources.staff.unit}
            icon={Users}
            onClick={() =>
              handleResourceClick(
                "Staff",
                currentData.resources.staff.unit,
                currentData.resources.staff.details
              )
            }
          />
          <ResourceCard
            title="ICU Beds"
            required={currentData.resources.beds.required}
            available={currentData.resources.beds.available}
            unit={currentData.resources.beds.unit}
            icon={Bed}
            onClick={() =>
              handleResourceClick(
                "ICU Beds",
                currentData.resources.beds.unit,
                currentData.resources.beds.details
              )
            }
          />
          <ResourceCard
            title="Oxygen Supply"
            required={currentData.resources.oxygen.required}
            available={currentData.resources.oxygen.available}
            unit={currentData.resources.oxygen.unit}
            icon={Wind}
            onClick={() =>
              handleResourceClick(
                "Oxygen",
                currentData.resources.oxygen.unit,
                currentData.resources.oxygen.details
              )
            }
          />
        </div>

        {/* Main Prediction Chart */}
        <div className="chart-container fade-in-up stagger-2">
          <h3 className="text-lg font-semibold mb-4">
            7-Day Predicted Patient Inflow - {selectedCity}
          </h3>
          <PatientChart data={currentData.prediction} />
        </div>

        {/* Secondary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="chart-container fade-in-up stagger-3">
            <h3 className="text-lg font-semibold mb-4">
              AQI Trend (Today) - {selectedCity}
            </h3>
            <AQIChart data={currentData.aqiTrend} />
          </div>

          <div className="chart-container fade-in-up stagger-3">
            <h3 className="text-lg font-semibold mb-4">
              National Epidemic Trends
            </h3>
            <EpidemicChart data={commonData.epidemicTrend} />
          </div>
        </div>

        {/* Alerts and Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="fade-in-up stagger-4">
            <AlertsPanel alerts={currentData.alerts} />
          </div>

          <div className="fade-in-up stagger-4">
            <EventsList festivals={currentFestivals} />
          </div>
        </div>
      </main>

      {/* Resource Modal */}
      {modalData && (
        <ResourceModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title={modalData.title}
          unit={modalData.unit}
          details={modalData.details}
        />
      )}
    </div>
  );
};

export default HealthDashboard;
