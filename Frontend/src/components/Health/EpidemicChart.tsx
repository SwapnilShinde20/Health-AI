import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface EpidemicChartProps {
  data: { week: string; flu: number; dengue: number }[];
}

const EpidemicChart = ({ data }: EpidemicChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="week"
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: "hsl(var(--muted-foreground))" }}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: "hsl(var(--muted-foreground))" }}
          label={{
            value: "Cases per 100k",
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
          }}
        />
        <Legend wrapperStyle={{ color: "hsl(var(--foreground))" }} />
        <Bar
          dataKey="flu"
          fill="hsl(var(--info))"
          radius={[4, 4, 0, 0]}
          name="Flu"
        />
        <Bar
          dataKey="dengue"
          fill="hsl(var(--warning))"
          radius={[4, 4, 0, 0]}
          name="Dengue"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EpidemicChart;
