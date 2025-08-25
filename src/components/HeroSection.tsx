import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, ArrowRight, Search } from "lucide-react";
import { useAdvancedScrollAnimation, useStaggeredAnimation } from "@/hooks/useAdvancedScrollAnimation";
import { useFormSubmission, useNavigationAction } from "@/hooks/useButtonInteraction";
import { useState } from "react";

const HeroSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    experience: 'working-technical',
    interest: '',
    name: '',
    phone: ''
  });

  // Button interactions
  const { isLoading: isFormLoading, handleFormSubmit } = useFormSubmission({
    loadingText: 'Submitting...',
    successText: 'Thank you! We\'ll contact you soon.',
    errorText: 'Please check your details and try again.'
  });

  const { isLoading: isCourseLoading, handleNavigation } = useNavigationAction({
    loadingText: 'Finding courses...',
    successText: 'Redirecting to course finder...'
  });

  // Scroll animations for different sections
  const { ref: headlineRef, animationClasses: headlineClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 200
  });

  const { ref: statsRef, animatedItems: statsAnimated } = useStaggeredAnimation(
    [1, 2, 3], // Three stats items
    { animationType: 'slideLeft', staggerDelay: 150 }
  );

  const { ref: formRef, animationClasses: formClasses } = useAdvancedScrollAnimation({
    animationType: 'slideRight',
    delay: 400
  });

  // Form handlers
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmission = () => {
    handleFormSubmit(formData);
  };

  const handleCourseFinder = () => {
    handleNavigation('course');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            {/* Question */}
            <div className="space-y-2" ref={headlineRef}>
              <p className={`text-green-400 text-lg font-medium ${headlineClasses}`}>
                Restricted by opportunities?
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className={`text-4xl lg:text-6xl font-bold text-white leading-tight ${headlineClasses}`}>
                Get the tech career you deserve.{" "}
                <span className="text-primary hover:text-primary-hover transition-colors duration-300">Faster.</span>
              </h1>
            </div>

            {/* Statistics */}
            <div className="space-y-4" ref={statsRef}>
              <div className={`flex items-center space-x-3 transition-all duration-700 ease-out transform ${
                statsAnimated[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-white text-lg">
                  <span className="font-bold">128% average hike</span> via our placement cell
                </p>
              </div>
              
              <div className={`flex items-center space-x-3 transition-all duration-700 ease-out transform ${
                statsAnimated[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-white text-lg">
                  <span className="font-bold">1.5 Lac+ learners</span> cracked top tech companies
                </p>
              </div>
              
              <div className={`flex items-center space-x-3 transition-all duration-700 ease-out transform ${
                statsAnimated[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-white text-lg">
                  <span className="font-bold">1,400+ alumni in MAANG</span> & 103 unicorn startups
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <EnhancedButton 
                size="xl"
                variant="glow"
                animation="float"
                loading={isCourseLoading}
                icon={<Search className="w-5 h-5" />}
                iconPosition="left"
                onClick={handleCourseFinder}
                className="group"
              >
                Let's find the right course for you
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </EnhancedButton>
            </div>
          </div>

          {/* Right Side - Lead Capture Form */}
          <div className="lg:flex lg:justify-end" ref={formRef}>
            <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto lg:mx-0 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${formClasses}`}>
              <div className="space-y-6">
                {/* Form Title */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Let's find the right course for you
                  </h2>
                </div>

                {/* Experience Section */}
                <div className="space-y-4">
                  <Label className="text-sm font-semibold text-gray-700">
                    Experience
                  </Label>
                  <RadioGroup defaultValue="working-technical" className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="working-technical" id="working-technical" />
                      <Label htmlFor="working-technical" className="text-sm text-gray-700">
                        Working Professional - Technical Roles
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="working-nontechnical" id="working-nontechnical" />
                      <Label htmlFor="working-nontechnical" className="text-sm text-gray-700">
                        Working Professional - Non Technical
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="final-year" id="final-year" />
                      <Label htmlFor="final-year" className="text-sm text-gray-700">
                        College Student - Final Year
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="pre-final" id="pre-final" />
                      <Label htmlFor="pre-final" className="text-sm text-gray-700">
                        College Student - 1st to Pre-final Year
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="others" id="others" />
                      <Label htmlFor="others" className="text-sm text-gray-700">
                        Others
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Topic of Interest */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">
                    Select topic of interest:
                  </Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                    <SelectTrigger className="w-full border border-form-border bg-form-input">
                      <SelectValue placeholder="Select your options/choices" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="machine-learning">Machine Learning</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Name Field */}
                <div className="space-y-2 form-field">
                  <Label className="text-sm font-semibold text-gray-700">
                    Name
                  </Label>
                  <Input 
                    type="text" 
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="border border-form-border bg-form-input"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="space-y-2 form-field">
                  <Label className="text-sm font-semibold text-gray-700">
                    Phone Number
                  </Label>
                  <Input 
                    type="tel" 
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border border-form-border bg-form-input"
                  />
                </div>

                {/* Submit Button */}
                <EnhancedButton 
                  variant="gradient"
                  size="lg"
                  loading={isFormLoading}
                  loadingText="Submitting..."
                  onClick={handleFormSubmission}
                  className="w-full"
                >
                  Find your course
                </EnhancedButton>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
                  <span className="text-primary underline cursor-pointer">Privacy Policy</span>{" "}
                  &{" "}
                  <span className="text-primary underline cursor-pointer">Terms of use</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;