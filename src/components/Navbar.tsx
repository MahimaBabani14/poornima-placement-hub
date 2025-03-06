
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, LogIn, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Profile", href: "/profile" },
    { name: "Statistics", href: "/statistics" },
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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors group"
            >
              <GraduationCap className="h-8 w-8 group-hover:scale-110 transition-transform" />
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
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group ${
                  isActive(item.href)
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:bg-primary-50 hover:text-primary-800"
                }`}
              >
                {item.name}
                {!isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-2 bg-gradient-to-r from-primary-800 to-primary hover:shadow-button-glow transition-all duration-300"
              onClick={() => location.pathname !== "/login" && location.pathname !== "/register" && location.replace("/login")}
            >
              <LogIn className="h-4 w-4 mr-1" /> Login
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="ml-1 relative hover:bg-primary-50 transition-colors"
            >
              <Bell className="h-5 w-5 text-primary-700" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-accent rounded-full">3</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="relative mr-2 hover:bg-primary-50 transition-colors"
            >
              <Bell className="h-5 w-5 text-primary-700" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-accent rounded-full">3</span>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary-700 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-primary-50 hover:text-primary-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="w-full mt-2 bg-gradient-to-r from-primary-800 to-primary transition-all" 
                variant="default" 
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  location.pathname !== "/login" && location.pathname !== "/register" && location.replace("/login");
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
