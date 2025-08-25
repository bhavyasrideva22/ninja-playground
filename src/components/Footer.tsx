import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Send } from "lucide-react";
import { useButtonInteraction } from "@/hooks/useButtonInteraction";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState('');

  // Button interactions
  const { isLoading: isSubscribeLoading, handleClick: handleSubscribe } = useButtonInteraction({
    loadingText: 'Subscribing...',
    successText: 'Subscribed successfully!',
    errorText: 'Please enter a valid email'
  });

  const footerSections = [
    {
      title: "Courses",
      links: [
        { text: "All Courses", href: "/offerings" },
        { text: "Full Stack Development", href: "/offerings" },
        { text: "Data Science", href: "/offerings" },
        { text: "Machine Learning", href: "/offerings" },
        { text: "Android Development", href: "/offerings" },
        { text: "System Design", href: "/offerings" }
      ]
    },
    {
      title: "Programs",
      links: [
        { text: "Job Bootcamp", href: "/offerings" },
        { text: "IIT Certifications", href: "/offerings" },
        { text: "Placement Assistance", href: "/about" },
        { text: "1:1 Mentorship", href: "/about" },
        { text: "Mock Interviews", href: "/about" },
        { text: "Resume Building", href: "/about" }
      ]
    },
    {
                        title: "Company",
                  links: [
                    { text: "About Us", href: "/about" },
                    { text: "Our Team", href: "#" },
                    { text: "Careers", href: "#" },
                    { text: "Contact Us", href: "#" },
                    { text: "Blog", href: "#" },
                    { text: "Success Stories", href: "/success-stories" }
                  ]
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "/about" },
        { text: "Privacy Policy", href: "/about" },
        { text: "Terms of Service", href: "/about" },
        { text: "Refund Policy", href: "/about" },
        { text: "Student Support", href: "/about" },
        { text: "Technical Support", href: "/about" }
      ]
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-900 border-none flex-1"
              />
              <EnhancedButton 
                variant="gradient"
                loading={isSubscribeLoading}
                icon={<Send className="w-4 h-4" />}
                onClick={() => handleSubscribe(async () => {
                  if (!email || !email.includes('@')) {
                    throw new Error('Please enter a valid email');
                  }
                  // Simulate API call
                  await new Promise(resolve => setTimeout(resolve, 1000));
                  console.log('Subscribed:', email);
                  setEmail('');
                })}
                className="px-8"
              >
                Subscribe
              </EnhancedButton>
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
              {[
                { Icon: Facebook, url: 'https://facebook.com/codingninjas' },
                { Icon: Twitter, url: 'https://twitter.com/codingninjas' },
                { Icon: Instagram, url: 'https://instagram.com/codingninjas' },
                { Icon: Linkedin, url: 'https://linkedin.com/company/codingninjas' },
                { Icon: Youtube, url: 'https://youtube.com/codingninjas' }
              ].map(({ Icon, url }, index) => (
                <div 
                  key={index} 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer transform"
                  onClick={() => window.open(url, '_blank')}
                  title={`Follow us on ${Icon.name}`}
                >
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
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        {link.text}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        {link.text}
                      </a>
                    )}
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
            <a href="/about" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/about" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/about" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;