import { PropsWithChildren } from "react";

import { CompactHeader } from "~/(components)/_Header";

export default function HeaderAndFooterLayout({ children }: PropsWithChildren) {
  return (
    <>
      <CompactHeader className="z-10" />
      {children}
    </>
  );
}
