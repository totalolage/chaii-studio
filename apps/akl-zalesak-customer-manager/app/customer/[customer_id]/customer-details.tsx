"use client";

import { MapPin, Edit } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@chaii/ui/components/card";
import { Button } from "@chaii/ui/components/button";

import { customersTable } from "db/schema";

export default function CustomerDetails({
  customer,
}: {
  customer: typeof customersTable.$inferSelect;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{customer.companyName}</CardTitle>
        <Button variant="outline" size="icon">
          <Edit className="size-4" />
          <span className="sr-only">Edit customer</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <p>
              <strong>Contact:</strong> {customer.contactPerson}
            </p>
            <p>
              <strong>Email:</strong> {customer.contactEmail}
            </p>
            <p>
              <strong>Address:</strong> {customer.streetAddress},{" "}
              {customer.city}, {customer.postCode}, {customer.country}
            </p>
          </div>
          <div className="bg-muted flex aspect-video items-center justify-center rounded-md">
            <MapPin className="text-muted-foreground size-8" />
            <span className="text-muted-foreground ml-2">Map placeholder</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
