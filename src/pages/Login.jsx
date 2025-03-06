
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, LogIn, ChevronRight, Mail, Lock } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary p-4">
      <Card className="w-full max-w-md p-6 md:p-8 space-y-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/10">
        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 animate-bounce">
            <LogIn className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Log in to access your placement portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 text-primary-800">
              <Mail className="h-4 w-4" />
              University Email
            </label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="yourname@poornima.edu.in"
                value={formData.email}
                onChange={handleChange}
                className={`pl-4 rounded-lg border-2 transition-all duration-200 focus:border-primary/50 ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-primary/20"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1 animate-pulse">
                <ChevronRight className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium flex items-center gap-2 text-primary-800">
              <Lock className="h-4 w-4" />
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`pl-4 rounded-lg border-2 transition-all duration-200 focus:border-primary/50 ${
                  errors.password ? "border-red-500 focus:border-red-500" : "border-primary/20"
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
              <p className="text-sm text-red-500 flex items-center gap-1 animate-pulse">
                <ChevronRight className="h-3 w-3" />
                {errors.password}
              </p>
            )}
          </div>

          <div className="space-y-4 pt-2">
            <Button 
              type="submit" 
              className="w-full relative overflow-hidden group btn-enhanced shadow-md hover:shadow-button-glow transition-all duration-300 bg-gradient-to-r from-primary-800 to-primary" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                <>
                  <LogIn className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> 
                  Log In
                </>
              )}
            </Button>
            
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary-700 transition-colors"
                  onClick={() => navigate("/register")}
                >
                  Register here
                </Button>
              </p>
              <Button
                variant="link"
                className="text-sm text-primary p-0 h-auto hover:text-primary-700 transition-colors"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot your password?
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
