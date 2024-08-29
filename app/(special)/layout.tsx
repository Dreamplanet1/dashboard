import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="px-10">
          <Navbar />
        </div>

        <div className=" bg-gray-100 min-h-[90vh]">{children}</div>
      </body>
    </html>
  );
}
