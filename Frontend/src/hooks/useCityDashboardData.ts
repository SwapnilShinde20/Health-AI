// src/hooks/useCityDashboardData.ts
import { useQuery } from "@tanstack/react-query";
import {
  fetchDashboardSummary,
  fetchAqiTrend,
  fetchEvents,
  fetchForecastWithResources,
  DashboardSummaryResponse,
  AqiTrendResponse,
  EventsResponse,
} from "@/lib/api";

import type { CityData, Festival } from "@/data/healthData";

interface UseCityDashboardResult {
  cityData: CityData | null;
  festivals: Festival[];
  isLoading: boolean;
  isError: boolean;
}

export function useCityDashboardData(city: string): UseCityDashboardResult {
  const { data, isLoading, isError } = useQuery({
  queryKey: ["dashboard-city", city],
  queryFn: async () => {
    // 1) Make sure forecasts & alerts exist in DB for next 7 days
    await fetchForecastWithResources(city, 7);

    // 2) Now fetch everything else in parallel
    const [summary, aqi, events] = await Promise.all<
      [DashboardSummaryResponse, AqiTrendResponse, EventsResponse]
    >([
      fetchDashboardSummary(city),
      fetchAqiTrend(city),
      fetchEvents(city),
    ]);

    return { summary, aqi, events };
  },
});


 if (!data) {
  return {
    cityData: null,
    festivals: [],
    isLoading,
    isError,
  };
}

const { summary, aqi, events } = data;

// ---- 1) Prediction: map forecasts -> PredictionPoint[] ----
const prediction = summary.forecasts.map((f, index) => ({
  day: index === 0 ? "Today" : `Day+${index}`,
  predictedInflow: f.predicted_patients,
  // backend doesn't have drivers currently, so keep a generic line
  drivers: "Predicted ER inflow based on historical and environment patterns",
}));

// ---- 2) Resources: use forecasts[0].resources + hospital.raw ----
const first = summary.forecasts[0];
const hospitalRaw: any = summary.hospital?.raw ?? {};

const staffSummary = first.resources.summary;
const staffBreak = first.resources.breakdown.staff;
const icuBreak = first.resources.breakdown.icu;
const oxyBreak = first.resources.breakdown.oxygen;

const rawStaff = hospitalRaw.staff ?? {};
const rawIcu = hospitalRaw.icu ?? {};
const rawOxy = hospitalRaw.oxygen ?? {};

// TOTAL required for cards
const staffRequired = staffSummary.staff_required ?? staffBreak.required ?? 0;
const icuRequired = staffSummary.icu_required ?? icuBreak.required ?? 0;
const oxyRequired =
  staffSummary.oxygen_needed_l_per_day ??
  oxyBreak.total_l_per_day ??
  0;

// TOTAL available from hospital capacity
const staffAvailableTotal =
  (rawStaff.doctors ?? 0) + (rawStaff.nurses ?? 0) + (rawStaff.support ?? 0);

const bedsAvailableTotal =
  (rawIcu.ventilator_beds ?? 0) + (rawIcu.non_ventilator_beds ?? 0);

const oxyAvailableTotal =
  (rawOxy.cylinders ?? 0) +
  (rawOxy.plant_output_lpm ?? 0) +
  (rawOxy.tanks_output_lpm ?? 0);

// DETAILS exactly like mock → one row per category
const staffDetails = [
  {
    category: "Doctors",
    required: staffBreak.doctors ?? 0,
    available: rawStaff.doctors ?? 0,
  },
  {
    category: "Nurses",
    required: staffBreak.nurses ?? 0,
    available: rawStaff.nurses ?? 0,
  },
  {
    category: "Support Staff",
    required: staffBreak.support ?? 0,
    available: rawStaff.support ?? 0,
  },
];

const bedDetails = [
  {
    category: "ICU Beds (Ventilator)",
    required: icuBreak.ventilator_beds ?? 0,
    available: rawIcu.ventilator_beds ?? 0,
  },
  {
    category: "ICU Beds (Non-ventilator)",
    required: icuBreak.non_ventilator_beds ?? 0,
    available: rawIcu.non_ventilator_beds ?? 0,
  },
];

const oxyDetails = [
  {
    category: "Cylinder Stock",
    required: oxyBreak.total_l_per_day ?? 0, // or split if you want later
    available: rawOxy.cylinders ?? 0,
  },
  {
    category: "Pipeline Capacity",
    required: 0, // backend doesn’t split – keep 0 or adjust later
    available: rawOxy.plant_output_lpm ?? 0,
  },
  {
    category: "Backup Supply",
    required: 0,
    available: rawOxy.tanks_output_lpm ?? 0,
  },
];

// ---- 3) Alerts: just map to your Alert type ----
const alerts = summary.alerts.map((a) => ({
  id: a.id,
  level: a.severity === "high" ? "critical" : (a.severity as any),
  text: `${a.title} – ${a.detail}`,
}));

// ---- 4) AQI trend mapping stays same ----
const aqiTrend = aqi.series.map((point, index, arr) => {
  const d = new Date(point.ts);
  const label =
    index === arr.length - 1
      ? "Now"
      : d.toLocaleTimeString("en-IN", { hour: "numeric" });

  return {
    hour: label,
    aqi: point.aqi,
  };
});

// ---- 5) Festivals ----
const festivals: Festival[] = events.events.map((e) => ({
  name: e.name,
  date: e.date,
  expectedSurge: e.expected_surge,
}));

// ---- 6) Final CityData object in EXACT same shape as mock ----
const cityData: CityData = {
  prediction,
  resources: {
    staff: {
      required: staffRequired,
      available: staffAvailableTotal,
      unit: "personnel",
      details: staffDetails,
    },
    beds: {
      required: icuRequired,
      available: bedsAvailableTotal,
      unit: "beds",
      details: bedDetails,
    },
    oxygen: {
      required: oxyRequired,
      available: oxyAvailableTotal,
      unit: "liters/day",
      details: oxyDetails,
    },
  },
  alerts,
  aqiTrend,
};

return {
  cityData,
  festivals,
  isLoading,
  isError,
};

}
