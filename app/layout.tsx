import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Förrådsuthyrning i Bjästa – Tryggt, enkelt, nära dig",
  description:
    "Magasinering med låga priser, generösa öppettider (7–22 dagligen) och säker förvaring. Boka förråd i tre storlekar – litet, mellan, stort.",
  openGraph: {
    title: "Förrådsuthyrning i Bjästa – Tryggt, enkelt, nära dig",
    description:
      "Magasinering med låga priser, generösa öppettider (7–22 dagligen) och säker förvaring.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
