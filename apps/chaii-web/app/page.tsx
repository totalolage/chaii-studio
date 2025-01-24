import Image from "next/image";
import { cn } from "@chaii/ui/lib/utils";

import heroImage from "./hero.png";

import Squiggle from "~/_components/Squiggle";
import { Circle1, Circle2 } from "~/_components/Circle";
import Flower from "~/_components/Flower";

export default function HomePage() {
  return (
    <main className="mb-10 flex flex-col items-center [overflow:clip]">
      <h1 className="container relative z-10 mt-8 whitespace-nowrap px-5 text-5xl font-bold">
        Good design
        <wbr />
        {" is like a "}
        <span className="relative">
          warm
          <Squiggle.short className="absolute -z-10 h-16 center" />
        </span>
        <wbr />
        {" cup of "}
        <span className="relative">
          chaii
          <Circle1 className="absolute left-0 top-1 -z-10" />
          <Flower className="absolute bottom-0 left-full -z-10" />
        </span>
      </h1>
      <div
        className={cn(
          "relative w-[148%] max-w-2xl translate-x-[5%] translate-y-[-10%]",
          "after:absolute after:inset-0 after:bg-gradient-to-b after:from-white after:from-5% after:to-transparent after:to-20%",
        )}
      >
        <Image src={heroImage} priority alt="graphic of Chaii founders" />
      </div>
      <p className="-mt-20 self-stretch px-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="clearfix"
          className="invisible float-right h-8 w-1/4 [shape-outside:ellipse(50%_100%_at_50%_0%)] sm:w-1/3"
        />
        {"Based in "}
        <span className="relative">
          Prague,
          <Circle2 className="absolute -z-10 center" />
        </span>
        {" Czech republic, "}
        <span className="relative whitespace-nowrap">
          chaii studio
          <Squiggle.long className="absolute -z-10 center" />
        </span>
        {
          " brings a new clever and highly practical solution to your every day design needs. We at "
        }
        <span className="relative">
          chaii
          <Squiggle.short className="absolute -z-10 h-4 center" />
        </span>
        {
          " believe that great design and functionality is as necessary as a warm cup of tea on a cold windswept evening."
        }
      </p>
    </main>
  );
}
