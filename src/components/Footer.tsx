import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Courses",
      links: ["Full Stack Development", "Data Science", "Machine Learning", "Android Development", "System Design", "Competitive Programming"]
    },
    {
      title: "Programs",
      links: ["Job Bootcamp", "IIT Certifications", "Placement Assistance", "1:1 Mentorship", "Mock Interviews", "Resume Building"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Contact Us", "Blog", "Success Stories"]
    },
    {
      title: "Support",
      links: ["Help Center", "Privacy Policy", "Terms of Service", "Refund Policy", "Student Support", "Technical Support"]
    }
  ];

  return (
    <footer className="bg-hero-bg text-hero-text">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="bg-primary/10 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest Courses</h3>
            <p className="text-gray-300 mb-8">Get notified about new courses, career tips, and exclusive offers</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white text-gray-900 border-none flex-1"
              />
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CN</span>
              </div>
              <span className="text-2xl font-bold">codingninjas</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering millions of learners to achieve their tech career goals through industry-relevant courses and expert mentorship.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <div key={index} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 sm:mb-0">
            © 2024 Coding Ninjas. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;