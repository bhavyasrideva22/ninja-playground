import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Award, 
  Building, 
  Star, 
  CheckCircle, 
  ArrowLeft, 
  ExternalLink,
  GraduationCap,
  Target,
  Globe,
  Heart,
  Zap,
  Shield,
  BookOpen,
  Clock,
  Trophy,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { useAdvancedScrollAnimation, useStaggeredAnimation } from "@/hooks/useAdvancedScrollAnimation";
import { useNavigationAction } from "@/hooks/useButtonInteraction";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Button interactions
  const { isLoading: isContactLoading, handleNavigation } = useNavigationAction({
    loadingText: 'Redirecting...',
    successText: 'Opening contact form...'
  });

  // Scroll animations
  const { ref: heroRef, animationClasses: heroClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 100
  });

  const { ref: statsRef, animatedItems: statsAnimated } = useStaggeredAnimation(
    [1, 2, 3, 4], // Four stats items
    { animationType: 'scaleIn', staggerDelay: 200 }
  );

  const { ref: storyRef, animatedItems: storyAnimated } = useStaggeredAnimation(
    [1, 2, 3], // Three success stories
    { animationType: 'slideUp', staggerDelay: 300 }
  );

  const { ref: teamRef, animatedItems: teamAnimated } = useStaggeredAnimation(
    [1, 2, 3, 4], // Four team members
    { animationType: 'slideLeft', staggerDelay: 200 }
  );

  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      story: "From a non-tech background to landing a role at Google, Coding Ninjas transformed my career completely. The structured curriculum and mentorship made all the difference.",
      salary: "₹45 LPA",
      duration: "8 months"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Data Scientist",
      company: "Amazon",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: "The Data Science course at Coding Ninjas gave me the perfect foundation. I went from knowing nothing about ML to working on cutting-edge AI projects.",
      salary: "₹38 LPA",
      duration: "10 months"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Full Stack Developer",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: "The job bootcamp was exactly what I needed. The live projects and interview preparation helped me crack multiple offers from top tech companies.",
      salary: "₹42 LPA",
      duration: "6 months"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Ankush Singla",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "IIT Delhi alumnus with 10+ years of experience in edtech and entrepreneurship.",
      linkedin: "https://linkedin.com/in/ankushsingla"
    },
    {
      id: 2,
      name: "Kushal Goel",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      bio: "IIT Delhi graduate with expertise in building scalable educational platforms.",
      linkedin: "https://linkedin.com/in/kushalgoel"
    },
    {
      id: 3,
      name: "Dr. Aditi Sharma",
      role: "Head of Curriculum",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "PhD in Computer Science with 15+ years of teaching and industry experience.",
      linkedin: "https://linkedin.com/in/aditisharma"
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      role: "Head of Placements",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Former HR leader at top tech companies with deep industry connections.",
      linkedin: "https://linkedin.com/in/rajeshkumar"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "1.5M+",
      label: "Learners Worldwide",
      description: "Students from 50+ countries"
    },
    {
      icon: Award,
      number: "1,400+",
      label: "MAANG Alumni",
      description: "Working at top tech companies"
    },
    {
      icon: Building,
      number: "103",
      label: "Unicorn Startups",
      description: "Where our alumni work"
    },
    {
      icon: TrendingUp,
      number: "128%",
      label: "Average Salary Hike",
      description: "Through our placement cell"
    }
  ];

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
              About Coding Ninjas
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Empowering Dreams, Building Careers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize quality tech education and help millions of learners achieve their career goals. 
              Since 2016, we've been transforming lives through industry-relevant courses and expert mentorship.
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
              Real results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={statsRef}>
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.label}
                className={`text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform ${
                  statsAnimated[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <achievement.icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary-hover transition-colors">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real people, real transformations, real success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={storyRef}>
            {successStories.map((story, index) => (
              <Card 
                key={story.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform ${
                  storyAnimated[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{story.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic">"{story.story}"</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-green-600">
                      <Trophy className="w-4 h-4" />
                      <span className="font-semibold">{story.salary}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{story.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground">
              The visionaries behind Coding Ninjas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={teamRef}>
            {teamMembers.map((member, index) => (
              <Card 
                key={member.id}
                className={`text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform ${
                  teamAnimated[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                  />
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Student First",
                description: "Every decision we make is centered around student success and learning outcomes."
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for excellence in curriculum, teaching, and student support."
              },
              {
                icon: Globe,
                title: "Innovation",
                description: "Constantly evolving our methods and technology to stay ahead of industry trends."
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "Building trust through transparency, honesty, and ethical practices."
              },
              {
                icon: Zap,
                title: "Impact",
                description: "Creating meaningful change in students' lives and careers."
              },
              {
                icon: BookOpen,
                title: "Lifelong Learning",
                description: "Fostering a culture of continuous learning and growth."
              }
            ].map((value, index) => (
              <Card key={value.title} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your journey with us?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Gurgaon, Haryana, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 1800-123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@codingninjas.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: Facebook, url: 'https://facebook.com/codingninjas' },
                    { Icon: Twitter, url: 'https://twitter.com/codingninjas' },
                    { Icon: Instagram, url: 'https://instagram.com/codingninjas' },
                    { Icon: Linkedin, url: 'https://linkedin.com/company/codingninjas' },
                    { Icon: Youtube, url: 'https://youtube.com/codingninjas' }
                  ].map(({ Icon, url }) => (
                    <a 
                      key={url}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <EnhancedButton
                size="lg"
                variant="gradient"
                loading={isContactLoading}
                icon={<ExternalLink className="w-5 h-5" />}
                onClick={() => handleNavigation('demo')}
                className="group"
              >
                Schedule a Free Consultation
                <ArrowLeft className="ml-2 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </EnhancedButton>
              
              <p className="text-sm text-muted-foreground mt-4">
                Get personalized guidance on choosing the right course for your career goals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
