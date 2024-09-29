import Image from "next/image";
import { cn } from "@chaii/ui/lib/utils";

import heroImage from "./hero.png";

import ChaiiSquiggle from "~/_components/Squiggle.lg";
import Circle from "~/_components/Circle";
import Flower from "~/_components/Flower";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center [overflow:clip] mb-10">
      <h1 className="container relative z-10 mt-8 whitespace-nowrap px-5 text-5xl font-bold">
        Good design
        <wbr />
        {" is like a "}
        <span className="relative">
          warm
          <ChaiiSquiggle className="absolute bottom-1/2 right-1/2 -z-10 translate-x-1/2 translate-y-1/2" />
        </span>
        <wbr />
        {" cup of "}
        <span className="relative">
          chaii
          <Circle className="absolute left-0 top-1 -z-10" />
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
        Based in Prague, Czech republic, chaii studio brings a new clever and
        highly practical solution to your every day design needs. We at chaii
        believe that great design and functionality is as necessary as a warm
        cup of tea on a cold windswept evening.
      </p>
    </main>
  );
}
