import { Metadata } from "next";
import { initProfile } from "@/lib/init-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Setup",
  description: "Author: TLong",
};

const SetupPage = async () => {
  const profile = await initProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) redirect(`/servers/${server.id}`);

  return <p>Check</p>;
};

export default SetupPage;
