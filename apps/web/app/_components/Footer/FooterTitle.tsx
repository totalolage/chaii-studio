import { cn } from "@chaii/ui/lib/utils";

import ChaiiSquiggleLg from "../Squiggle.lg";

export default function FooterTitle({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center text-2xl font-bold", className)}>
      <hr className="-z-20  w-full border-b-[1.5px] border-t-0 border-b-black" />
      <span className="relative py-3">
        chaii studio
        <ChaiiSquiggleLg className="absolute bottom-1/2 right-1/2 -z-10 h-[96.048px] w-[230.952px] translate-x-1/2 translate-y-1/2" />
      </span>
      <hr className="-z-20  w-full border-b-[1.5px] border-t-0 border-b-black" />
    </div>
  );
}
