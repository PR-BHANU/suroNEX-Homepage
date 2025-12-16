import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";

export const metadata: Metadata = {
  title: "SuroNEX",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
      </body>
    </html>
  );
}
