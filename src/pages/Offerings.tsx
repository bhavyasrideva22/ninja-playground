import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ExternalLink,
  ArrowRight,
  Star,
  Clock,
  Users,
  Trophy,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Building,
  Code,
  Database,
  BarChart3,
  Shield,
  Brain,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Zap,
  Target,
  TrendingUp,
  Heart,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Search,
  Filter,
  Play,
  Download
} from "lucide-react";
import { useAdvancedScrollAnimation, useStaggeredAnimation } from "@/hooks/useAdvancedScrollAnimation";
import { useNavigationAction } from "@/hooks/useButtonInteraction";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Offerings = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Button interactions
  const { isLoading: isEnrollLoading, handleClick } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Redirecting to payment...'
  });

  // Scroll animations
  const { ref: heroRef, animationClasses: heroClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 100
  });

  const { ref: coursesRef, animatedItems: coursesAnimated } = useStaggeredAnimation(
    [1, 2, 3, 4, 5, 6], // Six course cards
    { animationType: 'scaleIn', staggerDelay: 200 }
  );

  const { ref: programsRef, animatedItems: programsAnimated } = useStaggeredAnimation(
    [1, 2, 3], // Three program categories
    { animationType: 'slideUp', staggerDelay: 300 }
  );

  const categories = [
    { id: 'all', label: 'All Courses', icon: BookOpen },
    { id: 'web-development', label: 'Web Development', icon: Code },
    { id: 'data-science', label: 'Data Science', icon: Database },
    { id: 'machine-learning', label: 'Machine Learning', icon: Brain },
    { id: 'mobile-development', label: 'Mobile Development', icon: Smartphone },
    { id: 'system-design', label: 'System Design', icon: Server }
  ];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development Job Bootcamp with GenAI",
      description: "Master frontend, backend, and AI integration for modern web applications",
      category: "web-development",
      duration: "6 months",
      students: "15,000+",
      rating: 4.8,
      price: "₹99,999",
      originalPrice: "₹1,49,999",
      features: ["Live classes", "1:1 mentorship", "Job assistance", "GenAI integration", "Real projects"],
      tag: "Recommended",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning Complete Course",
      description: "Comprehensive course covering Python, ML algorithms, and AI fundamentals",
      category: "data-science",
      duration: "8 months",
      students: "12,000+",
      rating: 4.7,
      price: "₹89,999",
      originalPrice: "₹1,29,999",
      features: ["Real projects", "Industry mentors", "Placement support", "Certificate", "Interview prep"],
      tag: "Popular",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Advanced Java Backend Development",
      description: "Master Spring Boot, Microservices, and System Design",
      category: "system-design",
      duration: "5 months",
      students: "8,500+",
      rating: 4.6,
      price: "₹79,999",
      originalPrice: "₹1,19,999",
      features: ["System design", "AWS deployment", "Live projects", "Interview prep", "Mock interviews"],
      tag: "New Launch",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Android App Development with Kotlin",
      description: "Build modern Android apps with Kotlin and Jetpack Compose",
      category: "mobile-development",
      duration: "4 months",
      students: "6,200+",
      rating: 4.5,
      price: "₹69,999",
      originalPrice: "₹99,999",
      features: ["Kotlin programming", "Jetpack Compose", "Play Store deployment", "UI/UX design", "API integration"],
      tag: "Trending",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Advanced Machine Learning with Deep Learning",
      description: "Master neural networks, computer vision, and NLP",
      category: "machine-learning",
      duration: "7 months",
      students: "4,800+",
      rating: 4.9,
      price: "₹1,19,999",
      originalPrice: "₹1,69,999",
      features: ["Deep Learning", "Computer Vision", "NLP", "TensorFlow", "Research projects"],
      tag: "Premium",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Cybersecurity & Ethical Hacking",
      description: "Learn cybersecurity, penetration testing, and security analysis",
      category: "system-design",
      duration: "6 months",
      students: "3,500+",
      rating: 4.7,
      price: "₹89,999",
      originalPrice: "₹1,29,999",
      features: ["Penetration testing", "Security analysis", "Certification", "Live labs", "Industry projects"],
      tag: "High Demand",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
    }
  ];

  const programs = [
    {
      id: 1,
      title: "Job Bootcamp",
      description: "Intensive training programs designed to get you job-ready",
      icon: Target,
      courses: [
        "Full Stack Web Development with GenAI",
        "Data Science & Machine Learning",
        "Advanced Java Backend Development"
      ],
      features: ["Job guarantee", "1:1 mentorship", "Interview preparation", "Resume building"]
    },
    {
      id: 2,
      title: "IIT Certifications",
      description: "Premium certifications from top IITs in collaboration with Coding Ninjas",
      icon: GraduationCap,
      courses: [
        "PG Certification in Data Analytics with GenAI - IIT Guwahati",
        "PG Certification in Data Science with GenAI - IIT Guwahati",
        "Advanced Certification in GenAI - IIT Madras"
      ],
      features: ["IIT certification", "Industry recognition", "Advanced curriculum", "Expert faculty"]
    },
    {
      id: 3,
      title: "New Launches",
      description: "Cutting-edge courses in emerging technologies",
      icon: Zap,
      courses: [
        "Advanced Certification in GenAI & Multi Agent Systems",
        "Advanced Certification in GenAI for Non-tech Professionals",
        "Advanced Certification in Data Science with GenAI"
      ],
      features: ["Latest technology", "Industry-aligned", "Future-ready skills", "Innovation focus"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Our Offerings
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Transform Your Career with Our Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of industry-leading courses designed by experts and trusted by 1.5+ million learners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
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
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Program Categories</h2>
            <p className="text-xl text-muted-foreground">
              Choose the program that best fits your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" ref={programsRef}>
            {programs.map((program, index) => (
              <Card 
                key={program.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform ${
                  programsAnimated[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-4">{program.title}</h3>
                  <p className="text-muted-foreground text-center mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm text-gray-600">Featured Courses:</h4>
                    {program.courses.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-600">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Courses</h2>
            <p className="text-xl text-muted-foreground">
              {filteredCourses.length} courses found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={coursesRef}>
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform ${
                  coursesAnimated[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge 
                    variant={course.tag === "Recommended" ? "default" : "secondary"}
                    className={`absolute top-4 left-4 ${
                      course.tag === "Recommended" ? "bg-primary text-primary-foreground" : ""
                    }`}
                  >
                    {course.tag}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

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
                      {course.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {course.features.length > 3 && (
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          +{course.features.length - 3} more
                        </span>
                      )}
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
                  <EnhancedButton 
                    variant="gradient"
                    loading={isEnrollLoading}
                    icon={<ExternalLink className="w-4 h-4" />}
                    onClick={() => handleClick(async () => {
                      // Simulate loading delay
                      await new Promise(resolve => setTimeout(resolve, 800));
                      // Navigate to payment page with course ID
                      navigate(`/payment?courseId=${course.id}`);
                    })}
                    className="w-full group"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </EnhancedButton>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who transformed their careers with Coding Ninjas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <EnhancedButton
               size="lg"
               variant="gradient"
               loading={isEnrollLoading}
               icon={<Play className="w-5 h-5" />}
               onClick={() => handleClick(async () => {
                 await new Promise(resolve => setTimeout(resolve, 800));
                 navigate('/offerings');
               })}
               className="group"
             >
               Browse All Courses
               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
             </EnhancedButton>
            
            <EnhancedButton
              size="lg"
              variant="outline"
              icon={<Download className="w-5 h-5" />}
              className="group"
            >
              Download Brochure
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;
