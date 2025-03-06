
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { TrendingUp, Users, BriefcaseBusiness, Award, GraduationCap, BarChart3, Download, Filter, ChevronRight } from "lucide-react";

const departmentData = [
  {
    name: "CSE",
    placed: 85,
    avgPackage: 8.5,
    totalStudents: 100,
  },
  {
    name: "ECE",
    placed: 75,
    avgPackage: 7.2,
    totalStudents: 90,
  },
  {
    name: "ME",
    placed: 65,
    avgPackage: 6.8,
    totalStudents: 80,
  },
  {
    name: "CE",
    placed: 70,
    avgPackage: 6.5,
    totalStudents: 85,
  },
  {
    name: "EE",
    placed: 72,
    avgPackage: 7.0,
    totalStudents: 88,
  },
];

const yearlyTrends = [
  { year: 2019, placementRate: 78, avgPackage: 5.8 },
  { year: 2020, placementRate: 72, avgPackage: 6.2 },
  { year: 2021, placementRate: 80, avgPackage: 6.8 },
  { year: 2022, placementRate: 82, avgPackage: 7.0 },
  { year: 2023, placementRate: 88, avgPackage: 7.2 },
];

const sectorData = [
  { name: "IT & Software", value: 45 },
  { name: "Manufacturing", value: 20 },
  { name: "Finance", value: 15 },
  { name: "Consulting", value: 10 },
  { name: "Others", value: 10 },
];

const COLORS = ["#1a365d", "#2a4a7f", "#3a5fa1", "#5681c3", "#7aa3e5"];

const Statistics = () => {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="relative px-6 py-16 rounded-3xl overflow-hidden bg-gradient-to-r from-primary-800 to-primary-600 shadow-xl">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-white text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm mb-4">
            <BarChart3 className="h-5 w-5" />
            <span className="font-medium">PLACEMENT INSIGHTS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Placement Statistics 2023-24</h1>
          <p className="text-white/80 text-lg">
            Comprehensive data on campus recruitment, placement trends and company participation
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button className="bg-white text-primary hover:bg-white/90 transition-all py-6 rounded-xl text-base">
              <Download className="h-5 w-5 mr-2" /> Download Report
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 transition-all py-6 rounded-xl text-base backdrop-blur-sm">
              <Filter className="h-5 w-5 mr-2" /> Filter by Year
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-8 text-center border-none shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-white to-primary-50/50 rounded-2xl group overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-100 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-3xl z-0"></div>
          
          <div className="space-y-4 relative z-10">
            <div className="bg-primary/10 p-4 inline-block rounded-2xl mb-2 group-hover:bg-primary/20 transition-colors">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600">Total Students Placed</h3>
            <p className="text-4xl font-bold bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent">367</p>
            <p className="text-accent text-sm font-medium">Out of 443 Students (83%)</p>
          </div>
        </Card>
        
        <Card className="p-8 text-center border-none shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-white to-primary-50/50 rounded-2xl group overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-100 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-3xl z-0"></div>
          
          <div className="space-y-4 relative z-10">
            <div className="bg-primary/10 p-4 inline-block rounded-2xl mb-2 group-hover:bg-primary/20 transition-colors">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600">Highest Package</h3>
            <p className="text-4xl font-bold bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent">18 LPA</p>
            <p className="text-accent text-sm font-medium">Software Development</p>
          </div>
        </Card>
        
        <Card className="p-8 text-center border-none shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-white to-primary-50/50 rounded-2xl group overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-100 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-3xl z-0"></div>
          
          <div className="space-y-4 relative z-10">
            <div className="bg-primary/10 p-4 inline-block rounded-2xl mb-2 group-hover:bg-primary/20 transition-colors">
              <BriefcaseBusiness className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600">Average Package</h3>
            <p className="text-4xl font-bold bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent">7.2 LPA</p>
            <p className="text-accent text-sm font-medium">Across All Departments</p>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Department-wise Bar Chart */}
        <Card className="p-8 border-none shadow-xl rounded-2xl overflow-hidden">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Department-wise Statistics
              </h2>
              <Button variant="outline" size="sm" className="rounded-full">
                View Details
              </Button>
            </div>
            
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={departmentData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "white", borderRadius: "0.5rem", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)", border: "none" }}
                  />
                  <Legend />
                  <Bar name="Placed Students (%)" dataKey="placed" fill="#1a365d" radius={[4, 4, 0, 0]} />
                  <Bar name="Avg Package (LPA)" dataKey="avgPackage" fill="#ec4899" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Yearly Trends Line Chart */}
        <Card className="p-8 border-none shadow-xl rounded-2xl overflow-hidden">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Yearly Placement Trends
              </h2>
              <Button variant="outline" size="sm" className="rounded-full">
                View Details
              </Button>
            </div>
            
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={yearlyTrends}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "white", borderRadius: "0.5rem", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)", border: "none" }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="placementRate"
                    name="Placement Rate (%)"
                    stroke="#1a365d"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="avgPackage" 
                    name="Avg Package (LPA)" 
                    stroke="#ec4899" 
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Industry Distribution Pie Chart */}
        <Card className="p-8 border-none shadow-xl rounded-2xl overflow-hidden">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                <BriefcaseBusiness className="h-5 w-5" />
                Industry-wise Distribution
              </h2>
              <Button variant="outline" size="sm" className="rounded-full">
                View Details
              </Button>
            </div>
            
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Percentage']}
                    contentStyle={{ backgroundColor: "white", borderRadius: "0.5rem", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)", border: "none" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Top Recruiting Companies */}
        <Card className="p-8 border-none shadow-xl rounded-2xl overflow-hidden">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                <Award className="h-5 w-5" />
                Top Recruiting Companies
              </h2>
              <Button variant="outline" size="sm" className="rounded-full">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {[
                { company: "TCS", students: 45, logo: "/placeholder.svg" },
                { company: "Infosys", students: 38, logo: "/placeholder.svg" },
                { company: "Wipro", students: 32, logo: "/placeholder.svg" },
                { company: "Accenture", students: 28, logo: "/placeholder.svg" },
              ].map((company, index) => (
                <div key={index} className="flex justify-between items-center p-4 hover:bg-primary-50 rounded-xl transition-colors group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-md bg-white shadow-md overflow-hidden">
                      <img src={company.logo} alt={company.company} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-medium text-gray-700">{company.company}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary font-semibold">{company.students} Students</span>
                    <ChevronRight className="h-4 w-4 text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button variant="ghost" className="w-full text-primary hover:bg-primary-50 rounded-xl py-6">
                View Complete Placement Report
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;
