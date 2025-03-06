
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Phone
} from "lucide-react";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      {/* Profile Header */}
      <div className="relative">
        {/* Cover Photo */}
        <div className="h-48 md:h-64 rounded-xl overflow-hidden bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900">
          <div className="absolute inset-0 w-full h-full">
            <div className="w-full h-full bg-gradient-to-r from-primary-900/20 to-primary-700/20 backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute w-full h-full">
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-accent/30 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
        
        {/* Profile Avatar & Basic Info */}
        <div className="relative -mt-20 ml-6 md:ml-10 flex flex-col md:flex-row items-start md:items-end gap-6">
          <div className="bg-white p-2 rounded-full shadow-lg border-4 border-white backdrop-blur-sm z-10">
            <div className="bg-gradient-to-br from-primary-800 to-primary p-5 rounded-full">
              <UserIcon className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 flex-1 ml-0 md:-ml-4 transform md:translate-y-10">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-primary-900">John Doe</h2>
                <p className="text-accent flex items-center gap-2 font-medium">
                  <GraduationCap className="h-5 w-5" />
                  B.Tech Computer Science Engineering
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  <Mail className="h-4 w-4 mr-1" /> Contact
                </Button>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary-50">
                  <FileText className="h-4 w-4 mr-1" /> Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "CGPA", value: "8.5", icon: GraduationCap, color: "bg-blue-500" },
          { label: "Projects", value: "12", icon: FileText, color: "bg-green-500" },
          { label: "Interviews", value: "5", icon: Building2, color: "bg-purple-500" },
          { label: "Offers", value: "2", icon: Trophy, color: "bg-accent" }
        ].map((stat, index) => (
          <Card 
            key={index} 
            className="p-4 border-none shadow-md hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm overflow-hidden relative"
          >
            <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full opacity-10" style={{ background: stat.color }}></div>
            <div className="flex items-center gap-3">
              <div className={`${stat.color.replace('bg-', 'text-')} p-2 rounded-lg`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Academic Details */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-primary to-primary-700 py-4 px-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
              <BookOpen className="h-5 w-5" />
              Academic Details
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-3">
              {[
                { label: "Current CGPA", value: "8.5" },
                { label: "Previous Semester SGPA", value: "8.7" },
                { label: "Active Backlogs", value: "None", color: "text-green-600" },
                { label: "Attendance", value: "85%" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">{item.label}</span>
                  <span className={`font-semibold ${item.color || 'text-primary-800'}`}>{item.value}</span>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="text-primary w-full">
              <ExternalLink className="h-4 w-4 mr-1" /> View Full Report
            </Button>
          </div>
        </Card>

        {/* Skills & Certifications */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-accent to-pink-600 py-4 px-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
              <Trophy className="h-5 w-5" />
              Skills & Certifications
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-gray-600 font-medium mb-2">Technical Skills</p>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "React", "Node.js", "Data Structures", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-2">Certifications</p>
              <ul className="space-y-2">
                {[
                  { name: "AWS Cloud Practitioner", date: "Apr 2023" },
                  { name: "Google IT Automation with Python", date: "Jan 2023" },
                  { name: "Machine Learning Specialization", date: "Nov 2022" }
                ].map((cert, index) => (
                  <li key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      <span>{cert.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-primary-800 to-primary-900 py-4 px-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
              <Mail className="h-5 w-5" />
              Contact Information
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-3">
              {[
                { icon: Mail, label: "Email", value: "john.doe@poornima.edu.in" },
                { icon: Phone, label: "Phone", value: "+91 9876543210" },
                { icon: Building2, label: "Department", value: "Computer Science" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <div className="bg-primary-50 p-2 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-2 bg-gradient-to-r from-primary-700 to-primary">
              <Download className="h-4 w-4 mr-1" /> Download Contact Card
            </Button>
          </div>
        </Card>
      </div>

      {/* Placement Status */}
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-green-600 to-green-800 py-4 px-6">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
            <Building2 className="h-5 w-5" />
            Placement Status
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Applications", value: "8", color: "bg-blue-100 text-blue-800" },
              { label: "Interviews", value: "5", color: "bg-purple-100 text-purple-800" },
              { label: "Offers", value: "2", color: "bg-green-100 text-green-800" },
              { label: "In Progress", value: "1", color: "bg-amber-100 text-amber-800" }
            ].map((stat, index) => (
              <div key={index} className={`p-4 rounded-xl ${stat.color} flex flex-col items-center text-center`}>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg border-b pb-2">Recent Applications</h4>
            {[
              {
                company: "TechCorp Solutions",
                role: "Software Engineer",
                package: "12 LPA",
                status: "In Progress",
                color: "bg-amber-100 text-amber-800",
                date: "15 Feb 2024"
              },
              {
                company: "Innovate Systems",
                role: "Graduate Engineer Trainee",
                package: "8 LPA",
                status: "Selected",
                color: "bg-green-100 text-green-800",
                date: "20 Jan 2024"
              },
              {
                company: "Global Technologies",
                role: "Associate Developer",
                package: "10 LPA",
                status: "Selected",
                color: "bg-green-100 text-green-800",
                date: "05 Jan 2024"
              }
            ].map((application, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all gap-4 border border-gray-100"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-primary-900">{application.role}</h4>
                    <span className="text-xs bg-primary-50 text-primary-800 px-2 py-0.5 rounded-full">{application.package}</span>
                  </div>
                  <p className="text-sm text-gray-600">{application.company}</p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <p className="text-xs text-gray-500">Applied: {application.date}</p>
                  <span className={`px-3 py-1 rounded-full text-sm ${application.color}`}>
                    {application.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary-50">
              <BarChart3 className="h-4 w-4 mr-1" /> View Placement Statistics
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
