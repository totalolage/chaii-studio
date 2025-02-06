import { Button } from "@chaii/ui/components/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { makeTitle } from "utils/make-title";
import { SetTitle } from "~/(components)/title";

export const metadata: Metadata = {
  title: makeTitle(),
};

export default async function HomePage() {
  const user = await auth();
  if (user.userId) redirect("/dashboard");

  return (
    <>
      <SetTitle>AKL Zálešák Customer Managment</SetTitle>
      <h2>Je třeba se </h2>
      <SignInButton forceRedirectUrl="/dashboard">
        <Button className="text-xl uppercase">přihlásit</Button>
      </SignInButton>
    </>
  );
}
