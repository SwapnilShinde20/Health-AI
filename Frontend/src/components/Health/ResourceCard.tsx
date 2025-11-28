import { LucideIcon } from "lucide-react";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface ResourceCardProps {
  title: string;
  required: number;
  available: number;
  unit: string;
  icon: LucideIcon;
  onClick: () => void;
}

const ResourceCard = ({
  title,
  required,
  available,
  unit,
  icon: Icon,
  onClick,
}: ResourceCardProps) => {
  const deficit = required - available;
  const isDeficit = deficit > 0;
  const percentage = (available / required) * 100;

  return (
    <div className="resource-card" onClick={onClick}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        {isDeficit ? (
          <AlertTriangle className="h-5 w-5 text-destructive" />
        ) : (
          <CheckCircle className="h-5 w-5 text-success" />
        )}
      </div>

      <h3 className="text-sm text-muted-foreground mb-2">{title}</h3>

      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold">{available}</span>
          <span className="text-sm text-muted-foreground">/ {required} {unit}</span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              isDeficit ? "bg-destructive" : "bg-success"
            }`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>

        <p
          className={`text-sm font-medium ${
            isDeficit ? "text-destructive" : "text-success"
          }`}
        >
          {isDeficit ? `Deficit: ${deficit} ${unit}` : `Surplus: ${-deficit} ${unit}`}
        </p>
      </div>
    </div>
  );
};

export default ResourceCard;
