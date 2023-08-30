import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Author: TLong",
};

export default function Page() {
  return <SignIn />;
}
