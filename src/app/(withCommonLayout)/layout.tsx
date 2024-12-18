// import Footer from "@/src/components/UI/Footer";
import { Navbar } from "@/src/components/UI/navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen max-w-7xl mx-auto">
      <Navbar />
      <main className="h-screen">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default CommonLayout;
