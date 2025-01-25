CREATE TYPE "public"."role" AS ENUM('lead', 'support', 'logistics', 'managment', 'training');--> statement-breakpoint
CREATE TABLE "customers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_name" text NOT NULL,
	"contact_person" text,
	"contact_email" text,
	"street_address" text,
	"city" text,
	"post_code" text,
	"country" text,
	"latitude" numeric,
	"longitude" numeric
);
--> statement-breakpoint
CREATE TABLE "service_technicians" (
	"service_id" uuid NOT NULL,
	"technician_id" uuid NOT NULL,
	"role" "role",
	CONSTRAINT "service_technicians_service_id_technician_id_pk" PRIMARY KEY("service_id","technician_id")
);
--> statement-breakpoint
CREATE TABLE "services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_id" uuid NOT NULL,
	"description" text NOT NULL,
	"cost" numeric(10, 2) NOT NULL,
	"time" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "technicians" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text,
	"phone" text
);
--> statement-breakpoint
ALTER TABLE "service_technicians" ADD CONSTRAINT "service_technicians_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_technicians" ADD CONSTRAINT "service_technicians_technician_id_technicians_id_fk" FOREIGN KEY ("technician_id") REFERENCES "public"."technicians"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "services" ADD CONSTRAINT "services_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;