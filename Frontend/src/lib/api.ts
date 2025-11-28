const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

function getAuthHeaders() {
  // read token from localStorage (set after login)
  const token = localStorage.getItem("access_token");
  if (!token) return {
    
  };
  return {
    Authorization: `Bearer ${token}`,
  };
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Request failed: ${res.status} ${text}`);
  }

  return res.json() as Promise<T>;
}


// --------- Types that match backend responses (rough) ---------
export interface DashboardSummaryResponse {
  city: string;
  hospital: {
    hospital_id: string;
    name: string;
    total_staff: number;
    total_icu_beds: number;
    total_oxygen_lpm: number;
    raw: any;
  } | null;
  forecast_horizon_days: number;
  stats: {
    avg_predicted_patients: number;
    max_predicted_patients: number;
    total_alerts: number;
  };
  forecasts: {
    date: string; // "YYYY-MM-DD"
    predicted_patients: number;
    resources: {
      summary: {
        staff_required: number;
        icu_required: number;
        oxygen_needed_l_per_day: number;
      };
      breakdown: any;
    };
  }[];
  alerts: {
    id: number;
    city: string;
    severity: string;
    title: string;
    detail: string;
    created_at: string;
    expires: string | null;
  }[];
}

export interface AqiTrendResponse {
  city: string;
  hours: number;
  series: { ts: string; aqi: number }[];
  legend: {
    good: number;
    moderate: number;
    unhealthy: number;
  };
}

export interface EventsResponse {
  city: string;
  events: {
    name: string;
    date: string;
    expected_surge: string;
    impact: string[];
    notes: string;
  }[];
}
export function fetchForecastWithResources(
  city: string,
  days: number = 7
) {
  const params = new URLSearchParams({
    city,
    days: String(days),
    use_model: "true",
  });

  return get<unknown>(`/forecast/patient-inflow-with-resources?${params}`);
}

// --------- API functions ---------
export function fetchDashboardSummary(
  city: string,
  hospitalId: string = "H123",
  days: number = 7
) {
  const params = new URLSearchParams({
    city,
    hospital_id: hospitalId,
    days: String(days),
  });
  return get<DashboardSummaryResponse>(`/dashboard/summary?${params}`);
}

export function fetchAqiTrend(city: string, hours: number = 24) {
  const params = new URLSearchParams({
    city,
    hours: String(hours),
  });
  return get<AqiTrendResponse>(`/pollution/aqi-trend?${params}`);
}

export function fetchEvents(city: string) {
  const params = new URLSearchParams({ city });
  return get<EventsResponse>(`/events/upcoming?${params}`);
}
