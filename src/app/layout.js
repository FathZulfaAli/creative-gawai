/** @format */

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Gotrade",
  description: "Invest in Fractional US Stocks",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
