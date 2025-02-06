import { Metadata } from "next";
import { PropsWithChildren } from "react";

import { makeTitle } from "utils/make-title";
import { SetTitle } from "~/(components)/title";

export const metadata: Metadata = {
  title: makeTitle("Přehled"),
};

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SetTitle>Přehled</SetTitle>
      {children}
    </>
  );
}
