
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-primary-50 p-8 rounded-full">
            <UserIcon className="h-16 w-16 text-primary" />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-600">B.Tech Computer Science</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>john.doe@poornima.edu.in</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Roll Number</p>
                <p>PIET2024CS101</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Batch</p>
                <p>2020-2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">CGPA</p>
                <p>8.5</p>
              </div>
            </div>
            <Button>Edit Profile</Button>
          </div>
        </div>
      </Card>

      <Card className="p-8 space-y-6">
        <h3 className="text-xl font-semibold">Application History</h3>
        <div className="space-y-4">
          {[1, 2].map((application) => (
            <div
              key={application}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h4 className="font-medium">Software Engineer</h4>
                <p className="text-sm text-gray-600">TechCorp Solutions</p>
              </div>
              <span className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                In Progress
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Profile;
