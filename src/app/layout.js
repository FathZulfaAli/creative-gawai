/** @format */

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Creative Gawai",
  description: "Official Creative Gawai Company Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
