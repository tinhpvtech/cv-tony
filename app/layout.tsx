import type { Metadata, Viewport } from "next";
import "@fontsource-variable/nunito-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tinh Phan — Senior Full-Stack Engineer",
  description: "Tinh Phan, Senior Full-Stack Engineer and AI Product Engineer with 8+ years of experience.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#dfe6ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1220" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
