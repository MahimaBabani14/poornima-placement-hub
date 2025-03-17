
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent/30 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/4 -z-10 w-64 h-64 bg-primary-50 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 -z-10 w-72 h-72 bg-accent/20 rounded-full opacity-15 blur-2xl animate-pulse"></div>
        
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
