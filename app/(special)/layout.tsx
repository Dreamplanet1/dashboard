"use client"
import Navbar from "@/components/Navbar";
import { RootState } from "@/redux/store";
import { AeonikFont, RecoletaFont } from "@/utils/customFonts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useSelector((state: RootState) => state.admin.loggedInUser);
  const router = useRouter();

  useEffect(() => {
    if (!user?.id) {
      router.push("/login");
    }
  }, [user, router]);
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
