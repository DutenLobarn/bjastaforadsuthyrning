import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Förråds Hotel i Bjästa – Tryggt, enkelt, nära dig",
  description:
    "Magasinering med låga priser, generösa öppettider (7–22 dagligen) och säker förvaring. Boka förråd i 9 storlekar.",
  openGraph: {
    title: "Förråds Hotel i Bjästa – Tryggt, enkelt, nära dig",
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
