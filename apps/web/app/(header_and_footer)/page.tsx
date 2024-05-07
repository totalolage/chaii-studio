import foundersImg from "./founders.jpeg";
import Image from "next/image";

export default function Component() {
  return (
    <main>
      <section className="w-full h-40 relative">
        <Image
          src={foundersImg}
          alt="Founders"
          fill
          priority
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "0 20%" }}
        />
      </section>
    </main>
  );
}
