
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent/30 rounded-full opacity-20 blur-3xl"></div>
        
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
