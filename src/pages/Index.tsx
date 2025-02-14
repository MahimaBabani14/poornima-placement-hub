
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BriefcaseIcon, UsersIcon, TrendingUpIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary animate-float">
          Welcome to Poornima Placements
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your gateway to career opportunities. Connect with top companies and take
          the first step towards your dream career.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Browse Jobs</Button>
          <Button size="lg" variant="outline">
            Register Now
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="bg-primary-50 p-3 rounded-full">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-gray-600">Active Jobs</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="bg-primary-50 p-3 rounded-full">
              <UsersIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-gray-600">Placed Students</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="bg-primary-50 p-3 rounded-full">
              <TrendingUpIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">92%</p>
              <p className="text-gray-600">Placement Rate</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Featured Companies */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary">
          Featured Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-video bg-white rounded-lg shadow-sm p-4 flex items-center justify-center"
            >
              <div className="text-gray-400">Company Logo</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
