import { EnhancedButton } from "@/components/ui/enhanced-button";
import { ArrowRight, Users, TrendingUp, DollarSign, Target } from "lucide-react";
import { useNavigationAction } from "@/hooks/useButtonInteraction";
import { useNavigate } from "react-router-dom";

const AchievementsSection = () => {
  const navigate = useNavigate();
  
  // Button interactions
  const { isLoading: isExploreLoading, handleClick } = useNavigationAction({
    loadingText: 'Loading...',
    successText: 'Redirecting to offerings...'
  });
  const achievements = [
    {
      id: 1,
      value: "1.5 Lac+ learners",
      description: "cracked dream roles at top tech companies",
      icon: Users
    },
    {
      id: 2,
      value: "1,400 Alumni in MAANG",
      description: "& more in 103/111 Unicorns",
      icon: Target
    },
    {
      id: 3,
      value: "1 Cr+ highest CTC",
      description: "after completing the course",
      icon: DollarSign
    },
    {
      id: 4,
      value: "128% average hike",
      description: "via our placement cell",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">
            9 years of transforming tech careers
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 transform -translate-x-1/2"></div>

          {/* Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 w-4 h-4 bg-gray-400 rounded-full -translate-x-1/2 top-0"></div>
                
                {/* Achievement Content */}
                <div className="text-center pt-8">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-gray-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {achievement.value}
                  </h3>
                  <p className="text-gray-300 text-sm lg:text-base">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <EnhancedButton 
              size="lg" 
              variant="glow"
              loading={isExploreLoading}
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              onClick={() => handleClick(async () => {
                // Simulate loading delay
                await new Promise(resolve => setTimeout(resolve, 800));
                // Navigate to Offerings page
                navigate('/offerings');
              })}
              className="px-8 py-4 text-lg font-semibold group"
            >
              Explore offerings
            </EnhancedButton>
          </div>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h3 className="text-6xl lg:text-8xl font-bold text-white opacity-10 tracking-wider">
            WHY US
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
