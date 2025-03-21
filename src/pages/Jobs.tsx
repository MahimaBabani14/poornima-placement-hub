
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  SearchIcon, 
  Building2, 
  Clock, 
  IndianRupee, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Calendar,
  BookOpen
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Notifications from "@/components/Notifications";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const sampleJobs = [
  {
    _id: "1",
    role: "Software Developer",
    company: "Tech Corp",
    type: "placement",
    package: "12",
    deadline: "2024-05-01",
    eligibility: "CSE, ECE",
    cgpa: "7.5",
    description: "Looking for talented software developers to join our team.",
    location: "Jaipur, Rajasthan",
    postedDate: "2024-03-15",
    positions: 5,
    skills: ["JavaScript", "React", "Node.js"]
  },
  {
    _id: "2",
    role: "Data Analyst Intern",
    company: "Data Solutions",
    type: "internship",
    package: "6",
    deadline: "2024-04-15",
    eligibility: "CSE",
    cgpa: "7.0",
    description: "3-month internship opportunity in data analytics.",
    location: "Bangalore, Karnataka",
    postedDate: "2024-03-10",
    positions: 3,
    skills: ["SQL", "Python", "Excel"]
  },
  {
    _id: "3",
    role: "Frontend Developer",
    company: "WebTech Solutions",
    type: "placement",
    package: "10",
    deadline: "2024-05-10",
    eligibility: "CSE, ECE",
    cgpa: "6.5",
    description: "Join our creative team to build amazing user interfaces.",
    location: "Pune, Maharashtra",
    postedDate: "2024-03-20",
    positions: 2,
    skills: ["HTML/CSS", "JavaScript", "React"]
  },
  {
    _id: "4",
    role: "Product Management Intern",
    company: "InnovateTech",
    type: "internship",
    package: "5",
    deadline: "2024-04-20",
    eligibility: "All Branches",
    cgpa: "6.0",
    description: "Learn product development lifecycle in a fast-paced environment.",
    location: "Delhi, NCR",
    postedDate: "2024-03-12",
    positions: 1,
    skills: ["Market Research", "Documentation", "Communication"]
  },
  {
    _id: "5",
    role: "Machine Learning Engineer",
    company: "AI Innovations",
    type: "ppo",
    package: "14",
    deadline: "2024-05-15",
    eligibility: "CSE",
    cgpa: "8.0",
    description: "Exciting opportunity to work on cutting-edge AI projects with PPO potential.",
    location: "Hyderabad, Telangana",
    postedDate: "2024-03-22",
    positions: 3,
    skills: ["Python", "TensorFlow", "Machine Learning"]
  }
];

const Jobs = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [jobs, setJobs] = useState(sampleJobs);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/jobs');
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      if (data && Array.isArray(data)) {
        setJobs(data);
      } else {
        setJobs(sampleJobs);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast({
        title: "Notice",
        description: "Using sample job data for demonstration",
      });
      setJobs(sampleJobs);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (jobId) => {
    try {
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

  const getFilteredJobs = () => {
    return jobs.filter(job => {
      const matchesSearch = job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.description && job.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesDepartment = selectedDepartment === "all" || 
        (job.eligibility && job.eligibility.toLowerCase().includes(selectedDepartment.toLowerCase()));
      
      const matchesType = selectedType === "all" || job.type === selectedType;
      
      const matchesTab = activeTab === "all" || job.type === activeTab;
      
      return matchesSearch && matchesDepartment && matchesType && matchesTab;
    });
  };

  const filteredJobs = getFilteredJobs();

  const getTypeColor = (type) => {
    switch(type) {
      case 'placement': return 'bg-gradient-to-r from-primary-700 to-primary-500 text-white';
      case 'internship': return 'bg-gradient-to-r from-purple-700 to-purple-500 text-white';
      case 'ppo': return 'bg-gradient-to-r from-pink-700 to-pink-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'placement': return 'Full-time';
      case 'internship': return 'Internship';
      case 'ppo': return 'PPO';
      default: return type;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-primary/20 mb-4"></div>
          <div className="h-4 w-48 bg-primary/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-sky-50 rounded-3xl transform -skew-y-1"></div>
        <div className="relative py-8 px-4 md:px-8 rounded-3xl overflow-hidden">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">Campus Placement Portal</h1>
            <p className="text-gray-600 max-w-2xl text-center">
              Discover exciting career opportunities and internships from top companies.
              Your gateway to professional success starts here.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 space-y-2">
                <label htmlFor="search" className="text-sm font-medium text-gray-700">Search Opportunities</label>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="search"
                    className="pl-10 border-2 border-primary/20 focus-visible:ring-primary/30"
                    placeholder="Job title, company, skills..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="w-full md:w-auto space-y-2">
                <label htmlFor="department" className="text-sm font-medium text-gray-700">Department</label>
                <Select
                  value={selectedDepartment}
                  onValueChange={setSelectedDepartment}
                >
                  <SelectTrigger id="department" className="min-w-[200px] border-2 border-primary/20">
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
              </div>
              
              <div className="w-full md:w-auto space-y-2">
                <label htmlFor="jobType" className="text-sm font-medium text-gray-700">Job Type</label>
                <Select
                  value={selectedType}
                  onValueChange={setSelectedType}
                >
                  <SelectTrigger id="jobType" className="min-w-[200px] border-2 border-primary/20">
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
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="bg-slate-100 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow">
              All Jobs
            </TabsTrigger>
            <TabsTrigger value="placement" className="data-[state=active]:bg-white data-[state=active]:shadow">
              Placements
            </TabsTrigger>
            <TabsTrigger value="internship" className="data-[state=active]:bg-white data-[state=active]:shadow">
              Internships
            </TabsTrigger>
            <TabsTrigger value="ppo" className="data-[state=active]:bg-white data-[state=active]:shadow">
              PPO
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          {renderJobsList(filteredJobs)}
        </TabsContent>
        <TabsContent value="placement" className="mt-0">
          {renderJobsList(filteredJobs)}
        </TabsContent>
        <TabsContent value="internship" className="mt-0">
          {renderJobsList(filteredJobs)}
        </TabsContent>
        <TabsContent value="ppo" className="mt-0">
          {renderJobsList(filteredJobs)}
        </TabsContent>
      </Tabs>

      {filteredJobs.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-xl">
          <BookOpen className="mx-auto h-12 w-12 text-slate-300 mb-4" />
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No opportunities found</h3>
          <p className="text-slate-500">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );

  function renderJobsList(jobs) {
    return (
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Card
            key={job._id}
            className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-0 shadow-md"
          >
            <div className="bg-gradient-to-r from-slate-50 to-white border-b p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{job.role}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                </div>
                <Badge className={`${getTypeColor(job.type)} px-3 py-1 text-xs font-semibold`}>
                  {getTypeLabel(job.type)}
                </Badge>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 line-clamp-2">{job.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills && job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-slate-50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="space-y-1">
                  <div className="text-xs text-gray-500">Package</div>
                  <div className="flex items-center gap-1 text-primary font-medium">
                    <IndianRupee className="h-3 w-3" />
                    <span>{job.package} LPA</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-xs text-gray-500">Deadline</div>
                  <div className="flex items-center gap-1 text-pink-600 font-medium">
                    <Clock className="h-3 w-3" />
                    <span>{new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-xs text-gray-500">Min. CGPA</div>
                  <div className="flex items-center gap-1 font-medium">
                    <GraduationCap className="h-3 w-3 text-amber-600" />
                    <span>{job.cgpa}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-xs text-gray-500">Positions</div>
                  <div className="flex items-center gap-1 font-medium">
                    <Briefcase className="h-3 w-3 text-blue-600" />
                    <span>{job.positions || 'Multiple'}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-1 text-slate-600 text-sm">
                  <MapPin className="h-3 w-3" />
                  <span>{job.location || 'Remote'}</span>
                </div>
                
                <Button 
                  className="font-medium rounded-full px-4 bg-primary hover:bg-primary-600 transition-all duration-300 hover:shadow-md"
                  onClick={() => handleApply(job._id)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }
};

export default Jobs;
