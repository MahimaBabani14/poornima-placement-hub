
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, Building2, Clock, IndianRupee, GraduationCap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const departments = [
  { value: "all", label: "All Departments" },
  { value: "cse", label: "Computer Science Engineering" },
  { value: "ece", label: "Electronics & Communication Engineering" },
  { value: "me", label: "Mechanical Engineering" },
  { value: "ce", label: "Civil Engineering" },
  { value: "ee", label: "Electrical Engineering" },
];

const jobTypes = [
  { value: "all", label: "All Types" },
  { value: "placement", label: "Full-time Placement" },
  { value: "internship", label: "Internship" },
  { value: "ppo", label: "PPO opportunity" },
];

const Jobs = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/jobs');
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load job opportunities",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (jobId) => {
    try {
      // TODO: Implement job application logic
      toast({
        title: "Success",
        description: "Application submitted successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application",
        variant: "destructive",
      });
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.eligibility.includes(selectedDepartment.toUpperCase());
    const matchesType = selectedType === "all" || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  if (loading) {
    return <div className="text-center py-8">Loading job opportunities...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Campus Placement Portal</h1>
        <p className="text-gray-600">Current Opportunities for 2024 Batch</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-lg shadow-md">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10 border-2 border-primary/20 focus:border-primary/50"
            placeholder="Search opportunities..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select
          value={selectedDepartment}
          onValueChange={setSelectedDepartment}
        >
          <SelectTrigger className="w-[200px] border-2 border-primary/20">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept.value} value={dept.value}>
                {dept.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={selectedType}
          onValueChange={setSelectedType}
        >
          <SelectTrigger className="w-[200px] border-2 border-primary/20">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {jobTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <Card
            key={job._id}
            className="p-6 hover:shadow-lg transition-shadow border-2 border-primary/10 hover:border-primary/30"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{job.role}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <p className="text-gray-600">{job.description}</p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-1 text-primary">
                    <IndianRupee className="h-4 w-4" />
                    <span>{job.package} LPA</span>
                  </div>
                  <div className="flex items-center gap-1 text-pink-600">
                    <Clock className="h-4 w-4" />
                    <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <GraduationCap className="h-4 w-4" />
                    <span>Min. CGPA: {job.cgpa}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 min-w-[150px]">
                <Button 
                  className="w-full bg-primary hover:bg-primary-600"
                  onClick={() => handleApply(job._id)}
                >
                  Apply Now
                </Button>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700">
                    {job.eligibility}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
