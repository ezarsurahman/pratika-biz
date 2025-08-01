import type { Metadata } from "next";
import { Jockey_One, JetBrains_Mono } from "next/font/google";
import "./globals.css"
import "./locomotive-scroll.css"
import Layout from "@/components/elements/layout/index"
import { cn } from "@/lib/utils";

const jockeyOne = Jockey_One({
  variable: "--font-jockey-one",
  subsets: ["latin"],
  weight: "400",
})

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400","800"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en"
    className={cn(
      jockeyOne.variable,
      JetBrainsMono.variable,
    )}>
      <body className="flex flex-col">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
