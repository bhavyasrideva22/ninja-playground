import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, BookOpen, Users } from "lucide-react";
import { useNavigationAction } from "@/hooks/useButtonInteraction";

const FacultySection = () => {
  // Button interactions
  const { isLoading: isLinkedInLoading, handleClick: handleLinkedIn } = useNavigationAction({
    loadingText: 'Opening...',
    successText: 'Opening LinkedIn profile...'
  });
  const faculty = [
    {
      id: 1,
      name: "Ankush Singla",
      role: "Co-Founder & Instructor",
      image: "/placeholder.svg",
      teaches: [
        "Basics of C++ with DSA",
        "Data Science & Machine Learning",
        "Competitive Programming"
      ],
      linkedin: "#"
    },
    {
      id: 2,
      name: "Parikh Jain",
      role: "Instructor & Founding Member at Coding Ninjas",
      image: "/placeholder.svg",
      teaches: [
        "Basics of Python with DSA",
        "Competitive Programming",
        "Product Companies Interview Prep"
      ],
      linkedin: "#"
    },
    {
      id: 3,
      name: "Nidhi Agarwal",
      role: "Founding member & Product Manager at Coding Ninjas",
      image: "/placeholder.svg",
      teaches: [
        "Basics of C++ with DSA",
        "Data Science & Machine Learning",
        "Data Analytics Course"
      ],
      linkedin: "#"
    },
    {
      id: 4,
      name: "Manisha Khattar",
      role: "Instructor & Founding Member at Coding Ninjas",
      image: "/placeholder.svg",
      teaches: [
        "Basics of Java with DSA",
        "Product Companies Interview Prep"
      ],
      linkedin: "#"
    },
    {
      id: 5,
      name: "Soham Mukherjee",
      role: "Instructor",
      image: "/placeholder.svg",
      teaches: [
        "Competitive Programming",
        "Basics of Python with DSA"
      ],
      linkedin: "#"
    },
    {
      id: 6,
      name: "Falak Chandni",
      role: "Instructor",
      image: "/placeholder.svg",
      teaches: [
        "MERN Stack",
        "Advanced Front End Web Development Course - React.js"
      ],
      linkedin: "#"
    },
    {
      id: 7,
      name: "Dheeraj Kumar",
      role: "Instructor",
      image: "/placeholder.svg",
      teaches: [
        "MERN Stack",
        "Advanced Front End Web Development Course - React.js"
      ],
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Faculty that brings out the best in you</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts and founders who have shaped the tech education landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {member.role}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary-hover p-0 h-auto"
                      onClick={() => handleLinkedIn(async () => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        window.open(member.linkedin, '_blank');
                      })}
                      disabled={isLinkedInLoading}
                    >
                      {isLinkedInLoading ? 'Opening...' : 'LinkedIn profile'}
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {/* Teaches Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-gray-700">Teaches</span>
                  </div>
                  <div className="space-y-2">
                    {member.teaches.map((course, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-600">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Stanford/IIT/MAANG</h3>
            <p className="text-muted-foreground">faculty</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Fastest 1:1</h3>
            <p className="text-muted-foreground">doubt support</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Placement</h3>
            <p className="text-muted-foreground">assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
