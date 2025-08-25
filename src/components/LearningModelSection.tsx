import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Award, MessageCircle, Users, Star } from "lucide-react";

const LearningModelSection = () => {
  const learningStages = [
    {
      id: 1,
      title: "Learn",
      description: "Experience seamless learning with problem solving modules, leaderboard and awards.",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Excel",
      description: "Track your skill level and make meaningful progress for you to grow",
      icon: Target,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Standout",
      description: "Standout to recruiters, showcase ratings, get feedback and interview insights.",
      icon: Award,
      color: "bg-purple-500"
    }
  ];

  const supportFeatures = [
    {
      id: 1,
      title: "Always available when you get stuck",
      description: "Resolve doubts any time through chat, voice notes or calling.",
      icon: MessageCircle,
      stats: "500+ dedicated Teaching Assistants to resolve your doubts quickly",
      rating: "5/5 rating for 90% doubt resolutions"
    },
    {
      id: 2,
      title: "1:1 Mentorship sessions",
      description: "Personalised guidance to prepare you for your interview needs",
      icon: Users,
      features: [
        "Mock interview - Nail coding assessments and technical challenges",
        "Profile review - Get your profile & resume reviewed by industry leaders",
        "Project guidance - Career counselling with industry experts"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Learning Model */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            A 3-stage learning model to turn you into a Coding Ninja
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {learningStages.map((stage, index) => (
            <Card key={stage.id} className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Features */}
        <div className="space-y-16">
          {supportFeatures.map((feature) => (
            <div key={feature.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                
                {feature.stats && (
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-gray-900">{feature.stats}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{feature.rating}</span>
                    </div>
                  </div>
                )}

                {feature.features && (
                  <div className="space-y-4">
                    {feature.features.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Available 24/7</h4>
                  <p className="text-muted-foreground">
                    Get help whenever you need it. Our support team and mentors are always ready to assist you.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn by Doing Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Learn by doing</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Interesting projects to help you standout to recruiters
            </p>
            <div className="bg-primary/5 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-4">Your one stop destination to code, create & connect</h4>
              <p className="text-lg text-muted-foreground">
                Unlock learning, career opportunities & success from X to 10X
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModelSection;
