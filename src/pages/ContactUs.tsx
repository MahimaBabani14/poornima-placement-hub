
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  Globe,
  ArrowRight,
} from "lucide-react";

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  agreement: z.boolean().refine((val) => val === true, {
    message: "You must agree to our terms and privacy policy",
  }),
});

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "admissions" | "placements">("general");

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      agreement: false,
    },
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", values);
      toast.success("Your message has been sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      title: "General Inquiries",
      description: "For general information about our institution",
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      email: "info@poornima.edu.in",
      phone: "+91 1412-770790",
      active: activeTab === "general",
      id: "general",
    },
    {
      title: "Admissions",
      description: "For admission related queries",
      icon: <Globe className="h-6 w-6 text-primary" />,
      email: "admissions@poornima.edu.in",
      phone: "+91 1412-770791",
      active: activeTab === "admissions",
      id: "admissions",
    },
    {
      title: "Placements",
      description: "For placement and career opportunities",
      icon: <Send className="h-6 w-6 text-primary" />,
      email: "placements@poornima.edu.in",
      phone: "+91 1412-770792",
      active: activeTab === "placements",
      id: "placements",
    },
  ];

  return (
    <div className="pb-20">
      {/* Header Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90 z-10"></div>
        <div className="bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80')] bg-cover bg-center h-72 md:h-96"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Get in Touch
            </h1>
            <p className="text-white/90 md:text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about admissions, 
              placements, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card) => (
            <Card 
              key={card.id}
              className={`transition-all duration-300 hover:shadow-lg ${
                card.active 
                  ? 'border-primary/50 shadow-md bg-primary-50/50' 
                  : 'hover:border-primary/30'
              }`}
              onClick={() => setActiveTab(card.id as "general" | "admissions" | "placements")}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  {card.icon}
                  <div className={`w-3 h-3 rounded-full ${card.active ? 'bg-primary' : 'bg-gray-200'}`}></div>
                </div>
                <CardTitle className="mt-4">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{card.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{card.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Details and Form Section */}
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent inline-block">
                Our Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary-100/50 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Address</h3>
                    <p className="text-muted-foreground mt-1">
                      Poornima Institute of Engineering & Technology,<br/>
                      ISI-2, RIICO Institutional Area, Sitapura,<br/>
                      Jaipur, Rajasthan 302022
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary-100/50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-muted-foreground mt-1">+91 1412-770790</p>
                    <p className="text-muted-foreground">+91 1412-770799</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary-100/50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground mt-1">info@poornima.edu.in</p>
                    <p className="text-muted-foreground">support@poornima.edu.in</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary-100/50 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Working Hours</h3>
                    <p className="text-muted-foreground mt-1">Monday - Friday: 9am - 5pm</p>
                    <p className="text-muted-foreground">Saturday: 9am - 1pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="relative h-80 overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.533308654373!2d75.84217687601371!3d26.855498562798574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6a5c96de869%3A0x88a972d95cc77ee!2sPoornima%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1684384054076!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Poornima Institute of Engineering & Technology Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full opacity-20 -z-10 blur-3xl animate-pulse-custom"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full opacity-20 -z-10 blur-3xl animate-float"></div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-border p-6 md:p-8 shadow-sm relative z-10">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent inline-block">
                Send Us a Message
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="yourname@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..." 
                            className="min-h-32 resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="agreement"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            I agree to the terms of service and privacy policy
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-gradient-to-r from-primary-800 to-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 rounded-xl group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent inline-block">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our institution, admissions process, and placements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are the admission requirements?",
                answer: "Admission requirements vary depending on the program. Generally, candidates must have completed 10+2 with required percentages in relevant subjects. Entrance exam scores may also be required for certain programs."
              },
              {
                question: "How can I apply for scholarships?",
                answer: "Scholarships are offered based on academic merit, sports achievements, and financial need. You can apply for scholarships during the admission process or check our website for specific scholarship programs and their application procedures."
              },
              {
                question: "What is the placement record of the institute?",
                answer: "Our institute has an excellent placement record with over 90% of eligible students being placed in reputable companies. Our placement cell works throughout the year to connect students with industry opportunities."
              },
              {
                question: "Are there any hostel facilities available?",
                answer: "Yes, we provide separate hostel facilities for boys and girls with modern amenities including Wi-Fi, gym, mess, and recreation areas. All hostels are located on or near the campus for easy access."
              },
            ].map((faq, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
