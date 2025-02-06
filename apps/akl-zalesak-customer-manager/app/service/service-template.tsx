import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@chaii/ui/components/card";
import { Alert } from "@chaii/ui/components/alert";
import { ReactNode } from "react";

export default function ServiceTemplate({
  actions,
  error,
  time,
  company,
  technicians,
}: Record<"actions" | "time" | "company" | "technicians", ReactNode> & {
  error?: string;
}) {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex flex-row items-center justify-between space-y-[unset]">
          <CardTitle>{time}</CardTitle>
          <div className="flex gap-2">{actions}</div>
        </div>
        {error && <Alert variant="destructive">{error}</Alert>}
      </CardHeader>
      <CardContent className="space-y-4 @container">
        <Card className="flex-1 shrink">
          <CardHeader className="flex flex-row items-center justify-between p-4 pb-2 pt-5">
            <CardTitle className="text-lg">Zákazník</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-1 p-4 pb-6 pt-0">
            {company}
          </CardContent>
        </Card>
        <Card className="flex-1 shrink">
          <CardHeader className="flex flex-row items-center justify-between p-4 pb-2 pt-5">
            <CardTitle className="text-lg">Technici</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-1 p-4 pb-6 pt-0">
            {technicians}
          </CardContent>
        </Card>
        <div className="col-span-full flex aspect-video items-center justify-center rounded-md bg-muted @md:col-span-1">
          <MapPin className="size-8 text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Map placeholder</span>
        </div>
      </CardContent>
    </Card>
  );
}
