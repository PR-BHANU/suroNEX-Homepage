import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import WhySuronex from "./components/WhySuronex";
import ComplianceCoverage from "./components/ComplianceCoverage";
import RiskPoints from "./components/RiskPoints";
import Solution from "./components/Solution";
import Integrations from "./components/Integrations";
import Ready from "./components/Ready";

export const metadata: Metadata = {
  title: "SuroNEX",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <Hero />
        <WhySuronex />
        <ComplianceCoverage />
        <RiskPoints />
        <Solution />
        <Integrations />
        <Ready />
        <Analytics />
      </body>
    </html>
  );
}
