import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Aaditya Maindarkar | GenAI Engineer, Developer & Creator",
  description: "Portfolio of Aaditya Maindarkar — GenAI Engineer, Full-Stack Developer, and Professional Visual Creator based in Pune, India.",
  keywords: ["Aaditya Maindarkar", "GenAI", "Full-Stack Developer", "Agentic AI", "Video Editor", "Photographer", "React", "Next.js", "Portfolio"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`} style={{ background: "#0a0215", fontFamily: "var(--font-poppins), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
