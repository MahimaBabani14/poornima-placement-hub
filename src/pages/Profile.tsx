
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon, GraduationCap, Building2, BookOpen, Trophy } from "lucide-react";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-primary-50 p-8 rounded-full">
            <UserIcon className="h-16 w-16 text-primary" />
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-600 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                B.Tech Computer Science Engineering
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">University Email</p>
                <p>john.doe@poornima.edu.in</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Enrollment Number</p>
                <p>PIET2024CS101</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Academic Year</p>
                <p>2020-2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Semester</p>
                <p>8th Semester</p>
              </div>
            </div>
            <Button>Edit Profile</Button>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Academic Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current CGPA</span>
              <span className="font-semibold">8.5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Previous Semester SGPA</span>
              <span className="font-semibold">8.7</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Backlogs</span>
              <span className="font-semibold text-green-600">None</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Attendance</span>
              <span className="font-semibold">85%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
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
                    className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-600">Certifications</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>AWS Cloud Practitioner</li>
                <li>Google IT Automation with Python</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
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
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-50 rounded-lg gap-4"
            >
              <div>
                <h4 className="font-medium">{application.role}</h4>
                <p className="text-sm text-gray-600">{application.company}</p>
                <p className="text-xs text-gray-500">Applied: {application.appliedDate}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                application.status === "Selected"
                  ? "bg-green-100 text-green-800"
                  : "bg-primary-50 text-primary"
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
