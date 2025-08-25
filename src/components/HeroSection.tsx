import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check } from "lucide-react";

const HeroSection = () => {
  const stats = [
    "128% average hike via our placement cell",
    "1.5 Lac+ learners cracked top tech companies", 
    "1,400+ alumni in MAANG & 103 unicorn startups"
  ];

  const experiences = [
    "Working Professional - Technical Roles",
    "Working Professional - Non Technical",
    "College Student - Final Year",
    "College Student - 1st to Pre-final Year",
    "Others"
  ];

  return (
    <section className="bg-hero-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hero-bg via-hero-bg to-gray-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="text-hero-text space-y-8">
          <div className="space-y-4">
            <p className="text-stats-accent font-medium">Restricted by opportunities?</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Get the tech career you deserve. <span className="text-primary">Faster.</span>
            </h1>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-stats-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-gray-300">{stat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-form-bg rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Let's find the right course for you</h2>
          
          <div className="space-y-6">
            {/* Experience Selection */}
            <div>
              <Label className="text-base font-medium mb-4 block">Experience</Label>
              <RadioGroup defaultValue="" className="space-y-3">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <RadioGroupItem value={exp} id={exp} />
                    <Label htmlFor={exp} className="text-sm cursor-pointer">{exp}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Topic Selection */}
            <div>
              <Label className="text-base font-medium mb-2 block">Select topic of interest</Label>
              <Select>
                <SelectTrigger className="bg-form-input border-form-border">
                  <SelectValue placeholder="Select your options/choices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-dev">Full Stack Web Development</SelectItem>
                  <SelectItem value="data-science">Data Science</SelectItem>
                  <SelectItem value="machine-learning">Machine Learning</SelectItem>
                  <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium mb-2 block">Name</Label>
                <Input placeholder="Enter name" className="bg-form-input border-form-border" />
              </div>
              
              <div>
                <Label className="text-base font-medium mb-2 block">Phone Number</Label>
                <Input placeholder="Enter phone number" className="bg-form-input border-form-border" />
              </div>
              
              <div>
                <Label className="text-base font-medium mb-2 block">Email</Label>
                <Input placeholder="Enter email" type="email" className="bg-form-input border-form-border" />
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 text-lg font-semibold">
              Find your course
            </Button>

            {/* Terms */}
            <p className="text-xs text-muted-foreground text-center">
              I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. 
              I have read and agree to Privacy Policy & Terms of use
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;