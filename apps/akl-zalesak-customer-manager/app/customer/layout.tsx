import { Metadata } from "next";
import { PropsWithChildren } from "react";

import { makeTitle } from "utils/make-title";
import { SetTitle } from "~/(components)/title";

export const metadata: Metadata = {
  title: makeTitle("Zákazník"),
};

export default async function CustomerLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SetTitle>Zákazník</SetTitle>
      {children}
    </>
  );
}
