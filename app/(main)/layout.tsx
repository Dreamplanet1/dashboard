import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <div className="hidden md:flex sticky top-12 h-[80vh] w-[300px] py-4 border-r">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140]">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
