import MobileMenu from "./chaii-mobile-accordion";

export default function Header({ className }: { className?: string }) {
  return <MobileMenu compact className={className} />;
}
