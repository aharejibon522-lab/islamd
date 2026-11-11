import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greed Island Online",
  description: "An original multiplayer 3D island adventure."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
