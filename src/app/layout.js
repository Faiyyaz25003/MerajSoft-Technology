import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/Components/Layout/Footer/Footer'
import Navbar from '@/Components/Layout/Navbar/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MerajSoft Technologies",
  description: "Software company",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
