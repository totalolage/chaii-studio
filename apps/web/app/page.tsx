import titleImg from "./2024-05-05-010612_002.jpeg";
import NextAvatar from "./_components/NextAvatar";

export default function Component() {

  return (
    <main>
      <h1>Chaii Studio :)</h1>
      <NextAvatar 
        src={titleImg}
        width={100}
        height={100}
        alt="Chaii founders"
        style={{
          objectFit: "cover",
          objectPosition: 0,
        }}
      />
    </main>
  );
}
