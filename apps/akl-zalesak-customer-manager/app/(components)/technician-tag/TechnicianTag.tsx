import { cn } from "@chaii/ui/lib/utils";
import { User } from "lucide-react";

import { serviceTechniciansTable, techniciansTable } from "db/schema";

export const TechnicianTag = ({
  className,
  technician,
  role,
}: {
  className?: string;
  technician: Pick<typeof techniciansTable.$inferSelect, "name">;
  role?: (typeof serviceTechniciansTable.role.enumValues)[number];
}) => (
  <div
    className={cn(
      "inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800",
      className,
    )}
  >
    <User className="size-3" />
    <span className="max-w-[150px] truncate">{technician.name}</span>
    {role && (
      <>
        <span className="mx-1 text-blue-400">•</span>
        <span className="text-blue-600">{role}</span>
      </>
    )}
  </div>
);
