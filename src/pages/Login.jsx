
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Eye, 
  EyeOff, 
  LogIn, 
  Mail, 
  Lock, 
  ArrowRight, 
  CheckCircle, 
  Briefcase,
  GraduationCap,
  Sparkles
} from "lucide-react";

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
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      {/* Left panel (decorative) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary via-primary-800 to-primary-700 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-40 -translate-y-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-x-20 translate-y-10 blur-3xl"></div>
        
        <div className="flex flex-col justify-between w-full max-w-lg mx-auto h-full relative z-10">
          {/* Logo and branding */}
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl animate-float">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-white text-xl font-bold">Poornima Placements</span>
            </div>
          </div>
          
          {/* Main content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-white leading-tight">Discover Your <span className="text-accent">Dream Career</span></h1>
              <p className="text-white/80 text-lg">
                Access personalized job opportunities from top companies tailored to your skills and aspirations
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 border border-white/10 shadow-lg">
                <div className="flex space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg">500+ Companies</h3>
                    <p className="text-white/70">Access opportunities from top-tier companies</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 border border-white/10 shadow-lg">
                <div className="flex space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg">Verified Campus Placements</h3>
                    <p className="text-white/70">Secure your future with trusted companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-white/60 text-sm">
            <p>&copy; 2024 Poornima Institute. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Right panel (login form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
        
        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Mobile logo (only visible on small screens) */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-xl">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-primary text-lg font-bold">Poornima Placements</span>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent">Welcome Back</h2>
            <p className="text-gray-600">
              Enter your credentials to access the placement portal
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-primary/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5">
                    <Mail className="h-4 w-4 text-primary" />
                    University Email
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@poornima.edu.in"
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                        errors.email 
                          ? "border-red-300 focus:border-red-400 bg-red-50" 
                          : "border-gray-200 focus:border-primary"
                      }`}
                    />
                    {!errors.email && formData.email && (
                      <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                    )}
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-red-500"></span>
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-gray-700 flex items-center gap-1.5">
                      <Lock className="h-4 w-4 text-primary" />
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => navigate("/forgot-password")}
                      className="text-sm text-primary hover:text-primary-600 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                        errors.password 
                          ? "border-red-300 focus:border-red-400 bg-red-50" 
                          : "border-gray-200 focus:border-primary"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-red-500"></span>
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary-800 to-primary-600 hover:from-primary-700 hover:to-primary-500 text-white py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    Sign in
                  </>
                )}
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                  onClick={() => navigate("/register/student")}
                >
                  Student
                </button>
                <button
                  type="button"
                  className="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                  onClick={() => navigate("/register/alumni")}
                >
                  Alumni
                </button>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-primary hover:text-primary-600 font-medium inline-flex items-center"
                    onClick={() => navigate("/register")}
                  >
                    Create account <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
