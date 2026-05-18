import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milagros Alvarez | Software Developer",
  description: "Portfolio de Milagros Alvarez, Desarrolladora de Software Fullstack especializada en TypeScript, Java y Python. Integración de IA y arquitecturas limpias.",
  keywords: ["Milagros Alvarez", "Desarrolladora de Software", "Fullstack", "Tandil", "Argentina", "Java", "Python", "TypeScript"],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>",
  },
  verification: {
    google: "5XxYTljI-V7ytErFMbV1yrAL6QzawUMcHoEZhvU7iHg",
  },
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