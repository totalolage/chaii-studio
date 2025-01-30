import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@chaii/ui/components/card";
import { Alert } from "@chaii/ui/components/alert";
import { ReactNode } from "react";

import { techniciansTable } from "db/schema";

export default function TechnicianTemplate({
  actions,
  error,
  name,
  email,
  phone,
}: Record<
  | "actions"
  | Exclude<
      keyof typeof techniciansTable.$inferSelect,
      "id" | "longitude" | "latitude"
    >,
  ReactNode
> & {
  error?: string;
}) {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex flex-row items-center justify-between space-y-[unset]">
          <CardTitle>{name}</CardTitle>
          <div className="flex gap-2">{actions}</div>
        </div>
        {error && <Alert variant="destructive">{error}</Alert>}
      </CardHeader>
      <CardContent className="grid gap-1 p-4 pb-6 pt-0">
        <div>{phone}</div>
        <div>{email}</div>
      </CardContent>
    </Card>
  );
}
