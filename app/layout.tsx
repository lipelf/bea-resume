import type { Metadata } from "next";
import "./globals.css";
import LanguageWrapper from "@/components/LanguageWrapper";

export const metadata: Metadata = {
  title: "Beatriz Bittencourt – Estudante de Direito",
  description: "Portfólio e currículo de Beatriz Bittencourt, estudante de Direito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <LanguageWrapper>{children}</LanguageWrapper>
      </body>
    </html>
  );
}
