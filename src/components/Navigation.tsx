import { EnhancedButton } from "@/components/ui/enhanced-button";
import { ChevronDown, Menu, X, Layers, BarChart3, ArrowRight, Building, GraduationCap, Database, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { useNavigationAction } from "@/hooks/useButtonInteraction";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Button interactions
  const { isLoading: isLoginLoading, handleClick: handleLoginClick } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Redirecting to login...'
  });

  const { isLoading: isSignupLoading, handleClick: handleSignupClick } = useNavigationAction({
    loadingText: 'Processing...',
    successText: 'Redirecting to signup...'
  });

  const handleLogin = async () => {
    await handleLoginClick(async () => {
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 800));
      // In a real app, this would redirect to login page
      alert('Login functionality would be implemented here. Redirecting to login page...');
    });
  };

  const handleSignup = async () => {
    await handleSignupClick(async () => {
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 800));
      // In a real app, this would redirect to signup page
      alert('Signup functionality would be implemented here. Redirecting to signup page...');
    });
  };

  const navigationItems = [
    {
      label: "Job Bootcamp",
      hasDropdown: true,
      dropdownContent: {
        header: "For graduates",
        courses: [
          {
            id: 1,
            title: "Full Stack Web Development with GenAI",
            certification: "Certified by Coding Ninjas",
            icon: Layers,
            iconColors: ["bg-blue-500", "bg-yellow-500", "bg-orange-500"]
          },
          {
            id: 2,
            title: "Data Analytics with GenAI",
            certification: "Certified by Coding Ninjas",
            icon: BarChart3,
            iconColors: ["bg-blue-500", "bg-yellow-500", "bg-orange-500"]
          }
        ]
      }
    },
    {
      label: "IIT Certifications", 
      hasDropdown: true,
      dropdownContent: {
        categories: [
          {
            id: 1,
            title: "For graduates",
            courses: [
              {
                id: 1,
                title: "E&ICT Academy, IIT Guwahati - PG Certification in Data Analytics with GenAI",
                icon: Building,
                iconBg: "bg-gray-800",
                iconColor: "text-blue-400"
              },
              {
                id: 2,
                title: "E&ICT Academy, IIT Guwahati - PG Certification in Data Science with GenAI",
                icon: Building,
                iconBg: "bg-gray-800",
                iconColor: "text-blue-400"
              }
            ]
          },
          {
            id: 2,
            title: "For college students",
            courses: [
              {
                id: 3,
                title: "IITM Pravartak, TIH IIT Madras - Advanced Certification in GenAI for Non-Tech Professionals",
                icon: GraduationCap,
                iconBg: "bg-gray-100",
                iconColor: "text-green-600",
                customIcon: "PRAVARTA"
              }
            ]
          }
        ]
      }
    },
    {
      label: "New Launches",
      hasDropdown: true,
      dropdownContent: {
        header: "For graduates",
        courses: [
          {
            id: 1,
            title: "Advanced Certification in GenAI & Multi Agent Systems",
            certification: "Certified by Coding Ninjas",
            iconBg: "bg-blue-100",
            customIcon: "genai-multi",
            iconColors: ["bg-orange-400", "bg-yellow-400", "bg-blue-500"]
          },
          {
            id: 2,
            title: "Advanced Certification in GenAI for Non-tech Professionals",
            certification: "Certified by Coding Ninjas",
            iconBg: "bg-orange-100",
            customIcon: "genai-nontech",
            iconColors: ["bg-orange-400", "bg-yellow-400", "bg-red-500"]
          },
          {
            id: 3,
            title: "Advanced Certification in Data Science with GenAI",
            certification: "Certified by Coding Ninjas",
            icon: Database,
            iconBg: "bg-blue-100",
            iconColor: "text-amber-600"
          }
        ]
      }
    }
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const renderCustomIcon = (customIcon: string, iconColors: string[]) => {
    if (customIcon === "genai-multi") {
      return (
        <div className="relative w-12 h-12">
          {/* Cross pattern with orange-yellow squares */}
          <div className={`absolute w-3 h-3 ${iconColors[0]} rounded-sm top-1 left-4`}></div>
          <div className={`absolute w-3 h-3 ${iconColors[1]} rounded-sm top-4 left-1`}></div>
          <div className={`absolute w-3 h-3 ${iconColors[0]} rounded-sm top-4 right-1`}></div>
          <div className={`absolute w-3 h-3 ${iconColors[1]} rounded-sm bottom-1 left-4`}></div>
          {/* Blue plus sign at center */}
          <div className={`absolute w-1.5 h-1.5 ${iconColors[2]} rounded-sm top-2.5 left-2.5`}></div>
        </div>
      );
    } else if (customIcon === "genai-nontech") {
      return (
        <div className="relative w-12 h-12">
          {/* Cross pattern with orange-yellow squares */}
          <div className={`absolute w-3 h-3 ${iconColors[0]} rounded-sm top-1 left-4`}></div>
          <div className={`absolute w-3 h-3 ${iconColors[1]} rounded-sm top-4 left-1`}></div>
          <div className={`absolute w-3 h-3 ${iconColors[0]} rounded-sm top-4 right-1`}></div>
          <div className={`absolute w-3 h-3 ${iconColors[1]} rounded-sm bottom-1 left-4`}></div>
          {/* Red square at center */}
          <div className={`absolute w-1.5 h-1.5 ${iconColors[2]} rounded-sm top-2.5 left-2.5`}></div>
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="bg-white border-b border-form-border px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">CN</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">codingninjas</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors group px-3 py-2 rounded-lg ${activeDropdown === item.label ? 'bg-orange-50 text-primary' : ''}`}>
                <span className="font-medium text-gray-700 group-hover:text-primary">{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                )}
              </div>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.label && item.dropdownContent && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50 dropdown-enter dropdown-enter-active">
                  {item.dropdownContent.header && (
                    <>
                      {/* Header */}
                      <div className="px-6 pb-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500 font-medium">{item.dropdownContent.header}</p>
                      </div>

                      {/* Course Listings */}
                      <div className="py-2">
                        {item.dropdownContent.courses.map((course, courseIndex) => (
                          <div key={course.id}>
                            <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                              <div className="flex items-start gap-4">
                                {/* Course Icon */}
                                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  {course.icon === Layers ? (
                                    <div className="relative w-12 h-12">
                                      <div className={`absolute w-8 h-6 rounded ${course.iconColors[0]} transform rotate-12`}></div>
                                      <div className={`absolute w-8 h-6 rounded ${course.iconColors[1]} transform -rotate-6 top-1 left-1`}></div>
                                      <div className={`absolute w-8 h-6 rounded ${course.iconColors[2]} transform rotate-3 top-2 left-2`}></div>
                                    </div>
                                  ) : course.icon === BarChart3 ? (
                                    <div className="relative w-12 h-12">
                                      <div className="flex items-end gap-1 h-8">
                                        <div className={`w-2 h-4 rounded ${course.iconColors[0]}`}></div>
                                        <div className={`w-2 h-6 rounded ${course.iconColors[1]}`}></div>
                                        <div className={`w-2 h-3 rounded ${course.iconColors[0]}`}></div>
                                        <div className={`w-2 h-5 rounded ${course.iconColors[1]}`}></div>
                                      </div>
                                      <div className={`absolute top-0 left-0 w-full h-0.5 ${course.iconColors[2]} rounded-full`}></div>
                                    </div>
                                  ) : course.icon === Database ? (
                                    <div className={`w-12 h-12 ${course.iconBg} rounded flex items-center justify-center`}>
                                      <div className="flex flex-col gap-0.5">
                                        <div className={`w-6 h-1.5 ${course.iconColor} rounded-sm`}></div>
                                        <div className={`w-6 h-1.5 ${course.iconColor} rounded-sm`}></div>
                                        <div className={`w-6 h-1.5 ${course.iconColor} rounded-sm`}></div>
                                      </div>
                                    </div>
                                  ) : course.customIcon ? (
                                    <div className={`w-12 h-12 ${course.iconBg} rounded flex items-center justify-center`}>
                                      {renderCustomIcon(course.customIcon, course.iconColors)}
                                    </div>
                                  ) : (
                                    <div className={`w-12 h-12 ${course.iconBg || 'bg-gray-100'} rounded flex items-center justify-center`}>
                                      <course.icon className={`w-6 h-6 ${course.iconColor || 'text-gray-600'}`} />
                                    </div>
                                  )}
                                </div>

                                {/* Course Details */}
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">
                                    {course.title}
                                  </h4>
                                  <p className="text-xs text-blue-600 font-medium">
                                    {course.certification}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {courseIndex < item.dropdownContent.courses.length - 1 && (
                              <div className="mx-6 h-px bg-gray-100"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {item.dropdownContent.categories && (
                    <div className="w-80">
                      {item.dropdownContent.categories.map((category, categoryIndex) => (
                        <div key={category.id}>
                          {/* Category Header */}
                          <div className="px-6 py-3 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-500 font-medium">{category.title}</p>
                              <ArrowRight className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>

                          {/* Category Courses */}
                          <div className="py-2">
                            {category.courses.map((course, courseIndex) => (
                              <div key={course.id}>
                                <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                  <div className="flex items-start gap-4">
                                    {/* Course Icon */}
                                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                      {course.customIcon ? (
                                        <div className={`w-12 h-12 ${course.iconBg} rounded flex items-center justify-center`}>
                                          <span className={`text-xs font-bold ${course.iconColor}`}>{course.customIcon}</span>
                                        </div>
                                      ) : (
                                        <div className={`w-12 h-12 ${course.iconBg} rounded flex items-center justify-center`}>
                                          <course.icon className={`w-6 h-6 ${course.iconColor}`} />
                                        </div>
                                      )}
                                    </div>

                                    {/* Course Details */}
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-sm font-semibold text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">
                                        {course.title}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                {courseIndex < category.courses.length - 1 && (
                                  <div className="mx-6 h-px bg-gray-100"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <EnhancedButton 
            variant="ghost" 
            loading={isLoginLoading}
            icon={<LogIn className="w-4 h-4" />}
            onClick={handleLogin}
            className="text-gray-700 hover:text-primary hover:bg-primary/5"
          >
            Login
          </EnhancedButton>
          <EnhancedButton 
            variant="gradient"
            loading={isSignupLoading}
            icon={<UserPlus className="w-4 h-4" />}
            onClick={handleSignup}
            className="px-6"
          >
            Get Started
          </EnhancedButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-form-border py-4">
          <div className="space-y-4 px-6">
            {navigationItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <span className="font-medium text-gray-700">{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <EnhancedButton 
                variant="ghost" 
                loading={isLoginLoading}
                icon={<LogIn className="w-4 h-4" />}
                onClick={handleLogin}
                className="w-full justify-start text-gray-700"
              >
                Login
              </EnhancedButton>
              <EnhancedButton 
                variant="gradient"
                loading={isSignupLoading}
                icon={<UserPlus className="w-4 h-4" />}
                onClick={handleSignup}
                className="w-full"
              >
                Get Started
              </EnhancedButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;