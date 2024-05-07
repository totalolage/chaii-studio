import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function HeaderAndFooterLayout({ children }: PropsWithChildren) {
  return (
    <body className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </body>
  );
}
