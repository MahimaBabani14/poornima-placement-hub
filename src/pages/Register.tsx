
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, GraduationCap, School, BadgeCheck, CircleCheck, User, Mail, Building } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  registrationNo: z.string().min(5, "Registration number must be at least 5 characters"),
  email: z.string().email("Invalid email address").endsWith("poornima.edu.in", "Must use university email"),
  department: z.string().min(1, "Please select a department"),
});

const departments = [
  { value: "cse", label: "Computer Science Engineering" },
  { value: "ece", label: "Electronics & Communication Engineering" },
  { value: "me", label: "Mechanical Engineering" },
  { value: "ce", label: "Civil Engineering" },
  { value: "ee", label: "Electrical Engineering" },
];

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      registrationNo: "",
      email: "",
      department: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // TODO: Integrate with Supabase for authentication
      toast({
        title: "Registration Successful",
        description: "Please check your email for verification.",
      });
      navigate("/login");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "Please try again later.",
      });
    }
  };

  const nextStep = () => {
    const currentFieldsToValidate = step === 1 
      ? ["name", "email"] 
      : ["registrationNo", "department"];
    
    const isValid = currentFieldsToValidate.every(field => {
      try {
        form.trigger(field as any);
        return !form.getFieldState(field as any).error;
      } catch {
        return false;
      }
    });

    if (isValid) {
      setStep(step + 1);
    } else {
      currentFieldsToValidate.forEach(field => form.trigger(field as any));
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-accent/30 rounded-full opacity-20 blur-3xl"></div>
      
      <Card className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl border-primary/10">
        <div className="grid md:grid-cols-5 min-h-[600px]">
          {/* Left panel - decorative */}
          <div className="md:col-span-2 bg-gradient-to-br from-primary via-primary-800 to-primary-700 p-10 relative hidden md:block">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
            
            <div className="flex flex-col h-full justify-between relative z-10 text-white">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <GraduationCap className="h-6 w-6" />
                  <span className="font-bold">Poornima Placements</span>
                </div>
                
                <h2 className="text-2xl font-bold mt-12">Join Our Growing Community of Students</h2>
                <p className="text-white/80 mt-4">Create your account to access personalized job opportunities</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-2 rounded-full mt-1">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Personalized Job Matching</h4>
                    <p className="text-white/70 text-sm">Get recommendations based on your skills and interests</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-2 rounded-full mt-1">
                    <School className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Training Resources</h4>
                    <p className="text-white/70 text-sm">Access exclusive interview preparation materials</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-2 rounded-full mt-1">
                    <CircleCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Placement Tracking</h4>
                    <p className="text-white/70 text-sm">Monitor your application status in real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right panel - form */}
          <div className="md:col-span-3 p-8 md:p-10">
            <div className="md:hidden flex justify-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-xl">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-primary text-lg font-bold">Poornima Placements</span>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent">Create Your Account</h1>
                <p className="text-gray-600 mt-2">
                  Join our placement portal to access opportunities
                </p>
              </div>
              
              {/* Progress steps */}
              <div className="flex justify-between items-center mb-8 relative">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 ${
                  step >= 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  <User className="h-5 w-5" />
                </div>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 ${
                  step >= 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  <Building className="h-5 w-5" />
                </div>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 ${
                  step >= 3 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  <CircleCheck className="h-5 w-5" />
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="font-semibold text-lg text-primary">Personal Information</h3>
                      
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input placeholder="Enter your full name" className="pl-10 py-6 rounded-xl" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>University Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  type="email"
                                  placeholder="yourname@poornima.edu.in"
                                  className="pl-10 py-6 rounded-xl"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4">
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="w-full bg-gradient-to-r from-primary-800 to-primary-600 hover:from-primary-700 hover:to-primary-500 py-6 rounded-xl text-base"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="font-semibold text-lg text-primary">Academic Information</h3>
                      
                      <FormField
                        control={form.control}
                        name="registrationNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Registration Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <BadgeCheck className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input placeholder="Enter your registration number" className="pl-10 py-6 rounded-xl" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Department</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="py-6 rounded-xl">
                                  <SelectValue placeholder="Select your department" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {departments.map((dept) => (
                                  <SelectItem key={dept.value} value={dept.value}>
                                    {dept.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4 flex space-x-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep}
                          className="w-1/3 py-6 rounded-xl text-base border-2 border-primary/20 hover:bg-primary-50"
                        >
                          <ArrowLeft className="h-4 w-4 mr-1" /> Back
                        </Button>
                        
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="w-2/3 bg-gradient-to-r from-primary-800 to-primary-600 hover:from-primary-700 hover:to-primary-500 py-6 rounded-xl text-base"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8 animate-fade-in">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                          <CircleCheck className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="font-semibold text-xl text-primary">Almost There!</h3>
                        <p className="text-gray-600 mt-2">
                          Please review your information before submitting
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Full Name</span>
                          <span className="font-medium">{form.getValues("name")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Email</span>
                          <span className="font-medium">{form.getValues("email")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Registration Number</span>
                          <span className="font-medium">{form.getValues("registrationNo")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Department</span>
                          <span className="font-medium">
                            {departments.find(dept => dept.value === form.getValues("department"))?.label || form.getValues("department")}
                          </span>
                        </div>
                      </div>
                      
                      <div className="pt-4 flex space-x-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep}
                          className="w-1/3 py-6 rounded-xl text-base border-2 border-primary/20 hover:bg-primary-50"
                        >
                          <ArrowLeft className="h-4 w-4 mr-1" /> Back
                        </Button>
                        
                        <Button 
                          type="submit" 
                          className="w-2/3 bg-gradient-to-r from-primary-800 to-primary-600 hover:from-primary-700 hover:to-primary-500 py-6 rounded-xl text-base"
                        >
                          Complete Registration
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Form>
              
              <div className="pt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button 
                    type="button"
                    className="text-primary hover:text-primary-600 font-medium"
                    onClick={() => navigate("/login")}
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
