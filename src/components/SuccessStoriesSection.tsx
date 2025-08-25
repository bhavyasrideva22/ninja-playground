import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Star } from "lucide-react";
import { useNavigationAction } from "@/hooks/useButtonInteraction";
import { useNavigate } from "react-router-dom";

const SuccessStoriesSection = () => {
  const navigate = useNavigate();

  // Button interactions
  const { isLoading: isReadStoriesLoading, handleClick: handleReadStories } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Redirecting to success stories...'
  });

  const { isLoading: isDownloadReportLoading, handleClick: handleDownloadReport } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Downloading report...'
  });
  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      story: "Non tech to tech",
      image: "/placeholder.svg",
      testimonial: "Coding Ninjas helped me transition from a non-technical background to a software engineer at Google. The structured curriculum and mentorship were invaluable.",
      salary: "₹45 LPA",
      hike: "300%"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Senior Developer",
      company: "Microsoft",
      story: "Service to product",
      image: "/placeholder.svg",
      testimonial: "From service company to product company - Coding Ninjas made this dream transition possible with their comprehensive training.",
      salary: "₹38 LPA",
      hike: "180%"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Data Scientist",
      company: "Amazon",
      story: "Tier 2/3 colleges",
      image: "/placeholder.svg",
      testimonial: "Coming from a tier-3 college, I never thought I'd work at Amazon. Coding Ninjas proved that dedication and right guidance can overcome any barrier.",
      salary: "₹42 LPA",
      hike: "250%"
    }
  ];

  const categories = [
    "Non tech to tech",
    "Service to product", 
    "Tier 2/3 colleges",
    "Job Bootcamp",
    "Upskilling Courses"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Stories from people like you</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real success stories from our alumni who transformed their careers with Coding Ninjas
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                index === 0 ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {successStories.map((story) => (
            <Card key={story.id} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                {/* Story Badge */}
                <Badge variant="secondary" className="mb-4 text-xs">
                  {story.story}
                </Badge>

                {/* Testimonial */}
                <p className="text-gray-700 mb-6 italic">
                  "{story.testimonial}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={story.image} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-muted-foreground">{story.role} at {story.company}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{story.salary}</p>
                    <p className="text-xs text-muted-foreground">Package</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{story.hike}</p>
                    <p className="text-xs text-muted-foreground">Salary Hike</p>
                  </div>
                </div>

                {/* Company Logo */}
                <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-gray-600">{story.company}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleReadStories(async () => {
              await new Promise(resolve => setTimeout(resolve, 800));
              navigate('/success-stories');
            })}
            disabled={isReadStoriesLoading}
          >
            {isReadStoriesLoading ? 'Loading...' : 'Read all success stories'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Download Report Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Download Placement Report</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get detailed insights into our placement statistics, salary trends, and company-wise breakdown of our successful alumni.
            </p>
            <Button 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8"
              onClick={() => handleDownloadReport(async () => {
                await new Promise(resolve => setTimeout(resolve, 800));
                alert('Download Report functionality would be implemented here. Starting download...');
              })}
              disabled={isDownloadReportLoading}
            >
              <Download className="mr-2 w-4 h-4" />
              {isDownloadReportLoading ? 'Downloading...' : 'Download Report'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
