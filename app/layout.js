
import Navbar from "@/components/Navbar";
import "./globals.css";
import React from 'react'
import Footer from "@/components/Footer";


export const metadata = {
  title: "Travel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
