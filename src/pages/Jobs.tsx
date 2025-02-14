
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const Jobs = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10"
            placeholder="Search for jobs..."
            type="search"
          />
        </div>
        <Button>Filter Jobs</Button>
      </div>

      <div className="grid gap-6">
        {[1, 2, 3].map((job) => (
          <Card
            key={job}
            className="p-6 hover:shadow-lg transition-shadow space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-gray-600">TechCorp Solutions</p>
              </div>
              <Button>Apply Now</Button>
            </div>
            <p className="text-gray-600">
              We are looking for a talented Software Engineer to join our growing
              team...
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>₹8-12 LPA</span>
              <span>•</span>
              <span>Bangalore</span>
              <span>•</span>
              <span>Full-time</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
