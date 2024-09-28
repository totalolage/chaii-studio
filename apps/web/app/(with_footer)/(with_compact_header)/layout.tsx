import { PropsWithChildren } from "react";

import { CompactHeader } from "~/_components/Header";

export default function HeaderAndFooterLayout({ children }: PropsWithChildren) {
  return (
    <>
      <CompactHeader className="z-10" />
      {children}
    </>
  );
}
