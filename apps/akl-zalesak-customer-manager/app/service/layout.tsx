import { PropsWithChildren } from "react";
import { Metadata } from "next";

import { SetTitle } from "~/(components)/title";
import { makeTitle } from "utils/make-title";

export const metadata: Metadata = {
  title: makeTitle("Zakázka"),
};

export default async function ServiceLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SetTitle>Zakázka</SetTitle>
      {children}
    </>
  );
}
