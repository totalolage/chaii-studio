import { cn } from "@chaii/ui/lib/utils";

export default function FooterBlurb({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[calc(1em_-_0.49rem)] max-w-[100dvw] text-5xl font-bold text-blue",
        className,
      )}
    >
      <div className="relative top-[-0.49rem] h-[calc(100%_+_0.49rem)] w-full [overflow:clip]">
        <span className="absolute bottom-0 w-max animate-scroll-left leading-none">
          have a wonderful day
        </span>
      </div>
    </div>
  );
}
