import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, LogIn, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Profile", href: "/profile" },
    { name: "Statistics", href: "/statistics" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg" 
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors group"
            >
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent">
                Poornima Placements
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                  isActive(item.href)
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:text-primary-800"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-full bg-primary-50 scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom rounded-xl -z-0"></span>
                )}
              </Link>
            ))}
            
            <div className="relative ml-2 hidden lg:flex">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-100 border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-40 focus:w-60 transition-all duration-300"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <Button 
              variant="default" 
              size="sm" 
              className="ml-2 bg-gradient-to-r from-primary-800 to-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 rounded-xl"
              onClick={() => {
                if (location.pathname !== "/login" && location.pathname !== "/register") {
                  navigate("/login");
                }
              }}
            >
              <LogIn className="h-4 w-4 mr-1" /> Login
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="ml-1 relative hover:bg-primary-50 transition-colors rounded-full p-2"
            >
              <Bell className="h-5 w-5 text-primary-700" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-accent rounded-full">3</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-primary-50 transition-colors rounded-full p-2"
              >
                <Bell className="h-5 w-5 text-primary-700" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-accent rounded-full">3</span>
              </Button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-primary-700 focus:outline-none transition-colors bg-primary/10 p-2 rounded-xl"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-fade-in z-50">
            <div className="p-4 space-y-3">
              <div className="relative mb-4">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-gray-100 border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-full transition-all duration-300"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 hover:bg-primary-50 hover:text-primary-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Button 
                className="w-full mt-2 bg-gradient-to-r from-primary-800 to-primary transition-all rounded-xl py-6" 
                variant="default" 
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  if (location.pathname !== "/login" && location.pathname !== "/register") {
                    navigate("/login");
                  }
                }}
              >
                <LogIn className="h-4 w-4 mr-1" /> Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
