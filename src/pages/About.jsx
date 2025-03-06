
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
  Award,
  ChevronRight,
  Target,
  Sparkles,
  Zap
} from "lucide-react";

const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section with Enhanced Design */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-400 opacity-10 rounded-full blur-3xl z-0"></div>
        
        <div className="container mx-auto py-20 px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex p-3 bg-white/10 rounded-full backdrop-blur-sm mb-4 animate-float border border-white/20 shadow-xl">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Shaping Future <span className="text-accent animate-pulse">Careers</span></h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Building bridges between academia and industry since 1999, transforming students into industry-ready professionals
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-white/90 transition-all text-base px-6 py-6 rounded-xl shadow-lg hover:shadow-white/30 font-semibold">
                Our Placement Process
              </Button>
              <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all text-base px-6 py-6 rounded-xl backdrop-blur-sm">
                Contact Placement Cell
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Enhanced Design */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary px-4 py-2 rounded-full">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium">OUR MISSION</span>
            </div>
            <h2 className="text-4xl font-bold text-primary leading-tight">Empowering Students for <span className="text-accent">Career Excellence</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Training and Placement Cell at Poornima Institute of Engineering & Technology works 
              with a vision to bridge the gap between industry and academia. We focus on nurturing 
              talent and helping students discover their potential through comprehensive training 
              and placement support.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our dedicated team of placement officers, industry experts, and faculty members collaborate 
              to ensure that students are well-prepared for the corporate world. We maintain strong 
              relationships with leading companies across various sectors to provide diverse opportunities.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex items-center space-x-4 group">
                <div className="bg-primary-50 p-4 rounded-full group-hover:bg-primary-100 transition-colors">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-primary">500+</h4>
                  <p className="text-gray-600">Companies Visited</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-primary-50 p-4 rounded-full group-hover:bg-primary-100 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-primary">12,000+</h4>
                  <p className="text-gray-600">Students Placed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-8 -top-8 w-36 h-36 bg-primary-100 rounded-2xl z-0 animate-pulse"></div>
            <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-accent/20 rounded-2xl z-0 animate-pulse"></div>
            <div className="relative z-10 bg-white shadow-2xl rounded-2xl overflow-hidden border-2 border-primary/10 transform hover:scale-[1.01] transition-transform duration-300">
              <img 
                src="/placeholder.svg" 
                alt="Placement Team at Work" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-bold text-xl">Building Future Leaders</h3>
                  <p className="text-white/80">Our placement team guiding students towards success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Enhanced Design */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-50 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-full mb-4">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">OUR VISION</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 text-lg">
              Guiding principles that drive our dedication to student success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="p-10 border-none hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-primary-50/50 rounded-3xl group overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-100 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-3xl z-0"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="bg-primary/10 p-4 inline-block rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower students with the skills, knowledge, and opportunities needed to 
                  build successful careers. We strive to create a seamless pathway from academic 
                  excellence to professional success by providing comprehensive placement services 
                  and industry-aligned training.
                </p>
                <Button variant="ghost" className="group flex items-center text-primary hover:text-primary-700 hover:bg-primary-50 gap-2 mt-4">
                  Learn More <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
            
            <Card className="p-10 border-none hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-primary-50/50 rounded-3xl group overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent/20 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-3xl z-0"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="bg-primary/10 p-4 inline-block rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the premier placement cell among technical institutions, recognized for 
                  our innovative approach to career development and our ability to meet the evolving 
                  needs of both students and industry partners. We aim to achieve 100% placement 
                  for eligible students in reputed organizations.
                </p>
                <Button variant="ghost" className="group flex items-center text-primary hover:text-primary-700 hover:bg-primary-50 gap-2 mt-4">
                  Learn More <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Highlights with Enhanced Design */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Poornima Placements</h2>
          <p className="text-gray-600 text-lg">
            Our unique approach to preparing students for professional success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
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
            <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-primary/5 hover:border-primary/20 rounded-3xl group overflow-hidden relative h-full">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl z-0"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="bg-gradient-to-br from-primary-800 to-primary-600 p-4 inline-flex rounded-2xl text-white shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                <p className="text-gray-600 text-lg">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section with Enhanced Design */}
      <section className="rounded-3xl overflow-hidden shadow-2xl border border-primary/10 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
        
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-primary via-primary-800 to-primary-700 text-white p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="space-y-8 relative z-10">
              <h3 className="text-3xl font-bold">Get in Touch</h3>
              <p className="opacity-90 text-lg leading-relaxed">
                Have questions about our placement process or want to collaborate with us? 
                Our team is here to help you navigate your career journey.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/10 p-3 rounded-xl mt-1 group-hover:bg-white/20 transition-colors">
                    <Map className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Address</h4>
                    <p className="text-white/80">ISI-2, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/10 p-3 rounded-xl mt-1 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-white/80">placements@poornima.edu.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/10 p-3 rounded-xl mt-1 group-hover:bg-white/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-white/80">+91 1412770791</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-10 md:p-16 bg-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 z-0"></div>
            
            <form className="space-y-8 relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-primary/20 rounded-xl focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border-2 border-primary/20 rounded-xl focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-primary/20 rounded-xl focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border-2 border-primary/20 rounded-xl focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white"></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary-800 to-primary-600 hover:from-primary-700 hover:to-primary-500 text-white py-6 text-base rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                <Zap className="h-5 w-5 mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
