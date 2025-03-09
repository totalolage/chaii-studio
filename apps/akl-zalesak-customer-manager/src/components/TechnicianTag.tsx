import { cn } from "@chaii/ui/lib/utils";
import { User } from "lucide-react";
import Link from "next/link";

import schema from "~/db/schema";

export const TechnicianTag = ({
  className,
  technician,
  role,
}: {
  className?: string;
  technician: typeof schema.techniciansTable.$inferSelect;
  role?: (typeof schema.serviceTechniciansTable.role.enumValues)[number];
}) => (
  <Link
    href={`/technician/${technician.id}`}
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
  </Link>
);
