import { Button } from "@chaii/ui/components/button";
import titleImg from "./2024-05-05-010612_002.jpeg";
import NextAvatar from "~/_components/NextAvatar";

export default function Component() {
  return (
    <main>
      <h1 className="font-bold">Chaii Studio :)</h1>
      <Button>Chaii Studio</Button>
      <NextAvatar 
        src={titleImg}
        width={100}
        height={100}
        placeholder="blur"
        alt="Chaii founders"
        priority
        style={{
          objectFit: "cover",
          objectPosition: 0,
        }}
      />
    </main>
  );
}
