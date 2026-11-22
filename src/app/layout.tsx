import type { Metadata } from "next";
import { Poppins, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const telugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
});

export const metadata: Metadata = {
  title: "Sharma Academy – Dilsukhnagar, Hyderabad",
  description:
    "Sharma Academy, Dilsukhnagar, Hyderabad: Class 8–10 tuition, Inter MPC and EAMCET coaching.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${telugu.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
