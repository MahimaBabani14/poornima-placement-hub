
import { useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const placementOpportunities = [
    {
      id: 1,
      role: "Software Development Engineer",
      company: "TCS Digital",
      type: "placement",
      package: "6.5-8.5",
      deadline: "2024-04-15",
      eligibility: "CSE, ECE",
      cgpa: "7.0",
      description: "TCS Digital is hiring 2024 batch students for the role of Software Development Engineer...",
    },
    {
      id: 2,
      role: "Summer Internship Program",
      company: "Infosys",
      type: "internship",
      package: "25,000/month",
      deadline: "2024-03-30",
      eligibility: "All Engineering Branches",
      cgpa: "6.5",
      description: "6 months internship opportunity with a possibility of PPO...",
    },
    {
      id: 3,
      role: "Graduate Engineer Trainee",
      company: "L&T Technology Services",
      type: "placement",
      package: "4.5-5.5",
      deadline: "2024-04-20",
      eligibility: "ME, CE, EE",
      cgpa: "6.0",
      description: "L&T Technology Services is hiring Graduate Engineer Trainees across multiple domains...",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Campus Placement Portal</h1>
        <p className="text-gray-600">Current Opportunities for 2024 Batch</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10"
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
          <SelectTrigger className="w-[200px]">
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
          <SelectTrigger className="w-[200px]">
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
        {placementOpportunities.map((opportunity) => (
          <Card
            key={opportunity.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{opportunity.role}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span>{opportunity.company}</span>
                  </div>
                </div>
                <p className="text-gray-600">{opportunity.description}</p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <IndianRupee className="h-4 w-4" />
                    <span>{opportunity.package} LPA</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Deadline: {opportunity.deadline}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <GraduationCap className="h-4 w-4" />
                    <span>Min. CGPA: {opportunity.cgpa}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 min-w-[150px]">
                <Button className="w-full">Apply Now</Button>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary">
                    {opportunity.eligibility}
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
