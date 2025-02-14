
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2019", value: 85 },
  { name: "2020", value: 88 },
  { name: "2021", value: 90 },
  { name: "2022", value: 92 },
  { name: "2023", value: 95 },
];

const Statistics = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Total Placements</h3>
          <p className="text-3xl font-bold text-primary">1,234</p>
          <p className="text-sm text-gray-600">Academic Year 2023-24</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Average Package</h3>
          <p className="text-3xl font-bold text-primary">₹6.8 LPA</p>
          <p className="text-sm text-gray-600">Academic Year 2023-24</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Highest Package</h3>
          <p className="text-3xl font-bold text-primary">₹24 LPA</p>
          <p className="text-sm text-gray-600">Academic Year 2023-24</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Placement Trends</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1a365d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Statistics;
