
import type { Metadata } from "next";
import "./globals.css";
import { AeonikFont, RecoletaFont } from "@/utils/customFonts";
import ClientProvider from "./ClientProvider";
import { Toaster } from "@/components/ui/toaster";

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
        <ClientProvider>{children}
        <Toaster />
        </ClientProvider>

      </body>
    </html>
  );
}
