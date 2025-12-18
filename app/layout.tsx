import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import WhySuronex from "./components/WhySuronex";
import ComplianceCoverage from "./components/ComplianceCoverage";
import RiskPoints from "./components/RiskPoints";

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
      </body>
    </html>
  );
}
