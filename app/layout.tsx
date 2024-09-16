import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AeonikFont, RecoletaFont } from "@/utils/customFonts";
import localFont from "next/font/local";

const inter = Poppins({ weight: "400", subsets: ["latin"] });
const myFont = localFont({ src: "../public/fonts/AeonikTRIAL-Regular.otf" });

export const metadata: Metadata = {
  title: "Dream Planet",
  description: "Dream Planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AeonikFont.className} ${RecoletaFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
