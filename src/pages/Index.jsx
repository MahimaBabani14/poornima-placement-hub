
import React from "react";
import { 
  Button 
} from "@/components/ui/button";
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import { 
  BriefcaseIcon, 
  UsersIcon, 
  TrendingUpIcon, 
  PhoneIcon, 
  MailIcon, 
  Building2Icon, 
  GraduationCapIcon, 
  CalendarIcon,
  ArrowRightIcon,
  BuildingIcon,
  BadgeCheckIcon,
  ExternalLinkIcon,
  ChevronRightIcon
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const placementTeam = [
    {
      name: "Dr. Rakesh Sharma",
      role: "Training & Placement Officer",
      department: "Placement Cell",
      email: "tpo@poornima.edu.in",
      phone: "+91-9876543210",
      image: "/placeholder.svg"
    },
    {
      name: "Mrs. Priya Verma",
      role: "Placement Coordinator",
      department: "CSE Department",
      email: "placement.cse@poornima.edu.in",
      phone: "+91-9876543211",
      image: "/placeholder.svg"
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Industry Relations Head",
      department: "Placement Cell",
      email: "industry.relations@poornima.edu.in",
      phone: "+91-9876543212",
      image: "/placeholder.svg"
    }
  ];

  const upcomingEvents = [
    {
      title: "Amazon Campus Recruitment",
      date: "March 15, 2024",
      type: "Recruitment Drive",
      registerBy: "March 10, 2024"
    },
    {
      title: "Technical Skills Workshop",
      date: "March 18, 2024",
      type: "Workshop",
      registerBy: "March 15, 2024"
    },
    {
      title: "Mock Interview Session",
      date: "March 20, 2024",
      type: "Training",
      registerBy: "March 18, 2024"
    }
  ];

  const featuredCompanies = [
    { name: "Google", package: "36 LPA", roles: ["SDE", "Data Analyst"] },
    { name: "Microsoft", package: "25 LPA", roles: ["Developer", "PM"] },
    { name: "Amazon", package: "32 LPA", roles: ["SDE I", "SDE II"] },
    { name: "Infosys", package: "10 LPA", roles: ["Systems Engineer"] },
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl min-h-[70vh] flex items-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary/70 z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl opacity-30 z-0"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl opacity-20 z-0"></div>
        
        {/* Content */}
        <div className="container relative z-20 text-white">
          <div className="max-w-3xl space-y-6 px-4">
            <div>
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                Poornima Institute of Engineering & Technology
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome to Poornima Placements
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Your gateway to career opportunities. Connect with top companies and take
              the first step towards your dream career.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary-900 hover:bg-gray-100 hover:text-primary-800 transition-all duration-300"
                asChild
              >
                <Link to="/jobs">
                  Browse Jobs <BriefcaseIcon className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 transition-all duration-300"
                asChild
              >
                <Link to="/register">
                  Register Now <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: BriefcaseIcon, label: "Active Jobs", value: "500+", color: "bg-blue-500" },
            { icon: UsersIcon, label: "Placed Students", value: "1000+", color: "bg-accent" },
            { icon: TrendingUpIcon, label: "Placement Rate", value: "92%", color: "bg-green-500" },
          ].map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 border-none shadow-lg overflow-hidden relative bg-white backdrop-blur-sm"
            >
              <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-10" style={{ background: stat.color }}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className={`${stat.color} bg-opacity-20 p-3 rounded-xl`}>
                    <stat.icon className={`h-7 w-7 ${stat.color.replace('bg-', 'text-')}`} />
                  </div>
                  <span className="text-4xl font-bold text-primary-900">{stat.value}</span>
                </div>
                <p className="text-gray-600 mt-3 font-medium">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="space-y-6 px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary-900 flex items-center gap-2">
            <CalendarIcon className="h-6 w-6 text-accent" />
            Upcoming Events
          </h2>
          <Button variant="ghost" className="text-primary hover:bg-primary-50 gap-1">
            View All <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all border-none shadow-md overflow-hidden group"
            >
              <div className="h-2 bg-gradient-to-r from-primary-700 to-primary"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 text-xs bg-primary-50 text-primary-700 rounded-full">
                    {event.type}
                  </span>
                  <div className="flex flex-col items-center justify-center text-center bg-primary-50 rounded-lg p-2 min-w-16 h-16">
                    <span className="text-xs text-gray-500">
                      {event.date.split(',')[0].split(' ')[0]}
                    </span>
                    <span className="text-2xl font-bold text-primary-800">
                      {event.date.split(',')[0].split(' ')[1]}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mt-4 text-primary-900 group-hover:text-primary-700 transition-colors">
                  {event.title}
                </h3>
                
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BuildingIcon className="h-4 w-4" />
                    <span>Register by: {event.registerBy}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-5 bg-gradient-to-r from-primary-800 to-primary-700"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <section className="space-y-6 px-4">
        <h2 className="text-2xl font-bold text-primary-900 flex items-center gap-2">
          <BadgeCheckIcon className="h-6 w-6 text-accent" />
          Featured Companies
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCompanies.map((company, i) => (
            <Card
              key={i}
              className="aspect-[4/3] bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-none relative overflow-hidden group"
            >
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-primary-700 font-bold text-xl">{company.name[0]}</div>
                  </div>
                  
                  <h3 className="font-medium text-lg text-primary-900">{company.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-accent font-medium">{company.package}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {company.roles.map((role, index) => (
                      <span 
                        key={index}
                        className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-2 rounded-full bg-primary-50 hover:bg-primary-100"
                    >
                      <ExternalLinkIcon className="h-4 w-4 text-primary-700" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary-50"
            asChild
          >
            <Link to="/jobs">
              View All Companies <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Placement Team Section */}
      <section className="space-y-6 px-4">
        <h2 className="text-2xl font-bold text-primary-900 flex items-center gap-2">
          <GraduationCapIcon className="h-6 w-6 text-accent" />
          Meet Our Placement Team
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {placementTeam.map((member, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all border-none shadow-md overflow-hidden group bg-white"
            >
              <div className="h-2 bg-gradient-to-r from-accent to-pink-600"></div>
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-50 bg-primary-50 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-0 right-0 mx-auto w-fit bg-white rounded-full border border-gray-100 shadow-sm p-1.5">
                    <div className="bg-primary-50 text-primary-700 p-1 rounded-full">
                      <GraduationCapIcon className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-primary-900 group-hover:text-primary-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
                    <Building2Icon className="h-4 w-4" />
                    {member.department}
                  </p>
                </div>
                
                <div className="space-y-2 w-full pt-5 mt-5 border-t border-gray-100">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <MailIcon className="h-4 w-4" />
                    {member.email}
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 py-16 px-4">
        <div className="absolute -right-20 top-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute -left-20 bottom-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl opacity-20 z-0"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white space-y-6">
          <h2 className="text-2xl font-bold">Student Testimonials</h2>
          <blockquote className="text-xl italic">
            "The placement cell at Poornima Institute has been extremely supportive throughout my job search. 
            The training workshops and mock interviews significantly improved my skills and confidence. 
            I'm grateful for their guidance that helped me secure a position at my dream company."
          </blockquote>
          <div>
            <p className="font-medium text-lg">Ananya Sharma</p>
            <p className="text-gray-300">B.Tech CSE, Batch of 2023</p>
            <p className="text-accent mt-1">Placed at Google</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
