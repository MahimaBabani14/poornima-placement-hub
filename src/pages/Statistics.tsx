
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

const Statistics = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary">Placement Statistics 2023-24</h1>
        <p className="text-gray-600">Poornima Institute of Engineering & Technology</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Students Placed</h3>
          <p className="text-3xl font-bold text-primary">367</p>
          <p className="text-sm text-gray-500">Out of 443 Students</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Highest Package</h3>
          <p className="text-3xl font-bold text-primary">18 LPA</p>
          <p className="text-sm text-gray-500">Software Development</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Average Package</h3>
          <p className="text-3xl font-bold text-primary">7.2 LPA</p>
          <p className="text-sm text-gray-500">Across All Departments</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Department-wise Placement Statistics</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={departmentData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar name="Placed Students (%)" dataKey="placed" fill="#1a365d" />
              <Bar name="Avg Package (LPA)" dataKey="avgPackage" fill="#4299e1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Recruiting Companies</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span>TCS</span>
              <span className="text-primary font-semibold">45 Students</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Infosys</span>
              <span className="text-primary font-semibold">38 Students</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Wipro</span>
              <span className="text-primary font-semibold">32 Students</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Accenture</span>
              <span className="text-primary font-semibold">28 Students</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Department-wise Details</h3>
          <div className="space-y-4">
            {departmentData.map((dept) => (
              <div key={dept.name} className="flex justify-between items-center">
                <span>{dept.name}</span>
                <div className="text-right">
                  <div className="text-primary font-semibold">
                    {dept.placed}% Placed
                  </div>
                  <div className="text-sm text-gray-500">
                    {dept.placed} out of {dept.totalStudents} students
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;
