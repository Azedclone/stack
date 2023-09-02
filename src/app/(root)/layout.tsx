import "@/app/globals.css";
import { NavigationSidebar } from "@/components/navigation";
import { ThemeProvider } from "@/components/shared";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home page",
  description: "Author: TLong",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(openSans.className, "bg-white dark:bg-gray-900")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            storageKey="stack-theme"
          >
            <div className="hidden md:flex flex-col h-full w-[72px] z-30 fixed inset-y-0">
              <NavigationSidebar />
            </div>
            <main className="md:pl-[72px] h-full">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
