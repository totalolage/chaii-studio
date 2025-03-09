import { Alert } from "@chaii/ui/components/alert";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@chaii/ui/components/card";
import { MapPin } from "lucide-react";
import { ReactNode } from "react";

import schema from "~/db/schema";

export function CustomerTemplate({
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
      keyof typeof schema.customersTable.$inferSelect,
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
      <CardContent className="space-y-4 @container">
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
        <div className="col-span-full flex aspect-video items-center justify-center rounded-md bg-muted @md:col-span-1">
          <MapPin className="size-8 text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Map placeholder</span>
        </div>
      </CardContent>
    </Card>
  );
}
