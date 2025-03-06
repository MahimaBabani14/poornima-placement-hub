
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn, ChevronRight, Mail, Lock, UserPlus, KeyRound, ArrowRight } from "lucide-react";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.endsWith("poornima.edu.in")) {
      newErrors.email = "Must use university email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
          title: "Login Successful",
          description: "Welcome back to Poornima Placements!",
        });
        navigate("/profile");
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Please check your credentials and try again.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTM2NWQiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRoLTJ2M2gydi0zem0tNCAwaC0ydjNoMnYtM3ptLTQgMGgtMnYzaDJ2LTN6bS00IDBoLTJ2M2gydi0zem0tNCAwSDIwdjNoMnYtM3ptLTQgNGgtMnYzaDJ2LTN6bTAgNGgtMnYzaDJ2LTN6bTI0LThoMnYzaC0ydi0zem0wIDRoMnYzaC0ydi0zem0wIDRoMnYzaC0ydi0zem0wLTEyaDJ2M2gtMnYtM3ptMC00aDJ2M2gtMnYtM3ptMC00aDJ2M2gtMnYtM3pNOS4wNzUgMjZIMTN2LTNoLTYuOTI1TDQgMzQuMDQ4VjM4aDUuMDc1di0zaC0yLjA0bDEuMDQtOXpNMzAgNHYzaDN2MTlhMiAyIDAgMCAxLTIgMkgxN2EyIDIgMCAwIDEtMi0yVjdoM1Y0SDkuMDlhMiAyIDAgMCAwLTIgMnYyOGEyIDIgMCAwIDAgMiAySDI5YTIgMiAwIDAgMCAyLTJWNEgzMHoiLz48L2c+PC9nPjwvc3ZnPg==')] p-4">
      <div className="grid md:grid-cols-5 w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Panel - Image/Branding */}
        <div className="md:col-span-2 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Poornima Placements</h2>
            </div>
          </div>
          
          <div className="relative z-10 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Welcome Back</h1>
            <p className="text-white/80">
              Log in to access your placement dashboard and explore opportunities tailored for you.
            </p>
            
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/90 text-sm">Access to 500+ job opportunities</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/90 text-sm">Exclusive company information</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/90 text-sm">Personalized placement assistance</p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center space-x-4 pt-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">Privacy Policy</span>
              <Shield className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">Help Center</span>
              <HelpCircle className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">Terms of Service</span>
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Right Panel - Login Form */}
        <div className="md:col-span-3 bg-white p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
              <p className="text-gray-600">
                Enter your credentials to access the placement portal
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  University Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="yourname@poornima.edu.in"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500 flex items-center gap-1 animate-pulse mt-1">
                    <ChevronRight className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-primary" />
                    Password
                  </label>
                  <button 
                    type="button" 
                    className="text-sm text-primary hover:text-primary-700 transition-colors"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                      errors.password ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                    }`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-primary-50"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500 flex items-center gap-1 animate-pulse mt-1">
                    <ChevronRight className="h-3 w-3" />
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full relative overflow-hidden bg-gradient-to-r from-primary-800 to-primary rounded-lg py-3 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <LogIn className="h-5 w-5" /> 
                      Sign in
                    </div>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-primary hover:text-primary-700 font-medium inline-flex items-center"
                  onClick={() => navigate("/register")}
                >
                  Create account <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex justify-center space-x-4">
                <Button 
                  className="flex items-center gap-2 bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700"
                  onClick={() => navigate("/register/student")}
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Student</span>
                </Button>
                <Button 
                  className="flex items-center gap-2 bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700"
                  onClick={() => navigate("/register/alumni")}
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Alumni</span>
                </Button>
                <Button 
                  className="flex items-center gap-2 bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700"
                  onClick={() => navigate("/forgot-password")}
                >
                  <KeyRound className="h-4 w-4" />
                  <span>Reset</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Missing icon components
const Check = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

const Shield = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
};

const HelpCircle = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12" y2="17"></line>
    </svg>
  );
};

const FileText = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
};

export default Login;
