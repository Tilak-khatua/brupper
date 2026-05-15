import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brupper — Daily Meals Delivered",
  description: "Subscribe to fresh, home-style lunch and dinner. Delivered to your door every day.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
