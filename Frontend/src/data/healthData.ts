export interface PredictionPoint {
  day: string;
  predictedInflow: number;
  actualInflow?: number;
  drivers: string;
}

export interface ResourceDetail {
  category: string;
  required: number;
  available: number;
}

export interface Resource {
  required: number;
  available: number;
  unit: string;
  details: ResourceDetail[];
}

export interface Alert {
  id: number;
  level: "critical" | "warning" | "info";
  text: string;
}

export interface AQIPoint {
  hour: string;
  aqi: number;
}

export interface CityData {
  prediction: PredictionPoint[];
  resources: {
    staff: Resource;
    beds: Resource;
    oxygen: Resource;
  };
  alerts: Alert[];
  aqiTrend: AQIPoint[];
}

export interface EpidemicPoint {
  week: string;
  flu: number;
  dengue: number;
}

export interface Festival {
  name: string;
  date: string;
  expectedSurge: string;
}

export interface CommonData {
  epidemicTrend: EpidemicPoint[];
  festivals: Festival[];
}

export interface HealthDataStructure {
  cities: {
    [city: string]: CityData;
  };
  common: CommonData;
}

export const healthData: HealthDataStructure = {
  cities: {
    Mumbai: {
    prediction: [
      {
        day: "Today",
        predictedInflow: 250,
        actualInflow: 230,
        drivers: "Standard seasonal inflow with moderate pollution levels",
      },
      {
        day: "Day+1",
        predictedInflow: 280,
        drivers: "Rising AQI expected due to traffic congestion and industrial activity",
      },
      {
        day: "Day+2",
        predictedInflow: 310,
        drivers: "Weekend festival preparations increasing respiratory cases",
      },
      {
        day: "Day+3",
        predictedInflow: 340,
        drivers: "Festival day - expect surge in trauma and respiratory cases",
      },
      {
        day: "Day+4",
        predictedInflow: 320,
        drivers: "Post-festival cases tapering, dengue cases rising due to humidity",
      },
      {
        day: "Day+5",
        predictedInflow: 290,
        drivers: "Monsoon-related vector-borne disease spike predicted",
      },
      {
        day: "Day+6",
        predictedInflow: 270,
        drivers: "Returning to baseline with ongoing seasonal flu trend",
      },
    ],
    resources: {
      staff: {
        required: 85,
        available: 70,
        unit: "personnel",
        details: [
          { category: "Doctors", required: 25, available: 20 },
          { category: "Nurses", required: 40, available: 35 },
          { category: "Paramedics", required: 15, available: 12 },
          { category: "Support Staff", required: 5, available: 3 },
        ],
      },
      beds: {
        required: 150,
        available: 120,
        unit: "beds",
        details: [
          { category: "ICU Beds", required: 40, available: 30 },
          { category: "General Ward", required: 70, available: 60 },
          { category: "Isolation Ward", required: 25, available: 20 },
          { category: "Emergency", required: 15, available: 10 },
        ],
      },
      oxygen: {
        required: 8000,
        available: 7500,
        unit: "liters/day",
        details: [
          { category: "Cylinder Stock", required: 3000, available: 2800 },
          { category: "Pipeline Capacity", required: 4000, available: 4000 },
          { category: "Backup Supply", required: 1000, available: 700 },
        ],
      },
    },
    alerts: [
      {
        id: 1,
        level: "critical",
        text: "Major festival in 3 days - expect 35% surge in trauma and respiratory cases. Immediate staff augmentation required.",
      },
      {
        id: 2,
        level: "warning",
        text: "High humidity (85%) and stagnant water may lead to dengue outbreak. Vector control teams deployed.",
      },
      {
        id: 3,
        level: "info",
        text: "AQI improving over next 48 hours due to expected rainfall. Monitor for waterborne diseases.",
      },
    ],
    aqiTrend: [
      { hour: "12 AM", aqi: 85 },
      { hour: "3 AM", aqi: 78 },
      { hour: "6 AM", aqi: 92 },
      { hour: "9 AM", aqi: 125 },
      { hour: "12 PM", aqi: 145 },
      { hour: "3 PM", aqi: 138 },
      { hour: "6 PM", aqi: 162 },
      { hour: "9 PM", aqi: 148 },
      { hour: "Now", aqi: 135 },
    ],
  },
  Delhi: {
    prediction: [
      {
        day: "Today",
        predictedInflow: 320,
        actualInflow: 310,
        drivers: "High baseline pollution causing respiratory distress cases",
      },
      {
        day: "Day+1",
        predictedInflow: 350,
        drivers: "Severe AQI spike expected - stubble burning season",
      },
      {
        day: "Day+2",
        predictedInflow: 380,
        drivers: "Critical pollution levels triggering asthma and COPD emergencies",
      },
      {
        day: "Day+3",
        predictedInflow: 410,
        drivers: "Air quality emergency declared - mass respiratory cases expected",
      },
      {
        day: "Day+4",
        predictedInflow: 390,
        drivers: "Pollution stabilizing but elderly at high risk",
      },
      {
        day: "Day+5",
        predictedInflow: 360,
        drivers: "Wind patterns improving air quality, cases declining",
      },
      {
        day: "Day+6",
        predictedInflow: 340,
        drivers: "Return to seasonal baseline with flu cases rising",
      },
    ],
    resources: {
      staff: {
        required: 110,
        available: 95,
        unit: "personnel",
        details: [
          { category: "Doctors", required: 35, available: 30 },
          { category: "Nurses", required: 50, available: 42 },
          { category: "Paramedics", required: 20, available: 18 },
          { category: "Support Staff", required: 5, available: 5 },
        ],
      },
      beds: {
        required: 200,
        available: 165,
        unit: "beds",
        details: [
          { category: "ICU Beds", required: 60, available: 45 },
          { category: "General Ward", required: 90, available: 80 },
          { category: "Isolation Ward", required: 30, available: 25 },
          { category: "Emergency", required: 20, available: 15 },
        ],
      },
      oxygen: {
        required: 12000,
        available: 10500,
        unit: "liters/day",
        details: [
          { category: "Cylinder Stock", required: 5000, available: 4200 },
          { category: "Pipeline Capacity", required: 6000, available: 5500 },
          { category: "Backup Supply", required: 1000, available: 800 },
        ],
      },
    },
    alerts: [
      {
        id: 1,
        level: "critical",
        text: "Air quality emergency expected in 48 hours. AQI may exceed 400. Prepare for 40% spike in respiratory cases.",
      },
      {
        id: 2,
        level: "critical",
        text: "ICU bed capacity at 75%. Activate emergency protocols and coordinate with nearby hospitals for overflow.",
      },
      {
        id: 3,
        level: "warning",
        text: "Oxygen supply running low. Emergency procurement initiated. ETA: 24 hours.",
      },
    ],
    aqiTrend: [
      { hour: "12 AM", aqi: 185 },
      { hour: "3 AM", aqi: 178 },
      { hour: "6 AM", aqi: 195 },
      { hour: "9 AM", aqi: 245 },
      { hour: "12 PM", aqi: 268 },
      { hour: "3 PM", aqi: 255 },
      { hour: "6 PM", aqi: 292 },
      { hour: "9 PM", aqi: 275 },
      { hour: "Now", aqi: 258 },
    ],
  },
  Bengaluru: {
    prediction: [
      {
        day: "Today",
        predictedInflow: 180,
        actualInflow: 175,
        drivers: "Moderate pollution with seasonal allergy cases",
      },
      {
        day: "Day+1",
        predictedInflow: 190,
        drivers: "Tech park marathon event - expect minor injuries and heat exhaustion",
      },
      {
        day: "Day+2",
        predictedInflow: 210,
        drivers: "Post-event spike with viral fever cases rising",
      },
      {
        day: "Day+3",
        predictedInflow: 220,
        drivers: "Dengue cluster detected in IT corridor - surveillance active",
      },
      {
        day: "Day+4",
        predictedInflow: 205,
        drivers: "Dengue cases stabilizing with vector control measures",
      },
      {
        day: "Day+5",
        predictedInflow: 195,
        drivers: "Seasonal flu transmission increasing in schools",
      },
      {
        day: "Day+6",
        predictedInflow: 185,
        drivers: "Return to baseline with ongoing flu monitoring",
      },
    ],
    resources: {
      staff: {
        required: 65,
        available: 68,
        unit: "personnel",
        details: [
          { category: "Doctors", required: 18, available: 20 },
          { category: "Nurses", required: 30, available: 32 },
          { category: "Paramedics", required: 12, available: 12 },
          { category: "Support Staff", required: 5, available: 4 },
        ],
      },
      beds: {
        required: 110,
        available: 125,
        unit: "beds",
        details: [
          { category: "ICU Beds", required: 25, available: 30 },
          { category: "General Ward", required: 55, available: 65 },
          { category: "Isolation Ward", required: 20, available: 20 },
          { category: "Emergency", required: 10, available: 10 },
        ],
      },
      oxygen: {
        required: 5500,
        available: 6200,
        unit: "liters/day",
        details: [
          { category: "Cylinder Stock", required: 2000, available: 2300 },
          { category: "Pipeline Capacity", required: 3000, available: 3400 },
          { category: "Backup Supply", required: 500, available: 500 },
        ],
      },
    },
    alerts: [
      {
        id: 1,
        level: "warning",
        text: "Dengue cluster identified in Whitefield area. Enhanced surveillance and fogging operations underway.",
      },
      {
        id: 2,
        level: "info",
        text: "Marathon event tomorrow - trauma team on standby. 15,000+ participants expected.",
      },
      {
        id: 3,
        level: "info",
        text: "Air quality excellent (AQI: 45). Respiratory cases expected to remain below seasonal average.",
      },
    ],
    aqiTrend: [
      { hour: "12 AM", aqi: 42 },
      { hour: "3 AM", aqi: 38 },
      { hour: "6 AM", aqi: 48 },
      { hour: "9 AM", aqi: 65 },
      { hour: "12 PM", aqi: 72 },
      { hour: "3 PM", aqi: 68 },
      { hour: "6 PM", aqi: 78 },
      { hour: "9 PM", aqi: 62 },
      { hour: "Now", aqi: 55 },
      ],
    },
  },
  common: {
    epidemicTrend: [
      { week: "W-6", flu: 28, dengue: 15 },
      { week: "W-5", flu: 35, dengue: 22 },
      { week: "W-4", flu: 45, dengue: 28 },
      { week: "W-3", flu: 52, dengue: 35 },
      { week: "W-2", flu: 68, dengue: 42 },
      { week: "W-1", flu: 78, dengue: 48 },
      { week: "Now", flu: 85, dengue: 55 },
    ],
    festivals: [
      {
        name: "Diwali",
        date: "Oct 24, 2025",
        expectedSurge: "High (Trauma, Burns, Respiratory)",
      },
      {
        name: "Holi",
        date: "Mar 14, 2026",
        expectedSurge: "Medium (Eye injuries, Skin allergies)",
      },
      {
        name: "Ganesh Chaturthi",
        date: "Sep 2, 2025",
        expectedSurge: "Medium (Drowning, Heat stroke)",
      },
    ],
  },
};
