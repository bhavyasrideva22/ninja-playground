import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Quote,
  Play,
  Calendar,
  MapPin,
  GraduationCap,
  Trophy,
  Award,
  Heart,
  Share2,
  ExternalLink,
  Filter,
  Search,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useAdvancedScrollAnimation, useStaggeredAnimation } from "@/hooks/useAdvancedScrollAnimation";
import { useNavigationAction } from "@/hooks/useButtonInteraction";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SuccessStories = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Button interactions
  const { isLoading: isStartJourneyLoading, handleClick: handleStartJourney } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Redirecting to courses...'
  });

  const { isLoading: isViewCoursesLoading, handleClick: handleViewCourses } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Redirecting to offerings...'
  });

  // Scroll animations
  const { ref: heroRef, animationClasses: heroClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 100
  });

  const { ref: statsRef, animatedItems: statsAnimated } = useStaggeredAnimation(
    [1, 2, 3, 4], // Four stats
    { animationType: 'scaleIn', staggerDelay: 200 }
  );

  const { ref: storiesRef, animatedItems: storiesAnimated } = useStaggeredAnimation(
    [1, 2, 3, 4, 5, 6], // Six success stories
    { animationType: 'slideUp', staggerDelay: 150 }
  );

  const categories = [
    { id: 'all', label: 'All Stories', count: 150 },
    { id: 'web-development', label: 'Web Development', count: 45 },
    { id: 'data-science', label: 'Data Science', count: 38 },
    { id: 'machine-learning', label: 'Machine Learning', count: 32 },
    { id: 'mobile-development', label: 'Mobile Development', count: 25 },
    { id: 'system-design', label: 'System Design', count: 10 }
  ];

  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Students Placed",
      description: "Successfully placed in top companies"
    },
    {
      icon: DollarSign,
      number: "₹12 LPA",
      label: "Average Package",
      description: "Average salary of our graduates"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Placement Rate",
      description: "Students placed within 6 months"
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "Student Rating",
      description: "Average rating from our students"
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Software Engineer",
      company: "Google",
      package: "₹45 LPA",
      course: "Full Stack Web Development",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      story: "Coding Ninjas transformed my career completely. From a non-tech background to landing a role at Google - it's been an incredible journey. The mentorship and hands-on projects were game-changers.",
      achievements: ["Google", "₹45 LPA", "6 months"],
      category: "web-development",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Data Scientist",
      company: "Amazon",
      package: "₹38 LPA",
      course: "Data Science & Machine Learning",
      duration: "8 months",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: "The comprehensive curriculum and real-world projects helped me understand complex ML concepts. The placement support team was exceptional in preparing me for interviews.",
      achievements: ["Amazon", "₹38 LPA", "8 months"],
      category: "data-science",
      rating: 5,
      featured: true
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Machine Learning Engineer",
      company: "Microsoft",
      package: "₹42 LPA",
      course: "Advanced Machine Learning",
      duration: "7 months",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: "The advanced ML course was perfectly structured. The mentors were industry experts who provided invaluable insights. I'm now working on cutting-edge AI projects at Microsoft.",
      achievements: ["Microsoft", "₹42 LPA", "7 months"],
      category: "machine-learning",
      rating: 5,
      featured: false
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Android Developer",
      company: "Flipkart",
      package: "₹28 LPA",
      course: "Android App Development",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      story: "The Android development course was hands-on and practical. I built real apps during the course which helped me showcase my skills effectively during interviews.",
      achievements: ["Flipkart", "₹28 LPA", "4 months"],
      category: "mobile-development",
      rating: 5,
      featured: false
    },
    {
      id: 5,
      name: "Sneha Reddy",
      role: "Backend Engineer",
      company: "Netflix",
      package: "₹52 LPA",
      course: "Advanced Java Backend Development",
      duration: "5 months",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      story: "The system design and backend development skills I learned here were crucial for my Netflix interview. The mock interviews and resume preparation were top-notch.",
      achievements: ["Netflix", "₹52 LPA", "5 months"],
      category: "system-design",
      rating: 5,
      featured: true
    },
    {
      id: 6,
      name: "Arjun Mehta",
      role: "Full Stack Developer",
      company: "Uber",
      package: "₹35 LPA",
      course: "Full Stack Web Development",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      story: "From learning basics to building full-stack applications, the journey was incredible. The GenAI integration projects gave me an edge in the competitive market.",
      achievements: ["Uber", "₹35 LPA", "6 months"],
      category: "web-development",
      rating: 5,
      featured: false
    }
  ];

  const featuredTestimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      quote: "Coding Ninjas didn't just teach me coding - they transformed my entire career trajectory. The mentorship, real projects, and placement support were exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Data Scientist at Amazon",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      quote: "The comprehensive curriculum and industry-aligned projects helped me understand complex ML concepts. I'm now working on cutting-edge AI solutions.",
      rating: 5
    },
    {
      id: 3,
      name: "Sneha Reddy",
      role: "Backend Engineer at Netflix",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      quote: "The system design skills and interview preparation were game-changers. The mentors provided invaluable insights that helped me crack the Netflix interview.",
      rating: 5
    }
  ];

  const filteredStories = successStories.filter(story => 
    selectedCategory === 'all' || story.category === selectedCategory
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? featuredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/">
            <EnhancedButton
              variant="ghost"
              icon={<ArrowLeft className="w-4 h-4" />}
              className="text-gray-700 hover:text-primary"
            >
              Back to Home
            </EnhancedButton>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center ${heroClasses}`}>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              Success Stories
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Real Success Stories from Our Students
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how Coding Ninjas has transformed careers and helped thousands of students achieve their dreams in tech.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground">
              The results speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={statsRef}>
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className={`text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform ${
                  statsAnimated[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-muted-foreground text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear directly from our top achievers
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="max-w-4xl mx-auto">
                <Card className="p-8 md:p-12">
                  <CardContent className="text-center">
                    <div className="flex justify-center mb-6">
                      <img 
                        src={featuredTestimonials[currentTestimonial].image}
                        alt={featuredTestimonials[currentTestimonial].name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                      />
                    </div>
                    
                    <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                    
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                      "{featuredTestimonials[currentTestimonial].quote}"
                    </blockquote>
                    
                    <div className="mb-4">
                      <div className="flex justify-center gap-1 mb-2">
                        {[...Array(featuredTestimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-lg text-primary">
                        {featuredTestimonials[currentTestimonial].name}
                      </div>
                      <div className="text-muted-foreground">
                        {featuredTestimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
              <p className="text-muted-foreground">
                {filteredStories.length} stories found
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={storiesRef}>
            {filteredStories.map((story, index) => (
              <Card 
                key={story.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform ${
                  storiesAnimated[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {story.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{story.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    {story.featured && (
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Story */}
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{story.story}"
                  </blockquote>

                  {/* Course Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Course:</span>
                      <span className="font-medium">{story.course}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{story.duration}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm text-gray-600">Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Company & Package */}
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold text-primary">{story.company}</div>
                      <div className="text-sm text-muted-foreground">{story.package}</div>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No stories found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who transformed their careers with Coding Ninjas
          </p>
          
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <EnhancedButton
               size="lg"
               variant="gradient"
               loading={isStartJourneyLoading}
               icon={<Play className="w-5 h-5" />}
               onClick={() => handleStartJourney(async () => {
                 await new Promise(resolve => setTimeout(resolve, 800));
                 navigate('/offerings');
               })}
               className="group"
             >
               Start Your Journey
               <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
             </EnhancedButton>
             
             <EnhancedButton
               size="lg"
               variant="outline"
               loading={isViewCoursesLoading}
               icon={<Heart className="w-5 h-5" />}
               onClick={() => handleViewCourses(async () => {
                 await new Promise(resolve => setTimeout(resolve, 800));
                 navigate('/offerings');
               })}
               className="group"
             >
               View All Courses
             </EnhancedButton>
           </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
