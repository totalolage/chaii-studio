import { Button } from "@chaii/ui/components/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await auth();
  if (user.userId) redirect("/dashboard");

  return (
    <main>
      <h2>Je třeba se </h2>
      <SignInButton forceRedirectUrl="/dashboard">
        <Button className="text-xl uppercase">přihlásit</Button>
      </SignInButton>
    </main>
  );
}
