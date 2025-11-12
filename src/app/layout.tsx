import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";

export const metadata = {
  title: "StoryBit Streaming Dashboard",
  description: "A simplified streaming dashboard built with Next.js 15 + TMDB API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen overflow-x-hidden">
        {/* Fixed Header */}
        <Header />
        <main className="pt-20 px-4 md:px-8">{children}</main>
      </body>
    </html>
  );
}
