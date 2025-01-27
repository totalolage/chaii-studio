import { cn } from "@chaii/ui/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Calendar } from "lucide-react";
import { isToday, isYesterday, isTomorrow } from "date-fns";

import type { servicesTable } from "db/schema";

type ServiceDate = Pick<typeof servicesTable.$inferSelect, "time">;

const getDateStatus = (
  date: Date,
): NonNullable<VariantProps<typeof statusStyles>["status"]> => {
  if (isToday(date)) return "today";
  if (isYesterday(date)) return "yesterday";
  if (isTomorrow(date)) return "tomorrow";
  if (date > new Date()) return "future";
  if (date < new Date()) return "past";
  return "unknown";
};

const formatTime = (date: Date) => date.toLocaleTimeString("cs-CZ");
const formatDate = (date: Date) => date.toLocaleDateString("cs-CZ");

export const ServiceDateTag = ({
  className,
  service: { time: date },
}: {
  className?: string;
  service: ServiceDate;
}) => {
  const status = getDateStatus(date);

  const formattedLabel = {
    tomorrow: `Tomorrow at ${formatTime(date)}`,
    today: `Today at ${formatTime(date)}`,
    yesterday: `Yesterday at ${formatTime(date)}`,
    future: formatDate(date),
    past: formatDate(date),
    unknown: "Unknown",
  }[status];

  return (
    <div className={cn(statusStyles({ status }), className)}>
      <Calendar className="size-3" />
      <span className="max-w-[150px] truncate">{formattedLabel}</span>
    </div>
  );
};

const statusStyles = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
  {
    variants: {
      status: {
        future: "bg-green-100 text-green-800",
        today: "bg-blue-100 text-blue-800",
        tomorrow: "bg-teal-100 text-teal-800",
        yesterday: "bg-orange-100 text-orange-800",
        past: "bg-red-100 text-red-800",
        unknown: "bg-gray-100 text-gray-800",
      },
    },
  },
);
