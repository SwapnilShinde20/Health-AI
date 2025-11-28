import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, AlertTriangle } from "lucide-react";

interface ResourceDetail {
  category: string;
  required: number;
  available: number;
}

interface ResourceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  unit: string;
  details: ResourceDetail[];
}

const ResourceModal = ({
  open,
  onOpenChange,
  title,
  unit,
  details,
}: ResourceModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-xl border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title} Breakdown</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Detailed resource allocation and availability status
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          {details.map((detail, index) => {
            const deficit = detail.required - detail.available;
            const isDeficit = deficit > 0;
            const percentage = (detail.available / detail.required) * 100;

            return (
              <div
                key={index}
                className="p-4 rounded-xl border border-border bg-background/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">{detail.category}</h4>
                    <p className="text-sm text-muted-foreground">
                      {detail.available} / {detail.required} {unit}
                    </p>
                  </div>
                  {isDeficit ? (
                    <div className="flex items-center gap-2 text-destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        -{deficit} {unit}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        +{-deficit} {unit}
                      </span>
                    </div>
                  )}
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isDeficit ? "bg-destructive" : "bg-success"
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceModal;
