import { PropsWithChildren } from "react";
import { Metadata } from "next";

import { SetTitle } from "~/(components)/title";
import { makeTitle } from "utils/make-title";

export const metadata: Metadata = {
  title: makeTitle("Technik"),
};

export default async function TechnicianLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SetTitle>Technik</SetTitle>
      {children}
    </>
  );
}
