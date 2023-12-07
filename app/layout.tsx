import type { Metadata } from "next";
import { Heebo, Kalam } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";

const heebo = Heebo({ subsets: ["latin"] });
const kalam = Kalam({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Bruno",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={heebo.className}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
