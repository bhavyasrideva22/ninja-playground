import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Users, Calendar, ExternalLink } from "lucide-react";
import { useNavigationAction } from "@/hooks/useButtonInteraction";
import { useNavigate } from "react-router-dom";

const IndustryExpertSection = () => {
  const navigate = useNavigate();

  // Button interactions
  const { isLoading: isWatchSessionsLoading, handleClick: handleWatchSessions } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Redirecting to sessions...'
  });

  const { isLoading: isExploreEventsLoading, handleClick: handleExploreEvents } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Redirecting to events...'
  });
  const expertSessions = [
    {
      id: 1,
      type: "Industry Expert Session",
      title: "Fireside Chat",
      subtitle: "Tech Talk",
      description: "Learn from CXOs, founders & more",
      subDescription: "Exclusive Insights from industry leaders",
      image: "/placeholder.svg"
    }
  ];

  const speakers = [
    {
      id: 1,
      name: "Ahmad",
      role: "Founder & CEO",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Anand",
      role: "Co-Founder",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Paul",
      role: "Founder",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Amit",
      role: "Director of Analytics",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Shivram",
      role: "Head of Analytics",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "James",
      role: "Performance Analyst",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      name: "Shalini",
      role: "Software Manager",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      name: "Priyank",
      role: "Product Lead",
      image: "/placeholder.svg"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Hackathons",
      description: "Hands on workshops",
      subDescription: "Learn latest tools, make open source contributions and more!",
      additional: "Partner events with clubs from IITs, IIMs"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Industry Expert Sessions */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Expert Sessions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with industry leaders and gain exclusive insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {expertSessions.map((session) => (
                <Card key={session.id} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {session.type}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-1">{session.title}</h3>
                        <p className="text-lg text-primary font-semibold">{session.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-4">{session.description}</p>
                    <p className="text-muted-foreground mb-6">{session.subDescription}</p>
                    
                    <Button 
                      className="bg-primary hover:bg-primary-hover text-primary-foreground"
                      onClick={() => handleWatchSessions(async () => {
                        await new Promise(resolve => setTimeout(resolve, 800));
                        alert('Watch Sessions functionality would be implemented here. Redirecting to sessions page...');
                      })}
                      disabled={isWatchSessionsLoading}
                    >
                      {isWatchSessionsLoading ? 'Loading...' : 'Watch Sessions'}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Content - Speakers Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Featured Speakers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {speakers.map((speaker) => (
                  <div key={speaker.id} className="text-center group">
                    <Avatar className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <AvatarImage src={speaker.image} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold text-sm mb-1">{speaker.name}</h4>
                    <p className="text-xs text-muted-foreground">{speaker.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Community Events</h3>
              {events.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{event.title}</h4>
                        <p className="text-primary font-semibold">{event.description}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{event.subDescription}</p>
                    <p className="text-sm text-muted-foreground">{event.additional}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Join Our Community</h4>
                <p className="text-muted-foreground mb-6">
                  Participate in hackathons, workshops, and networking events with industry experts
                </p>
                <Button 
                  className="bg-primary hover:bg-primary-hover text-primary-foreground"
                  onClick={() => handleExploreEvents(async () => {
                    await new Promise(resolve => setTimeout(resolve, 800));
                    alert('Explore Events functionality would be implemented here. Redirecting to events page...');
                  })}
                  disabled={isExploreEventsLoading}
                >
                  {isExploreEventsLoading ? 'Loading...' : 'Explore Events'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertSection;
