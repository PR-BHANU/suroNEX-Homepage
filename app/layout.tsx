import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "SuroNEX",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <Hero />
      </body>
    </html>
  );
}
