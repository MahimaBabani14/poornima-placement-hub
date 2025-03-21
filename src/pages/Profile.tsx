
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  UserIcon, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Trophy, 
  Star, 
  BarChart3,
  ExternalLink,
  FileText,
  Download,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
  AlertCircle,
  Calendar as CalendarIcon,
  Award,
  Laptop,
  Globe,
  PenTool,
} from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const scheduleInterview = () => {
    toast.success("Mock interview scheduled successfully! Check your email for details.");
  };
  
  const downloadResume = () => {
    toast.success("Resume downloaded successfully!");
  };

  const applyForJob = (job: string) => {
    toast.success(`Application submitted for ${job}!`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 sm:px-6">
      {/* Profile Header with Glassmorphism */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary-800 to-primary-600">
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Profile Avatar */}
          <div className="bg-white/90 p-2 rounded-full shadow-lg backdrop-blur-sm">
            <div className="bg-gradient-to-br from-primary-800 to-primary p-5 rounded-full">
              <UserIcon className="h-16 w-16 text-white" />
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">John Doe</h2>
                <p className="text-primary-50 flex items-center gap-2 text-lg">
                  <GraduationCap className="h-5 w-5" />
                  B.Tech Computer Science Engineering
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-accent/80 hover:bg-accent text-white">CGPA: 8.5</Badge>
                  <Badge className="bg-primary-400/80 hover:bg-primary-400 text-white">Batch of 2024</Badge>
                  <Badge variant="outline" className="border-white/30 text-white">ML Specialization</Badge>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" className="gap-1 bg-white text-primary-800 hover:bg-primary-50">
                  <Mail className="h-4 w-4" /> Contact
                </Button>
                <Button variant="outline" className="gap-1 bg-transparent border-white/40 text-white hover:bg-white/10" onClick={downloadResume}>
                  <FileText className="h-4 w-4" /> Resume
                </Button>
              </div>
            </div>
            
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              {[
                { label: "Applications", value: "8", icon: FileText, color: "text-blue-300" },
                { label: "Interviews", value: "5", icon: Briefcase, color: "text-purple-300" },
                { label: "Offers", value: "2", icon: Check, color: "text-green-300" },
                { label: "Events Attended", value: "7", icon: Calendar, color: "text-yellow-300" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <stat.icon className={`h-6 w-6 ${stat.color} mb-1`} />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-primary-50 uppercase font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-md">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 gap-1 bg-primary-50 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-primary-900">Overview</TabsTrigger>
            <TabsTrigger value="academics" className="data-[state=active]:bg-white data-[state=active]:text-primary-900">Academics</TabsTrigger>
            <TabsTrigger value="placements" className="data-[state=active]:bg-white data-[state=active]:text-primary-900">Placements</TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-white data-[state=active]:text-primary-900">Skills</TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-white data-[state=active]:text-primary-900">Resources</TabsTrigger>
          </TabsList>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Career Summary */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm md:col-span-2">
              <CardHeader className="bg-gradient-to-r from-primary-800 to-primary-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Career Summary
                </CardTitle>
                <CardDescription className="text-primary-100">Your placement journey at a glance</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Ready for Placement</h3>
                      <p className="text-gray-600">All required documents verified and validated</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 rounded-xl p-5">
                    <h3 className="font-semibold text-primary-900 mb-3">Placement Highlights</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-gray-500 text-sm">Highest Package Offered</p>
                        <p className="text-xl font-bold text-primary-900">₹12 LPA</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-gray-500 text-sm">Top Interview Performance</p>
                        <p className="text-xl font-bold text-primary-900">85%</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-gray-500 text-sm">Placement Readiness</p>
                        <p className="text-xl font-bold text-green-600">Excellent</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-gray-500 text-sm">Upcoming Opportunities</p>
                        <p className="text-xl font-bold text-primary-900">3</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-t pt-4">
                    <div>
                      <h4 className="font-medium">Next Steps</h4>
                      <p className="text-gray-600 text-sm">Continue to prepare for upcoming interviews</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1 text-primary border-primary hover:bg-primary-50">
                      <ArrowUpRight className="h-4 w-4" /> View Detailed Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-accent to-pink-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
                <CardDescription className="text-white/80">Interviews, workshops, and sessions</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Mock Interview",
                      company: "Placement Cell",
                      date: "May 15, 2024",
                      time: "10:00 AM",
                      type: "Online",
                      priority: "high"
                    },
                    {
                      title: "Resume Workshop",
                      company: "Career Services",
                      date: "May 18, 2024",
                      time: "2:00 PM",
                      type: "Campus Hall 3",
                      priority: "medium"
                    },
                    {
                      title: "TechCorp Info Session",
                      company: "TechCorp Solutions",
                      date: "May 20, 2024",
                      time: "11:00 AM",
                      type: "Online",
                      priority: "medium"
                    }
                  ].map((event, index) => (
                    <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                      <div className="flex flex-col items-center justify-center bg-primary-50 p-2 rounded-lg min-w-[60px] text-center">
                        <span className="text-xs text-gray-500">{event.date.split(',')[0]}</span>
                        <span className="text-xl font-bold text-primary-900">{event.date.split(' ')[1]}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium flex items-center gap-1">
                          {event.title}
                          {event.priority === "high" && (
                            <Badge className="ml-1 bg-red-500 text-white text-xs">Priority</Badge>
                          )}
                        </h4>
                        <p className="text-sm text-gray-600">{event.company}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs flex items-center gap-1 text-gray-500">
                            <Clock className="h-3 w-3" /> {event.time}
                          </span>
                          <span className="text-xs flex items-center gap-1 text-gray-500">
                            <MapPin className="h-3 w-3" /> {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button onClick={scheduleInterview} className="w-full gap-2 bg-accent hover:bg-accent/90">
                    <Calendar className="h-4 w-4" /> Schedule a Mock Interview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Latest Job Recommendations */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Latest Job Recommendations
              </CardTitle>
              <CardDescription className="text-white/80">Matched based on your profile and skills</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    role: "Software Engineer",
                    company: "TechCorp Solutions",
                    package: "12 LPA",
                    location: "Bengaluru",
                    match: "95%",
                    deadline: "May 30",
                    skills: ["Java", "React", "AWS"]
                  },
                  {
                    role: "Data Analyst",
                    company: "Analytics Innovations",
                    package: "10 LPA",
                    location: "Hyderabad",
                    match: "87%",
                    deadline: "May 25",
                    skills: ["Python", "SQL", "Tableau"]
                  },
                  {
                    role: "Frontend Developer",
                    company: "WebTech Solutions",
                    package: "11 LPA",
                    location: "Remote",
                    match: "92%",
                    deadline: "June 5",
                    skills: ["React", "TypeScript", "CSS"]
                  }
                ].map((job, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-primary-900">{job.role}</h4>
                          <p className="text-gray-600 text-sm">{job.company}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                          {job.match} Match
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" /> {job.location}
                      </div>
                      
                      <div className="mt-2">
                        <p className="text-sm font-medium text-primary-900">₹{job.package}</p>
                      </div>
                      
                      <div className="mt-2 flex flex-wrap gap-1">
                        {job.skills.map((skill, sIndex) => (
                          <Badge key={sIndex} variant="outline" className="text-xs bg-gray-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <div className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> Deadline: {job.deadline}
                        </div>
                        <Button 
                          size="sm" 
                          onClick={() => applyForJob(job.role)}
                          className="bg-primary hover:bg-primary-700"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary-50">
                View All Job Opportunities <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Academics Tab */}
        <TabsContent value="academics" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Academic Performance */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-primary-800 to-primary-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Academic Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-6">
                  <div className="bg-primary-50 p-4 rounded-xl">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Overall CGPA</p>
                        <p className="text-3xl font-bold text-primary-900">8.5</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Current Semester</p>
                        <p className="text-3xl font-bold text-primary-900">6th</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 text-gray-700">Semester-wise Performance</h4>
                    <div className="space-y-2">
                      {[
                        { sem: "Semester 1", sgpa: "8.2" },
                        { sem: "Semester 2", sgpa: "8.3" },
                        { sem: "Semester 3", sgpa: "8.7" },
                        { sem: "Semester 4", sgpa: "8.6" },
                        { sem: "Semester 5", sgpa: "8.7" }
                      ].map((semester, index) => (
                        <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                          <span className="font-medium">{semester.sem}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold">{semester.sgpa}</span>
                            <div className="w-16 h-3 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary-600 rounded-full" 
                                style={{ width: `${(parseFloat(semester.sgpa) / 10) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between border-t pt-3">
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="font-medium text-green-700">No active backlogs</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1 text-primary border-primary hover:bg-primary-50">
                      <FileText className="h-4 w-4" /> Full Transcript
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Projects */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-accent to-pink-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5" />
                  Course Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  {[
                    {
                      title: "AI-Powered Healthcare System",
                      course: "Advanced Machine Learning",
                      tech: ["Python", "TensorFlow", "Flask"],
                      grade: "A+"
                    },
                    {
                      title: "E-commerce Platform with React",
                      course: "Web Technologies",
                      tech: ["React", "Node.js", "MongoDB"],
                      grade: "A"
                    },
                    {
                      title: "Smart Home IoT Solution",
                      course: "IoT and Embedded Systems",
                      tech: ["Arduino", "MQTT", "AWS IoT"],
                      grade: "A"
                    }
                  ].map((project, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-all">
                      <h4 className="font-medium text-primary-900">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.course}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech, tIndex) => (
                            <Badge key={tIndex} variant="outline" className="text-xs bg-gray-50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Badge className="bg-green-100 text-green-800">Grade: {project.grade}</Badge>
                      </div>
                      <div className="flex justify-end mt-3">
                        <Button size="sm" variant="ghost" className="h-8 gap-1 text-primary hover:bg-primary-50">
                          <ExternalLink className="h-3 w-3" /> View Project
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full gap-1 border-primary text-primary hover:bg-primary-50">
                    <Laptop className="h-4 w-4" /> View All Projects
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Awards */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Achievements & Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Hackathon Winner",
                    event: "TechFest 2023",
                    description: "Secured first place in the national level hackathon with a blockchain solution",
                    date: "Nov 2023"
                  },
                  {
                    title: "Best Research Paper",
                    event: "Computer Science Symposium",
                    description: "Recognized for paper on 'AI in Healthcare: Opportunities and Challenges'",
                    date: "Aug 2023"
                  },
                  {
                    title: "Academic Excellence Award",
                    event: "University Awards",
                    description: "Awarded for maintaining CGPA above 8.5 for three consecutive semesters",
                    date: "Jan 2023"
                  }
                ].map((achievement, index) => (
                  <Card key={index} className="overflow-hidden border border-gray-100">
                    <div className="p-4">
                      <div className="flex gap-3 items-start">
                        <div className="bg-amber-100 p-2 rounded-lg">
                          <Award className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary-900">{achievement.title}</h4>
                          <p className="text-sm text-accent">{achievement.event}</p>
                          <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                          <p className="text-xs text-gray-500 mt-2">{achievement.date}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Placements Tab */}
        <TabsContent value="placements" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Placement Status */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm md:col-span-2">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Placement Status
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                <div className="bg-green-50 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800">Selected at Global Technologies</h3>
                    <p className="text-green-700">Associate Developer | ₹10 LPA</p>
                    <p className="text-xs text-green-600 mt-1">Joining Date: July 2024</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 border-b pb-2">Application History</h4>
                  <div className="space-y-3">
                    {[
                      {
                        company: "TechCorp Solutions",
                        role: "Software Engineer",
                        package: "12 LPA",
                        status: "In Progress",
                        statusClass: "bg-amber-100 text-amber-800",
                        date: "15 Feb 2024",
                        stages: [
                          { name: "Application", status: "completed" },
                          { name: "Online Test", status: "completed" },
                          { name: "Technical Interview", status: "current" },
                          { name: "HR Interview", status: "pending" }
                        ]
                      },
                      {
                        company: "Innovate Systems",
                        role: "Graduate Engineer Trainee",
                        package: "8 LPA",
                        status: "Selected",
                        statusClass: "bg-green-100 text-green-800",
                        date: "20 Jan 2024",
                        stages: [
                          { name: "Application", status: "completed" },
                          { name: "Online Test", status: "completed" },
                          { name: "Technical Interview", status: "completed" },
                          { name: "HR Interview", status: "completed" }
                        ]
                      },
                      {
                        company: "Global Technologies",
                        role: "Associate Developer",
                        package: "10 LPA",
                        status: "Selected",
                        statusClass: "bg-green-100 text-green-800",
                        date: "05 Jan 2024",
                        stages: [
                          { name: "Application", status: "completed" },
                          { name: "Online Test", status: "completed" },
                          { name: "Technical Interview", status: "completed" },
                          { name: "HR Interview", status: "completed" }
                        ]
                      }
                    ].map((application, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                        <div className="p-4">
                          <div className="flex flex-col md:flex-row justify-between md:items-center">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium text-primary-900">{application.role}</h4>
                                <span className={`text-xs px-2 py-1 rounded-full ${application.statusClass}`}>{application.status}</span>
                              </div>
                              <p className="text-sm text-gray-600">{application.company}</p>
                              <p className="text-sm text-primary-800 font-medium">₹{application.package}</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 md:mt-0">Applied: {application.date}</p>
                          </div>
                          
                          <div className="mt-4 flex justify-between items-center relative">
                            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                            {application.stages.map((stage, stageIndex) => (
                              <div key={stageIndex} className="flex flex-col items-center relative z-10">
                                <div className={`w-4 h-4 rounded-full ${
                                  stage.status === "completed" ? "bg-green-500" :
                                  stage.status === "current" ? "bg-amber-500" : "bg-gray-300"
                                } mb-1`}></div>
                                <span className="text-xs whitespace-nowrap">{stage.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Placement Analytics */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Placement Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-5">
                  <div className="bg-primary-50 p-4 rounded-xl">
                    <h4 className="font-medium text-primary-900 mb-3">Your Performance</h4>
                    
                    {[
                      { label: "Technical Skills", value: 85, color: "bg-primary-600" },
                      { label: "Communication", value: 78, color: "bg-accent" },
                      { label: "Problem Solving", value: 92, color: "bg-green-500" },
                      { label: "Project Portfolio", value: 80, color: "bg-amber-500" }
                    ].map((skill, index) => (
                      <div key={index} className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">{skill.label}</span>
                          <span className="text-sm font-medium">{skill.value}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${skill.color}`} 
                            style={{ width: `${skill.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Department Comparison</h4>
                    <div className="space-y-3">
                      <div className="p-3 border border-gray-100 rounded-lg flex justify-between items-center">
                        <span className="text-sm">Your Percentile</span>
                        <span className="font-bold text-primary-900">85th</span>
                      </div>
                      <div className="p-3 border border-gray-100 rounded-lg flex justify-between items-center">
                        <span className="text-sm">Batch Average Package</span>
                        <span className="font-bold text-primary-900">₹7.5 LPA</span>
                      </div>
                      <div className="p-3 border border-gray-100 rounded-lg flex justify-between items-center">
                        <span className="text-sm">Your Package</span>
                        <span className="font-bold text-primary-900">₹10 LPA</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full gap-1 bg-primary-700 hover:bg-primary-800">
                    <BarChart3 className="h-4 w-4" /> Detailed Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Upcoming Companies */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Upcoming Campus Placement Drives
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    company: "Microsoft",
                    role: "Software Engineer",
                    package: "18-22 LPA",
                    date: "June 5, 2024",
                    eligibility: "CGPA > 8.0, No backlogs",
                    logo: "M"
                  },
                  {
                    company: "Infosys",
                    role: "Systems Engineer",
                    package: "5-8 LPA",
                    date: "June 12, 2024",
                    eligibility: "CGPA > 7.0, No active backlogs",
                    logo: "I"
                  },
                  {
                    company: "Amazon",
                    role: "SDE",
                    package: "16-20 LPA",
                    date: "June 20, 2024",
                    eligibility: "CGPA > 8.0, No backlogs",
                    logo: "A"
                  }
                ].map((company, index) => (
                  <Card key={index} className="border border-gray-100 hover:shadow-md transition-all overflow-hidden">
                    <div className="p-5">
                      <div className="flex gap-3 items-start">
                        <div className="w-10 h-10 rounded-md bg-primary-700 text-white flex items-center justify-center font-bold text-lg">
                          {company.logo}
                        </div>
                        <div>
                          <h4 className="font-medium text-primary-900">{company.company}</h4>
                          <p className="text-sm text-gray-600">{company.role}</p>
                        </div>
                      </div>
                      
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Package:</span>
                          <span className="text-sm font-medium">{company.package}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Drive Date:</span>
                          <span className="text-sm font-medium">{company.date}</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                          <span className="text-xs text-gray-500">Eligibility:</span>
                          <p className="text-xs">{company.eligibility}</p>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full mt-4" 
                        variant={index === 0 ? "default" : "outline"}
                        onClick={() => applyForJob(company.role)}
                      >
                        {index === 0 ? "Apply Now" : "Check Eligibility"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-primary-800 to-primary-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-5">
                  <div>
                    <h4 className="font-medium mb-3">Programming Languages</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Java", level: 85 },
                        { name: "Python", level: 90 },
                        { name: "JavaScript", level: 80 },
                        { name: "C++", level: 75 }
                      ].map((skill, index) => (
                        <div key={index} className="p-3 border border-gray-100 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-gray-600">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary-600" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Frameworks & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "React", level: "Advanced" },
                        { name: "Node.js", level: "Intermediate" },
                        { name: "Spring Boot", level: "Intermediate" },
                        { name: "TensorFlow", level: "Beginner" },
                        { name: "Docker", level: "Intermediate" },
                        { name: "Git", level: "Advanced" },
                        { name: "AWS", level: "Beginner" },
                        { name: "MongoDB", level: "Intermediate" }
                      ].map((tool, index) => {
                        let bgColor = "bg-gray-100 text-gray-800";
                        if (tool.level === "Advanced") bgColor = "bg-green-100 text-green-800";
                        if (tool.level === "Intermediate") bgColor = "bg-blue-100 text-blue-800";
                        if (tool.level === "Beginner") bgColor = "bg-amber-100 text-amber-800";
                        
                        return (
                          <Badge key={index} className={`${bgColor} hover:${bgColor}`}>
                            {tool.name} • {tool.level}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <h4 className="font-medium mb-3">Industry Knowledge</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures", "Algorithms", "OOP", "DBMS", 
                        "Web Development", "Software Development Life Cycle",
                        "Cloud Computing", "Machine Learning Basics"
                      ].map((knowledge, index) => (
                        <Badge key={index} variant="outline" className="bg-primary-50 border-primary-200">
                          {knowledge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-accent to-pink-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  {[
                    {
                      name: "AWS Cloud Practitioner",
                      issuer: "Amazon Web Services",
                      date: "Apr 2023",
                      expires: "Apr 2026",
                      logo: "A",
                      verified: true
                    },
                    {
                      name: "Google IT Automation with Python",
                      issuer: "Google",
                      date: "Jan 2023",
                      expires: "No Expiry",
                      logo: "G",
                      verified: true
                    },
                    {
                      name: "Machine Learning Specialization",
                      issuer: "Coursera (Stanford)",
                      date: "Nov 2022",
                      expires: "No Expiry",
                      logo: "S",
                      verified: true
                    },
                    {
                      name: "React Developer Certification",
                      issuer: "Meta",
                      date: "Aug 2022",
                      expires: "Aug 2024",
                      logo: "M",
                      verified: true
                    }
                  ].map((cert, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-lg flex gap-3 hover:shadow-sm transition-all">
                      <div className="w-10 h-10 rounded-md bg-primary-700 text-white flex items-center justify-center font-bold text-lg">
                        {cert.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-primary-900 flex items-center gap-1">
                              {cert.name}
                              {cert.verified && (
                                <Check className="h-4 w-4 text-green-600" />
                              )}
                            </h4>
                            <p className="text-sm text-gray-600">{cert.issuer}</p>
                          </div>
                          <Button size="sm" variant="ghost" className="h-8 text-primary hover:bg-primary-50">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span>Issued: {cert.date}</span>
                          <span>Expires: {cert.expires}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full gap-1 border-primary text-primary hover:bg-primary-50">
                    <Award className="h-4 w-4" /> Add New Certification
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skill Development */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5" />
                Skill Development
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border border-gray-100 hover:shadow-md transition-all overflow-hidden">
                  <CardHeader className="bg-primary-50 pb-3">
                    <CardTitle className="text-lg text-primary-900">Recommended Courses</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {[
                        { name: "Advanced Data Structures", platform: "Coursera", duration: "8 weeks" },
                        { name: "Full Stack Development", platform: "Udemy", duration: "12 weeks" },
                        { name: "System Design", platform: "educative.io", duration: "6 weeks" }
                      ].map((course, index) => (
                        <div key={index} className="p-3 border-b last:border-0">
                          <h5 className="font-medium text-sm">{course.name}</h5>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{course.platform}</span>
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-3 text-primary hover:bg-primary-50">
                      View All Courses
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-100 hover:shadow-md transition-all overflow-hidden">
                  <CardHeader className="bg-primary-50 pb-3">
                    <CardTitle className="text-lg text-primary-900">Skill Gap Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {[
                        { skill: "Cloud Architecture", importance: "High", status: "Needs Improvement" },
                        { skill: "System Design", importance: "High", status: "Moderate" },
                        { skill: "DevOps", importance: "Medium", status: "Low" }
                      ].map((gap, index) => (
                        <div key={index} className="p-3 border-b last:border-0">
                          <h5 className="font-medium text-sm">{gap.skill}</h5>
                          <div className="flex justify-between text-xs mt-1">
                            <span className="text-gray-500">Importance: 
                              <span className={
                                gap.importance === "High" ? " text-red-600" : 
                                gap.importance === "Medium" ? " text-amber-600" : " text-blue-600"
                              }> {gap.importance}</span>
                            </span>
                            <span className="text-gray-500">Status: {gap.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-3 text-primary hover:bg-primary-50">
                      Full Analysis
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-100 hover:shadow-md transition-all overflow-hidden">
                  <CardHeader className="bg-primary-50 pb-3">
                    <CardTitle className="text-lg text-primary-900">Interview Preparation</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {[
                        { type: "Mock Technical Interview", date: "May 15", status: "Scheduled" },
                        { type: "HR Interview Practice", date: "May 20", status: "Not Started" },
                        { type: "Coding Test Practice", date: "Ongoing", status: "In Progress" }
                      ].map((prep, index) => (
                        <div key={index} className="p-3 border-b last:border-0">
                          <h5 className="font-medium text-sm">{prep.type}</h5>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{prep.date}</span>
                            <span className={
                              prep.status === "Scheduled" ? "text-blue-600" : 
                              prep.status === "In Progress" ? "text-amber-600" : "text-gray-600"
                            }>{prep.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3 text-primary border-primary hover:bg-primary-50" onClick={scheduleInterview}>
                      Schedule Practice
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Resources Tab */}
        <TabsContent value="resources" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Placement Resources */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm md:col-span-2">
              <CardHeader className="bg-gradient-to-r from-primary-800 to-primary-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Placement Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Resume Templates",
                      description: "ATS-friendly resume templates for different roles",
                      icon: FileText,
                      color: "bg-blue-100 text-blue-700"
                    },
                    {
                      title: "Interview Questions",
                      description: "Common technical and HR interview questions",
                      icon: AlertCircle,
                      color: "bg-purple-100 text-purple-700"
                    },
                    {
                      title: "Company Insights",
                      description: "Research about companies visiting the campus",
                      icon: Building2,
                      color: "bg-green-100 text-green-700"
                    },
                    {
                      title: "Aptitude Test Prep",
                      description: "Practice questions for aptitude rounds",
                      icon: GraduationCap,
                      color: "bg-amber-100 text-amber-700"
                    }
                  ].map((resource, index) => (
                    <Card key={index} className="border border-gray-100 hover:shadow-md transition-all overflow-hidden">
                      <div className="p-4 flex gap-3">
                        <div className={`p-3 rounded-lg ${resource.color}`}>
                          <resource.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary-900">{resource.title}</h4>
                          <p className="text-sm text-gray-600">{resource.description}</p>
                          <Button variant="ghost" size="sm" className="mt-2 h-8 text-primary hover:bg-primary-50 p-0">
                            Access Resources
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 border-b pb-2">Latest Placement Guides</h4>
                  <div className="space-y-3">
                    {[
                      {
                        title: "How to Prepare for Technical Interviews",
                        author: "Career Services",
                        date: "2 days ago",
                        readTime: "10 min"
                      },
                      {
                        title: "Salary Negotiation: Do's and Don'ts",
                        author: "Placement Cell",
                        date: "1 week ago",
                        readTime: "8 min"
                      },
                      {
                        title: "Building a Strong LinkedIn Profile",
                        author: "Alumni Relations",
                        date: "2 weeks ago",
                        readTime: "12 min"
                      }
                    ].map((guide, index) => (
                      <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                        <h5 className="font-medium text-primary-900">{guide.title}</h5>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-sm text-gray-600">By {guide.author}</div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{guide.date}</span>
                            <span>•</span>
                            <span>{guide.readTime} read</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alumni Connect */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-accent to-pink-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Alumni Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  <p className="text-gray-600">Connect with alumni for guidance and mentorship</p>
                  
                  {[
                    {
                      name: "Amit Sharma",
                      company: "Google",
                      role: "Senior Software Engineer",
                      batch: "2019",
                      profilePic: "A"
                    },
                    {
                      name: "Priya Patel",
                      company: "Microsoft",
                      role: "Product Manager",
                      batch: "2020",
                      profilePic: "P"
                    },
                    {
                      name: "Rohit Verma",
                      company: "Amazon",
                      role: "SDE II",
                      batch: "2021",
                      profilePic: "R"
                    }
                  ].map((alumni, index) => (
                    <div key={index} className="p-3 border border-gray-100 rounded-lg flex items-center gap-3 hover:shadow-sm transition-all">
                      <div className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-lg">
                        {alumni.profilePic}
                      </div>
                      <div>
                        <h5 className="font-medium">{alumni.name}</h5>
                        <p className="text-sm text-gray-600">{alumni.role} at {alumni.company}</p>
                        <p className="text-xs text-gray-500">Batch of {alumni.batch}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Button className="w-full mt-2 gap-1">
                    <Users className="h-4 w-4" /> View Alumni Network
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Development */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-800 text-white">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Career Development
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Career Counseling",
                    description: "1-on-1 sessions with industry experts",
                    icon: Users,
                    action: "Book Session"
                  },
                  {
                    title: "Resume Review",
                    description: "Get your resume reviewed by HR professionals",
                    icon: FileText,
                    action: "Upload Resume"
                  },
                  {
                    title: "Mock Interviews",
                    description: "Practice with real interview scenarios",
                    icon: Briefcase,
                    action: "Schedule Now"
                  },
                  {
                    title: "Workshops",
                    description: "Upcoming skill development workshops",
                    icon: Calendar,
                    action: "View Schedule"
                  }
                ].map((service, index) => (
                  <Card key={index} className="border border-gray-100 hover:shadow-md transition-all overflow-hidden">
                    <div className="p-5 text-center flex flex-col items-center">
                      <div className="p-3 rounded-full bg-primary-50 mb-3">
                        <service.icon className="h-6 w-6 text-primary-700" />
                      </div>
                      <h4 className="font-medium text-primary-900">{service.title}</h4>
                      <p className="text-sm text-gray-600 mt-1 mb-4">{service.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-auto border-primary text-primary hover:bg-primary-50"
                        onClick={index === 2 ? scheduleInterview : undefined}
                      >
                        {service.action}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;

// Additional component for rendering user icons
const Users = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};
