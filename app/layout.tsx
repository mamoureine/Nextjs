import type { Metadata } from "next";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Marieme SALL — Web developer",
    template: "%s | Marieme SALL",
  },
  description:
    "The portfolio of Marieme SALL, a web developer creating thoughtful, useful digital experiences.",
  icons: { icon: "/favicon.svg" },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
