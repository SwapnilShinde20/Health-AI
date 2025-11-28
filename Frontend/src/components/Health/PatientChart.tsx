import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PatientChartProps {
  data: {
    day: string;
    predictedInflow: number;
    actualInflow?: number;
    drivers: string;
  }[];
}

const PatientChart = ({ data }: PatientChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.4}
            />
            <stop
              offset="95%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="day"
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: "hsl(var(--muted-foreground))" }}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: "hsl(var(--muted-foreground))" }}
          label={{
            value: "Patient Inflow",
            angle: -90,
            position: "insideLeft",
            fill: "hsl(var(--muted-foreground))",
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "12px",
            color: "hsl(var(--foreground))",
            padding: "12px",
          }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-card/95 backdrop-blur-xl border border-primary/20 rounded-xl p-4 shadow-xl">
                  <p className="font-semibold mb-2">{data.day}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-primary">
                      Predicted: {data.predictedInflow} patients
                    </p>
                    {data.actualInflow && (
                      <p className="text-success">
                        Actual: {data.actualInflow} patients
                      </p>
                    )}
                    <p className="text-muted-foreground text-xs pt-2 max-w-xs">
                      <span className="font-medium">Drivers:</span> {data.drivers}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Area
          type="monotone"
          dataKey="predictedInflow"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#predictedGradient)"
          name="Predicted Inflow"
        />
        {data.some((d) => d.actualInflow !== undefined) && (
          <Line
            type="monotone"
            dataKey="actualInflow"
            stroke="hsl(var(--success))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--success))", r: 4 }}
            name="Actual Inflow"
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PatientChart;
