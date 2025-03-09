import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@chaii/ui/components/card";
import { Alert } from "@chaii/ui/components/alert";
import { ReactNode } from "react";

import { customersTable } from "db/schema";

export default function CustomerTemplate({
  actions,
  error,
  companyName,
  contactPerson,
  contactEmail,
  streetAddress,
  city,
  postCode,
  country,
}: Record<
  | "actions"
  | Exclude<
      keyof typeof customersTable.$inferSelect,
      "id" | "longitude" | "latitude"
    >,
  ReactNode
> & {
  error?: string;
}) {
  const hasContact = contactPerson || contactEmail;
  const hasAddress = streetAddress || city || postCode || country;
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex flex-row items-center justify-between space-y-[unset]">
          <CardTitle>{companyName}</CardTitle>
          <div className="flex gap-2">{actions}</div>
        </div>
        {error && <Alert variant="destructive">{error}</Alert>}
      </CardHeader>
      <CardContent className="@container space-y-4">
        {(hasAddress || hasContact) && (
          <div className="flex flex-wrap gap-4">
            {hasContact && (
              <Card className="flex-1 shrink">
                <CardHeader className=" flex flex-row items-center justify-between p-4 pb-2 pt-5">
                  <CardTitle className="text-lg">Kontakt</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-1 p-4 pb-6 pt-0">
                  <div>{contactPerson}</div>
                  <div>{contactEmail}</div>
                </CardContent>
              </Card>
            )}
            {hasAddress && (
              <Card className="flex-1 shrink">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2 pt-5">
                  <CardTitle className="text-lg">Adresa</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-1 p-4 pb-6 pt-0">
                  <div>{streetAddress}</div>
                  <div>{city}</div>
                  <div>{postCode}</div>
                  <div>{country}</div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
        <div className="bg-muted @md:col-span-1 col-span-full flex aspect-video items-center justify-center rounded-md">
          <MapPin className="text-muted-foreground size-8" />
          <span className="text-muted-foreground ml-2">Map placeholder</span>
        </div>
      </CardContent>
    </Card>
  );
}
