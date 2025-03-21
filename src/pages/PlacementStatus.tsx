
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { 
  CheckCircle2, 
  Clock, 
  Building2, 
  Award, 
  Calendar, 
  Users, 
  GraduationCap, 
  FileText, 
  BarChart4,
  BriefcaseBusiness,
  Share2,
  RefreshCcw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Application {
  id: string;
  company: string;
  role: string;
  appliedDate: string;
  status: 'applied' | 'shortlisted' | 'interview' | 'selected' | 'rejected';
  nextStep?: string;
  nextDate?: string;
}

const statusIcons = {
  applied: <Clock className="h-4 w-4 text-amber-500" />,
  shortlisted: <CheckCircle2 className="h-4 w-4 text-blue-500" />,
  interview: <Users className="h-4 w-4 text-indigo-500" />,
  selected: <Award className="h-4 w-4 text-green-500" />,
  rejected: <FileText className="h-4 w-4 text-gray-500" />
};

const statusColors = {
  applied: "bg-amber-100 text-amber-800 border-amber-300",
  shortlisted: "bg-blue-100 text-blue-800 border-blue-300",
  interview: "bg-indigo-100 text-indigo-800 border-indigo-300",
  selected: "bg-green-100 text-green-800 border-green-300",
  rejected: "bg-gray-100 text-gray-800 border-gray-300"
};

const PlacementStatus = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("applications");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for demonstration
  const applications: Application[] = [
    {
      id: "1",
      company: "TCS Digital",
      role: "Software Developer",
      appliedDate: "2024-03-15",
      status: "interview",
      nextStep: "Technical Interview",
      nextDate: "2024-04-18"
    },
    {
      id: "2",
      company: "Infosys",
      role: "Systems Engineer",
      appliedDate: "2024-03-10",
      status: "shortlisted",
      nextStep: "Aptitude Test",
      nextDate: "2024-04-20"
    },
    {
      id: "3",
      company: "Wipro",
      role: "Project Engineer",
      appliedDate: "2024-03-05",
      status: "selected",
    },
    {
      id: "4",
      company: "Accenture",
      role: "Associate Software Engineer",
      appliedDate: "2024-02-28",
      status: "applied",
    },
    {
      id: "5",
      company: "Cognizant",
      role: "Programmer Analyst",
      appliedDate: "2024-02-20",
      status: "rejected",
    }
  ];

  const upcomingEvents = [
    {
      id: "1",
      title: "TCS Technical Interview",
      date: "2024-04-18",
      time: "10:00 AM",
      location: "Online (MS Teams)",
      type: "interview"
    },
    {
      id: "2",
      title: "Infosys Aptitude Test",
      date: "2024-04-20",
      time: "02:00 PM",
      location: "Computer Lab 3",
      type: "test"
    },
    {
      id: "3",
      title: "IBM Pre-placement Talk",
      date: "2024-04-25",
      time: "11:00 AM",
      location: "Seminar Hall",
      type: "presentation"
    }
  ];

  const placementStats = {
    totalApplications: 12,
    shortlisted: 5,
    interviews: 3,
    offers: 2,
    highestPackage: "12 LPA",
    averagePackage: "8.5 LPA"
  };
  
  const refreshData = () => {
    toast({
      title: "Refreshed",
      description: "Your placement data has been updated",
    });
  };

  const handleStatusUpdate = (applicationId: string) => {
    toast({
      title: "Status updated",
      description: "Application status has been updated successfully",
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-primary mb-2">Placement Tracking Dashboard</h1>
          <p className="text-gray-600">Track and manage your placement applications in one place</p>
        </div>
        <Button onClick={refreshData} variant="outline" className="gap-2">
          <RefreshCcw className="h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5 text-primary" />
              Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{placementStats.totalApplications}</div>
            <p className="text-gray-500">Total applications</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Selection Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">
              {Math.round((placementStats.offers / placementStats.totalApplications) * 100)}%
            </div>
            <p className="text-gray-500">{placementStats.offers} offers received</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart4 className="h-5 w-5 text-accent" />
              Highest Package
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">{placementStats.highestPackage}</div>
            <p className="text-gray-500">Avg: {placementStats.averagePackage}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="applications" className="text-sm">
            <FileText className="h-4 w-4 mr-2" />
            Applications
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            Upcoming Events
          </TabsTrigger>
          <TabsTrigger value="stats" className="text-sm">
            <BarChart4 className="h-4 w-4 mr-2" />
            Statistics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications" className="space-y-4">
          <div className="bg-white rounded-lg shadow-md border-2 border-primary/10 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Company</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Next Step</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-primary/70" />
                          {app.company}
                        </div>
                      </TableCell>
                      <TableCell>{app.role}</TableCell>
                      <TableCell>{new Date(app.appliedDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`flex w-fit items-center gap-1 ${statusColors[app.status]}`}>
                          {statusIcons[app.status]}
                          <span className="capitalize">{app.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {app.nextStep ? (
                          <div className="text-sm">
                            <div>{app.nextStep}</div>
                            {app.nextDate && (
                              <div className="text-xs text-gray-500 flex items-center mt-1">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(app.nextDate).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-500 text-sm">-</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8"
                            onClick={() => handleStatusUpdate(app.id)}
                          >
                            Update
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="p-4 border-t">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                className="border-l-4 hover:shadow-md transition-all"
                style={{
                  borderLeftColor: event.type === 'interview' 
                    ? 'rgb(99, 102, 241)' 
                    : event.type === 'test' 
                      ? 'rgb(245, 158, 11)' 
                      : 'rgb(16, 185, 129)'
                }}
              >
                <CardHeader className="py-4">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="py-0 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString()} | {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="pt-3 flex justify-between">
                    <Badge variant="outline" className={
                      event.type === 'interview' 
                        ? 'bg-indigo-100 text-indigo-800 border-indigo-300' 
                        : event.type === 'test' 
                          ? 'bg-amber-100 text-amber-800 border-amber-300' 
                          : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    }>
                      {event.type === 'interview' 
                        ? 'Interview' 
                        : event.type === 'test' 
                          ? 'Aptitude Test' 
                          : 'Pre-placement Talk'}
                    </Badge>
                    <Button variant="ghost" size="sm">Add to Calendar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="stats" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart4 className="h-5 w-5 text-primary" />
                  Application Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Total Applications</span>
                    <span className="font-bold">{placementStats.totalApplications}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Shortlisted</span>
                    <span className="font-bold">{placementStats.shortlisted}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(placementStats.shortlisted / placementStats.totalApplications) * 100}%` }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Interviews</span>
                    <span className="font-bold">{placementStats.interviews}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${(placementStats.interviews / placementStats.totalApplications) * 100}%` }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Offers</span>
                    <span className="font-bold">{placementStats.offers}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(placementStats.offers / placementStats.totalApplications) * 100}%` }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Placement Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                    <h3 className="font-semibold text-primary mb-2">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Selection Rate</p>
                        <p className="text-lg font-bold text-primary">
                          {Math.round((placementStats.offers / placementStats.totalApplications) * 100)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Interview Conversion</p>
                        <p className="text-lg font-bold text-primary">
                          {Math.round((placementStats.offers / placementStats.interviews) * 100)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Highest Package</p>
                        <p className="text-lg font-bold text-accent">{placementStats.highestPackage}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Average Package</p>
                        <p className="text-lg font-bold text-accent">{placementStats.averagePackage}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Recommendation</h3>
                    <p className="text-sm text-gray-600">
                      Based on your profile and application history, we recommend focusing on improving your technical interview skills and applying to more product-based companies.
                    </p>
                    <Button className="mt-3 w-full bg-primary hover:bg-primary-700">
                      View Personalized Insights
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlacementStatus;
