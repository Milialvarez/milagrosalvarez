import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milagros Alvarez | Software Developer",
  description: "Portfolio de Milagros Alvarez, Desarrolladora de Software Fullstack especializada en TypeScript, Java y Python. Integración de IA y arquitecturas limpias.",
  keywords: ["Milagros Alvarez", "Desarrolladora de Software", "Fullstack", "Tandil", "Argentina", "Java", "Python", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}