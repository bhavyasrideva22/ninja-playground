import { Card, CardContent } from "@/components/ui/card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { TrendingUp, Users, Award, Building, ArrowRight, ExternalLink } from "lucide-react";
import { useAdvancedScrollAnimation, useStaggeredAnimation } from "@/hooks/useAdvancedScrollAnimation";
import { useNavigationAction } from "@/hooks/useButtonInteraction";
import { useNavigate } from "react-router-dom";

const StatsSection = () => {
  const navigate = useNavigate();
  
  // Button interactions
  const { isLoading: isLearnMoreLoading, handleClick } = useNavigationAction({
    loadingText: 'Loading...',
    successText: 'Redirecting to About Us...'
  });

  // Scroll animations
  const { ref: titleRef, animationClasses: titleClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 100
  });

  const { ref: statsRef, animatedItems: statsAnimated } = useStaggeredAnimation(
    [1, 2, 3, 4], // Four stats cards
    { animationType: 'scaleIn', staggerDelay: 200 }
  );

  const { ref: companiesRef, animationClasses: companiesClasses } = useAdvancedScrollAnimation({
    animationType: 'fadeIn',
    delay: 600
  });
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
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className={`text-4xl font-bold mb-4 ${titleClasses}`}>Trusted by Industry Leaders</h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${titleClasses}`}>
            Our proven track record speaks for itself. Join thousands of successful professionals who transformed their careers with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={statsRef}>
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform ${
                statsAnimated[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary-hover transition-colors">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos Section */}
        <div className="mt-20" ref={companiesRef}>
          <h3 className={`text-2xl font-bold text-center mb-12 ${companiesClasses}`}>Our Alumni Work At</h3>
          <div className={`flex flex-wrap items-center justify-center gap-12 opacity-60 ${companiesClasses}`}>
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple', 'Flipkart', 'Zomato'].map((company) => (
              <div 
                key={company} 
                className="text-2xl font-bold text-gray-600 hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer transform"
              >
                {company}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <EnhancedButton
              size="lg"
              variant="gradient"
              loading={isLearnMoreLoading}
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
                                      onClick={() => handleClick(async () => {
                          // Simulate loading delay
                          await new Promise(resolve => setTimeout(resolve, 800));
                          // Navigate to Success Stories page
                          navigate('/success-stories');
                        })}
              className="group"
            >
              Learn More About Our Success Stories
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </EnhancedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;