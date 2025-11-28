import { AlertCircle, AlertTriangle, Info } from "lucide-react";

interface Alert {
  id: number;
  level: "critical" | "warning" | "info";
  text: string;
}

interface AlertsPanelProps {
  alerts: Alert[];
  title?: string;
}

const AlertsPanel = ({ alerts, title = "City Advisories" }: AlertsPanelProps) => {
  const getAlertIcon = (level: Alert["level"]) => {
    switch (level) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "info":
        return <Info className="h-5 w-5 text-info" />;
    }
  };

  const getAlertBg = (level: Alert["level"]) => {
    switch (level) {
      case "critical":
        return "bg-destructive/10 border-destructive/30";
      case "warning":
        return "bg-warning/10 border-warning/30";
      case "info":
        return "bg-info/10 border-info/30";
    }
  };

  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-xl border ${getAlertBg(
              alert.level
            )} flex gap-3 transition-all duration-200 hover:scale-[1.02]`}
          >
            <div className="flex-shrink-0 mt-0.5">{getAlertIcon(alert.level)}</div>
            <p className="text-sm leading-relaxed">{alert.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;
