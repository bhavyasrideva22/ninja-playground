import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Building } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "128%",
      label: "Average Salary Hike",
      description: "via our placement assistance"
    },
    {
      icon: Users,
      number: "1.5L+",
      label: "Success Stories",
      description: "learners placed in top companies"
    },
    {
      icon: Award,
      number: "1,400+",
      label: "MAANG Alumni",
      description: "in top tier companies"
    },
    {
      icon: Building,
      number: "103",
      label: "Unicorn Startups",
      description: "where our alumni work"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven track record speaks for itself. Join thousands of successful professionals who transformed their careers with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Alumni Work At</h3>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple', 'Flipkart', 'Zomato'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-600 hover:text-primary transition-colors cursor-pointer">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;