import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Trophy } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development Job Bootcamp with GenAI",
      description: "Job ready AI-infused curriculum",
      rating: 4.8,
      students: "15,000+",
      duration: "6 months",
      tag: "Recommended",
      price: "₹99,999",
      originalPrice: "₹1,49,999",
      features: ["Live classes", "1:1 mentorship", "Job assistance", "GenAI integration"]
    },
    {
      id: 2, 
      title: "Data Science & Machine Learning Complete Course",
      description: "Master Python, ML algorithms, and AI fundamentals",
      rating: 4.7,
      students: "12,000+", 
      duration: "8 months",
      tag: "Popular",
      price: "₹89,999",
      originalPrice: "₹1,29,999",
      features: ["Real projects", "Industry mentors", "Placement support", "Certificate"]
    },
    {
      id: 3,
      title: "Advanced Java Backend Development",
      description: "Spring Boot, Microservices, and System Design",
      rating: 4.6,
      students: "8,500+",
      duration: "5 months", 
      tag: "New Launch",
      price: "₹79,999",
      originalPrice: "₹1,19,999",
      features: ["System design", "AWS deployment", "Live projects", "Interview prep"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Courses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our industry-leading courses designed by experts and trusted by 1.5+ million learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                {/* Tag */}
                <div className="mb-4">
                  <Badge 
                    variant={course.tag === "Recommended" ? "default" : "secondary"}
                    className={course.tag === "Recommended" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {course.tag}
                  </Badge>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm font-medium">Job Guarantee</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;