import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Connect | Nonprofit Dashboard", description: "A simple home for your nonprofit’s donors, donations, volunteers, campaigns, and inventory." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
