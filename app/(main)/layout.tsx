"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { RootState } from "@/redux/store";
import { AeonikFont, RecoletaFont } from "@/utils/customFonts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.admin.loggedInUser);
  const router = useRouter();

  useEffect(() => {
    if (!user?.id) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <body className={`${AeonikFont.className} ${RecoletaFont.variable}`}>
      <div className="px-4 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
          <div className="hidden md:flex sticky top-12 w-[270px] py-4  border-r h-[calc(100vh-3rem)] overflow-hidden">
            <div className="overflow-y-scroll overflow-x-hidden h-full scrollbar-hide">
              <Sidebar />
            </div>
          </div>
          <div className="p-5 w-full">{children}</div>
        </div>
      </div>
    </body>
  );
};

export default MainLayout;
