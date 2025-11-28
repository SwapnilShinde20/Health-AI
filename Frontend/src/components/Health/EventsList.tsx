import { Calendar, TrendingUp } from "lucide-react";

interface Festival {
  name: string;
  date: string;
  expectedSurge: string;
}

interface EventsListProps {
  festivals: Festival[];
}

const EventsList = ({ festivals }: EventsListProps) => {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold mb-4">Upcoming Mass Events</h3>
      <div className="space-y-3">
        {festivals.map((festival, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-border bg-background/50 flex items-start gap-4 transition-all duration-200 hover:border-primary/30"
          >
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">{festival.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{festival.date}</p>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-warning" />
                <span className="text-warning font-medium">
                  Expected Surge: {festival.expectedSurge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
