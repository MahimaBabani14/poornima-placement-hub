
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-primary-50 overflow-x-hidden">
      <Navbar />
      
      {/* Professional animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Top-right decorative element */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-primary-100/30 rounded-bl-full blur-3xl"></div>
        
        {/* Bottom-left decorative element */}
        <div className="absolute bottom-0 left-0 w-[35vw] h-[30vh] bg-accent/20 rounded-tr-full blur-3xl"></div>
        
        {/* Center floating elements */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-50/30 rounded-full opacity-40 blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent/10 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        
        {/* Professional subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        
        {/* Subtle moving gradient accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary-200/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary-200/20 to-accent/10 rounded-full blur-3xl opacity-70 animate-float"></div>
      </div>
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Outlet />
      </main>
      
      {/* Professional footer accent */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-100 via-accent/30 to-primary-100 z-30"></div>
    </div>
  );
};

export default Layout;
