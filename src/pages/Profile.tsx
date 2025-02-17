
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon, GraduationCap, Building2, BookOpen, Trophy, Star } from "lucide-react";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-8 bg-gradient-to-r from-[#1a365d] to-[#243b53] text-white">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-white/10 p-8 rounded-full backdrop-blur-sm">
            <UserIcon className="h-16 w-16 text-pink-400" />
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-pink-200 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                B.Tech Computer Science Engineering
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-pink-200">University Email</p>
                <p className="text-white">john.doe@poornima.edu.in</p>
              </div>
              <div>
                <p className="text-sm text-pink-200">Enrollment Number</p>
                <p className="text-white">PIET2024CS101</p>
              </div>
              <div>
                <p className="text-sm text-pink-200">Academic Year</p>
                <p className="text-white">2020-2024</p>
              </div>
              <div>
                <p className="text-sm text-pink-200">Current Semester</p>
                <p className="text-white">8th Semester</p>
              </div>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Edit Profile</Button>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4 border-2 border-[#1a365d]">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-[#1a365d]">
            <BookOpen className="h-5 w-5" />
            Academic Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current CGPA</span>
              <span className="font-semibold text-[#1a365d]">8.5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Previous Semester SGPA</span>
              <span className="font-semibold text-[#1a365d]">8.7</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Backlogs</span>
              <span className="font-semibold text-green-600">None</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Attendance</span>
              <span className="font-semibold text-[#1a365d]">85%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4 border-2 border-[#1a365d]">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-[#1a365d]">
            <Trophy className="h-5 w-5" />
            Achievements & Skills
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-gray-600">Technical Skills</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {["Java", "Python", "React", "Node.js"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-600">Certifications</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-pink-500" />
                  AWS Cloud Practitioner
                </li>
                <li className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-pink-500" />
                  Google IT Automation with Python
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 space-y-4 border-2 border-[#1a365d]">
        <h3 className="text-xl font-semibold flex items-center gap-2 text-[#1a365d]">
          <Building2 className="h-5 w-5" />
          Placement Status
        </h3>
        <div className="space-y-4">
          {[
            {
              company: "TechCorp Solutions",
              role: "Software Engineer",
              status: "In Progress",
              appliedDate: "2024-02-15",
            },
            {
              company: "Innovate Systems",
              role: "Graduate Engineer Trainee",
              status: "Selected",
              appliedDate: "2024-01-20",
            },
          ].map((application, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gradient-to-r from-gray-50 to-pink-50 rounded-lg gap-4"
            >
              <div>
                <h4 className="font-medium text-[#1a365d]">{application.role}</h4>
                <p className="text-sm text-gray-600">{application.company}</p>
                <p className="text-xs text-gray-500">Applied: {application.appliedDate}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                application.status === "Selected"
                  ? "bg-green-100 text-green-800"
                  : "bg-pink-100 text-pink-700"
              }`}>
                {application.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Profile;
