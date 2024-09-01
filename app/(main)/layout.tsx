import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <div className="hidden md:flex sticky top-12 w-[270px] py-4  border-r h-[calc(100vh-3rem)] overflow-hidden">
          <div className="overflow-y-scroll overflow-x-hidden h-full scrollbar-hide">
            <Sidebar />
          </div>
        </div>
        <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
