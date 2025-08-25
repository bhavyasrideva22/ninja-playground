import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Download, 
  Mail, 
  Calendar,
  Users,
  Clock,
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Trophy,
  Shield,
  Gift,
  Zap,
  Phone
} from "lucide-react";
import { useAdvancedScrollAnimation } from "@/hooks/useAdvancedScrollAnimation";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId');

  // Scroll animations
  const { ref: heroRef, animationClasses: heroClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 100
  });

  // Mock course data - in real app, this would come from API
  const courseData = {
    id: courseId || '1',
    title: "Full Stack Web Development Job Bootcamp with GenAI",
    duration: "6 months",
    startDate: "15th January 2024",
    enrollmentId: "CN2024001",
    price: "₹99,999"
  };

  const nextSteps = [
    {
      icon: Mail,
      title: "Welcome Email",
      description: "You'll receive a welcome email with login credentials within 24 hours",
      time: "Within 24 hours"
    },
    {
      icon: Calendar,
      title: "Orientation Session",
      description: "Join our orientation session to understand the course structure",
      time: "2 days before start"
    },
    {
      icon: Play,
      title: "Course Access",
      description: "Get access to all course materials and live sessions",
      time: "Course start date"
    },
    {
      icon: Users,
      title: "Mentor Assignment",
      description: "Your personal mentor will be assigned and introduced",
      time: "Week 1"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Job Guarantee",
      description: "100% placement assistance with job guarantee"
    },
    {
      icon: Trophy,
      title: "Certificate",
      description: "Industry-recognized certificate upon completion"
    },
    {
      icon: Gift,
      title: "Lifetime Access",
      description: "Access to course content and updates forever"
    },
    {
      icon: Zap,
      title: "1:1 Mentorship",
      description: "Personal mentorship sessions throughout the course"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Success Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100" ref={heroRef}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`${heroClasses}`}>
            {/* Success Icon */}
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              Payment Successful
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Welcome to Coding Ninjas!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your enrollment has been confirmed. You're now part of our community of successful learners.
            </p>

            {/* Enrollment Details */}
            <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Enrollment ID:</span>
                    <span className="font-semibold text-primary">{courseData.enrollmentId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Course:</span>
                    <span className="font-semibold text-right">{courseData.title}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-semibold text-green-600">{courseData.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Start Date:</span>
                    <span className="font-semibold">{courseData.startDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What's Next?</h2>
            <p className="text-xl text-muted-foreground">
              Here's what you can expect in the coming days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {step.time}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Benefits</h2>
            <p className="text-xl text-muted-foreground">
              Everything you get with your enrollment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton
              size="lg"
              variant="gradient"
              icon={<Download className="w-5 h-5" />}
              className="group"
            >
              Download Course Brochure
            </EnhancedButton>
            
            <EnhancedButton
              size="lg"
              variant="outline"
              icon={<Mail className="w-5 h-5" />}
              className="group"
            >
              Contact Support
            </EnhancedButton>
          </div>

          <div className="mt-8">
            <Link to="/">
              <EnhancedButton
                variant="ghost"
                icon={<ArrowRight className="w-4 h-4" />}
                className="text-primary hover:text-primary-hover"
              >
                Back to Homepage
              </EnhancedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you with any questions about your enrollment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Email Support</h4>
                <p className="text-sm text-muted-foreground">support@codingninjas.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Phone Support</h4>
                <p className="text-sm text-muted-foreground">+91 1800-123-4567</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Support Hours</h4>
                <p className="text-sm text-muted-foreground">9 AM - 9 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentSuccess;
