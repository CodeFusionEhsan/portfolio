import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Ehsan Saleem - Portfolio",
  description: "Ehsan Saleem Portfolio | Know More About Ehsan | View Ehsan's Work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
