import { Card, CardContent } from "@/components/ui/card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Check, X, Zap, TrendingUp } from "lucide-react";
import { useNavigationAction } from "@/hooks/useButtonInteraction";
import { useNavigate } from "react-router-dom";

const TrustIndicatorsSection = () => {
  const navigate = useNavigate();
  
  // Button interactions
  const { isLoading: isExploreLoading, handleClick } = useNavigationAction({
    loadingText: 'Loading...',
    successText: 'Redirecting to offerings...'
  });
  const features = [
    "Structured + problem solving based",
    "Fastest 1:1 doubt support",
    "Integrated prep platform",
    "Profiles highlighted on Naukri"
  ];

  const comparisonData = [
    {
      feature: "Structured + problem solving based",
      codingNinjas: true,
      freeResources: true,
      otherCourses: false
    },
    {
      feature: "Fastest 1:1 doubt support",
      codingNinjas: true,
      freeResources: false,
      otherCourses: false
    },
    {
      feature: "Integrated prep platform",
      codingNinjas: true,
      freeResources: false,
      otherCourses: false
    },
    {
      feature: "Profiles highlighted on Naukri",
      codingNinjas: true,
      freeResources: false,
      otherCourses: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Coding Ninjas advantage</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why thousands choose us over other platforms
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-6 font-semibold text-lg">Features</th>
                    <th className="text-center p-6 font-semibold text-lg">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">CN</span>
                        </div>
                        <span>Coding Ninjas</span>
                      </div>
                    </th>
                    <th className="text-center p-6 font-semibold text-lg text-muted-foreground">Free resources</th>
                    <th className="text-center p-6 font-semibold text-lg text-muted-foreground">Other courses</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="p-6 font-medium">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.codingNinjas ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-600 mx-auto" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.freeResources ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-600 mx-auto" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.otherCourses ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-600 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Your dream role, faster and with confidence!</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Get the career you deserve with our comprehensive training and placement support
              </p>
              <EnhancedButton 
                variant="gradient"
                onClick={() => handleClick(async () => {
                  await new Promise(resolve => setTimeout(resolve, 800));
                  navigate('/offerings');
                })}
              >
                Get Started
              </EnhancedButton>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-500">Others</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Average role, under-confident
              </p>
              <EnhancedButton variant="outline" className="border-gray-300 text-gray-500" disabled>
                Limited Options
              </EnhancedButton>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <EnhancedButton 
            size="lg"
            variant="glow"
            loading={isExploreLoading}
            icon={<TrendingUp className="w-5 h-5" />}
            iconPosition="right"
            onClick={() => handleClick(async () => {
              // Simulate loading delay
              await new Promise(resolve => setTimeout(resolve, 800));
              // Navigate to Offerings page
              navigate('/offerings');
            })}
            className="px-8 py-6 text-lg font-semibold rounded-xl group"
          >
            Explore offerings
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;
