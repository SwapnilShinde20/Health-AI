import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

interface AQIChartProps {
  data: { hour: string; aqi: number }[];
}

const AQIChart = ({ data }: AQIChartProps) => {
  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "hsl(var(--success))";
    if (aqi <= 100) return "hsl(var(--warning))";
    if (aqi <= 200) return "hsl(var(--destructive))";
    return "#8B0000"; // Dark red for hazardous
  };

  const getAQICategory = (aqi: number) => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 200) return "Unhealthy";
    return "Hazardous";
  };

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="hour"
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: "hsl(var(--muted-foreground))" }}
          label={{
            value: "AQI",
            angle: -90,
            position: "insideLeft",
            fill: "hsl(var(--muted-foreground))",
          }}
        />
        <ReferenceLine
          y={50}
          stroke="hsl(var(--success))"
          strokeDasharray="3 3"
          label={{ value: "Good", fill: "hsl(var(--success))", fontSize: 10 }}
        />
        <ReferenceLine
          y={100}
          stroke="hsl(var(--warning))"
          strokeDasharray="3 3"
          label={{
            value: "Moderate",
            fill: "hsl(var(--warning))",
            fontSize: 10,
          }}
        />
        <ReferenceLine
          y={200}
          stroke="hsl(var(--destructive))"
          strokeDasharray="3 3"
          label={{
            value: "Unhealthy",
            fill: "hsl(var(--destructive))",
            fontSize: 10,
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "12px",
            color: "hsl(var(--foreground))",
          }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const aqi = payload[0].value as number;
              return (
                <div className="bg-card/95 backdrop-blur-xl border border-primary/20 rounded-xl p-3 shadow-xl">
                  <p className="font-semibold">{payload[0].payload.hour}</p>
                  <p style={{ color: getAQIColor(aqi) }} className="font-medium">
                    AQI: {aqi}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {getAQICategory(aqi)}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          dataKey="aqi"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          dot={(props: any) => {
            const { cx, cy, payload } = props;
            return (
              <circle
                cx={cx}
                cy={cy}
                r={4}
                fill={getAQIColor(payload.aqi)}
                stroke="hsl(var(--card))"
                strokeWidth={2}
              />
            );
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AQIChart;
