import { getImageProps } from "next/image";

import bg1 from "./bg1.png";

import Asterisk from "~/_components/Asterisk";

export default function AboutUsPage() {
  const bgImageProps = getImageProps({
    src: bg1,
    alt: "",
    width: 200,
    height: 146,
  }).props;

  return (
    <main
      className="relative mt-10 px-4"
      style={{
        backgroundImage: `url(${bgImageProps.src})`,
        backgroundSize: `${bgImageProps.width}px ${bgImageProps.height}px`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: `calc(100% + ${bgImageProps.width! * 0.33}px)`,
      }}
    >
      <h1 className="mb-5 text-5xl font-bold">About us</h1>
      <p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="clearfix"
          className="invisible float-right [shape-outside:circle(100%_at_100%_0%)] sm:w-1/3"
          style={{
            width: bgImageProps.width! * 0.5,
            height: bgImageProps.height! * 0.5,
            left: "50%",
          }}
        />
        At Chaii Studio, we believe that exceptional design and seamless
        functionality are inseparable. We’re Filip and Chloe, the creative minds
        behind this Prague-based design studio, passionate about blending form
        and function to craft digital experiences that leave a lasting
        impression.
      </p>
      <section className="mt-2 space-y-2">
        <div className="[&:first-line]:font-semibold">
          <h2 className="relative inline text-2xl">
            Filip
            <Asterisk className="center absolute -z-10" />
          </h2>
          <p className="inline">
            &nbsp;transforms complex ideas into robust, user-friendly websites.
            With a deep-rooted passion for technology, he ensures that every
            line of code enhances the user experience, making websites not only
            visually appealing but also high-performing and easy to navigate.
          </p>
        </div>
        <div className="[&:first-line]:font-semibold">
          <h2 className="relative inline text-2xl">
            Chloe
            <Asterisk className="center absolute -z-10" />
          </h2>
          <p className="inline">
            &nbsp;brings creativity and style to every project. With her keen
            eye for aesthetics and a talent for storytelling, she transforms
            concepts into captivating visuals that communicate a brand’s unique
            identity. From intuitive user interfaces to bold brand visuals,
            Chloe’s designs are not only beautiful—they’re purposeful.
          </p>
        </div>
      </section>
      <p className="mt-4">
        Together, Filip and Chloe combine their skills to offer a seamless blend
        of design and development, creating digital solutions that are as
        functional as they are captivating. t Chaii Studio, we’re dedicated to
        turning your ideas into beautiful and functional realities.
      </p>
    </main>
  );
}
