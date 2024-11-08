import Navbar from "@/components/Navbar";
import { AeonikFont, RecoletaFont } from "@/utils/customFonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AeonikFont.className} ${RecoletaFont.variable}`}>
        <div className="px-10">
          <Navbar />
        </div>

        <div className=" bg-gray-100 min-h-[90vh]">{children}</div>
      </body>
    </html>
  );
}
