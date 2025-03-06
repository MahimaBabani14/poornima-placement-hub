
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2Icon, 
  GraduationCap, 
  Trophy, 
  Users, 
  BookOpen, 
  Map, 
  Phone, 
  Mail,
  Globe,
  Calendar,
  Award
} from "lucide-react";

const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            </svg>
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </div>
          <div className="container mx-auto py-16 px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm mb-4">
                <GraduationCap className="h-12 w-12" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">About Poornima Placements</h1>
              <p className="text-xl text-white/80">
                Bridging the gap between academia and industry since 1999
              </p>
              <div className="pt-4">
                <Button className="bg-white text-primary hover:bg-white/90 transition-all">
                  Our Placement Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary px-4 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Empowering Students for Career Excellence</h2>
            <p className="text-gray-600">
              The Training and Placement Cell at Poornima Institute of Engineering & Technology works 
              with a vision to bridge the gap between industry and academia. We focus on nurturing 
              talent and helping students discover their potential through comprehensive training 
              and placement support.
            </p>
            <p className="text-gray-600">
              Our dedicated team of placement officers, industry experts, and faculty members collaborate 
              to ensure that students are well-prepared for the corporate world. We maintain strong 
              relationships with leading companies across various sectors to provide diverse opportunities.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-50 p-2 rounded-full">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">500+</h4>
                  <p className="text-sm text-gray-500">Companies Visited</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-50 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">12,000+</h4>
                  <p className="text-sm text-gray-500">Students Placed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary-100 rounded-lg"></div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/20 rounded-lg"></div>
            <div className="relative z-10 bg-white shadow-xl rounded-lg overflow-hidden border-2 border-primary/10">
              <img 
                src="/placeholder.svg" 
                alt="Placement Team at Work" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-primary-50 py-16 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600">
              Guiding principles that drive our dedication to student success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-none hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-primary-50/50">
              <div className="space-y-4">
                <div className="bg-primary/10 p-3 inline-block rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  To empower students with the skills, knowledge, and opportunities needed to 
                  build successful careers. We strive to create a seamless pathway from academic 
                  excellence to professional success by providing comprehensive placement services 
                  and industry-aligned training.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 border-none hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-primary-50/50">
              <div className="space-y-4">
                <div className="bg-primary/10 p-3 inline-block rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
                <p className="text-gray-600">
                  To be the premier placement cell among technical institutions, recognized for 
                  our innovative approach to career development and our ability to meet the evolving 
                  needs of both students and industry partners. We aim to achieve 100% placement 
                  for eligible students in reputed organizations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Poornima Placements</h2>
          <p className="text-gray-600">
            Our unique approach to preparing students for professional success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Industry-Focused Training",
              description: "Comprehensive training programs designed with industry inputs to develop technical and soft skills."
            },
            {
              icon: Building2Icon,
              title: "Corporate Connections",
              description: "Strong network with 500+ companies across diverse sectors providing varied career opportunities."
            },
            {
              icon: Calendar,
              title: "Year-Round Activities",
              description: "Continuous engagement through mock interviews, resume workshops, and industry interactions."
            }
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary/5 hover:border-primary/20 animate-float">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary-800 to-primary-600 p-3 inline-block rounded-full text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white rounded-xl shadow-lg border-2 border-primary/10">
        <div className="grid md:grid-cols-2">
          <div className="bg-primary text-white p-8 md:p-12 rounded-l-xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="opacity-80">
                Have questions about our placement process or want to collaborate with us? 
                Our team is here to help.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Map className="h-5 w-5" />
                  </div>
                  <div>
                    <p>ISI-2, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p>placements@poornima.edu.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p>+91 1412770791</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary/50 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary/50 outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary/50 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border-2 border-primary/20 rounded-lg focus:border-primary/50 outline-none transition-colors"></textarea>
              </div>
              <Button className="w-full bg-primary hover:bg-primary-700">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
