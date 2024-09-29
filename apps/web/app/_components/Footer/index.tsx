import FooterBlurb from "./FooterBlurb";
import FooterInfo from "./FooterInfo";
import FooterMeta from "./FooterMeta";
import FooterTitle from "./FooterTitle";

export default function Footer() {
  return (
    <footer className="flex flex-col text-sm font-medium leading-tight [--footer-x-pad:16px]">
      <FooterTitle className="mb-7" />
      <FooterInfo className="mb-7" />
      <FooterMeta />
      <FooterBlurb />
    </footer>
  );
}
