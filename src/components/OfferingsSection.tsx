import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronUp, GraduationCap, Plus, Building, Database, BarChart3, Layers } from "lucide-react";
import { useAdvancedScrollAnimation, useStaggeredAnimation } from "@/hooks/useAdvancedScrollAnimation";

const OfferingsSection = () => {
  // Scroll animations
  const { ref: titleRef, animationClasses: titleClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 100
  });

  const { ref: timelineRef, animatedItems: timelineAnimated } = useStaggeredAnimation(
    [1, 2, 3], // Three timeline sections
    { animationType: 'slideLeft', staggerDelay: 300 }
  );
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-400 tracking-wide ${titleClasses}`}>
            OUR OFFERINGS
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Job Bootcamp */}
          <div className={`relative mb-16 transition-all duration-700 ease-out transform ${
            timelineAnimated[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="absolute left-6 w-4 h-4 bg-gray-300 rounded-full -translate-x-1/2"></div>
            <div className="ml-16 mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <ChevronUp className="w-5 h-5 text-gray-600" />
                <h3 className="text-2xl font-bold text-gray-900">Job Bootcamp</h3>
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                For graduates
              </Badge>
            </div>
            <div className="ml-16">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-lift border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <div className="relative w-12 h-12">
                          <div className="absolute w-8 h-6 rounded bg-blue-300 transform rotate-12 group-hover:rotate-24 transition-transform duration-300"></div>
                          <div className="absolute w-8 h-6 rounded bg-orange-300 transform -rotate-6 top-1 left-1 group-hover:-rotate-12 transition-transform duration-300"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 text-center group-hover:text-primary transition-colors duration-300">Full Stack Web Development with GenAI</h4>
                      <div className="space-y-2 text-center">
                        <p className="text-sm text-gray-600"><span className="font-semibold">140+</span> Hrs of content</p>
                        <p className="text-sm text-gray-600"><span className="font-semibold">600+</span> Problems</p>
                        <p className="text-sm text-gray-600"><span className="font-semibold">10k+</span> Learners</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-lift border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <div className="relative w-12 h-12">
                          <div className="flex items-end gap-1 h-8 group-hover:scale-110 transition-transform duration-300">
                            <div className="w-2 h-4 rounded bg-blue-300 group-hover:h-5 transition-all duration-300"></div>
                            <div className="w-2 h-6 rounded bg-blue-300 group-hover:h-7 transition-all duration-300"></div>
                            <div className="w-2 h-3 rounded bg-blue-300 group-hover:h-4 transition-all duration-300"></div>
                            <div className="w-2 h-5 rounded bg-blue-300 group-hover:h-6 transition-all duration-300"></div>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 text-center group-hover:text-primary transition-colors duration-300">Data Analytics with GenAI</h4>
                      <div className="space-y-2 text-center">
                        <p className="text-sm text-gray-600"><span className="font-semibold">100+</span> Hrs of content</p>
                        <p className="text-sm text-gray-600"><span className="font-semibold">300+</span> Problems</p>
                        <p className="text-sm text-gray-600"><span className="font-semibold">2000+</span> Learners</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* IIT Certifications */}
          <div className={`relative mb-16 transition-all duration-700 ease-out transform ${
            timelineAnimated[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="absolute left-6 w-4 h-4 bg-gray-300 rounded-full -translate-x-1/2"></div>
            <div className="ml-16 mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <GraduationCap className="w-5 h-5 text-gray-600" />
                <h3 className="text-2xl font-bold text-gray-900">IIT Certifications</h3>
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                For graduates
              </Badge>
            </div>
            <div className="ml-16">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "PG Certification in Data Analytics with GenAI",
                    institution: "E&ICT Academy, IIT Guwahati",
                    duration: "6 months"
                  },
                  {
                    title: "PG Certification in Data Science with GenAI",
                    institution: "E&ICT Academy, IIT Guwahati",
                    duration: "9 months"
                  },
                  {
                    title: "Advanced Certification in GenAI for Non-Tech Professionals",
                    institution: "IITM Pravartak, IIT Madras",
                    duration: "6 months"
                  }
                ].map((course, index) => (
                  <Card key={index} className="hover-lift border border-gray-200">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto">
                          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                            <Building className="w-6 h-6 text-gray-600" />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 text-center leading-tight">{course.title}</h4>
                        <p className="text-sm text-gray-600 text-center">{course.institution}</p>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-4 h-4 bg-blue-300 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-xs font-bold">∞</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 text-center">{course.duration}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* For College Students */}
              <div className="mt-12">
                <div className="mb-6">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    For college students
                  </Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Training and Internship Certification in Advanced DSA",
                      institution: "IITM Pravartak, IIT Madras",
                      duration: "4 months"
                    },
                    {
                      title: "Training and Internship Certification in Data Analytics",
                      institution: "E&ICT Academy, IIT Guwahati",
                      duration: "6 months"
                    },
                    {
                      title: "Training and Internship Certification in Full Stack Web Development",
                      institution: "IITM Pravartak, IIT Madras",
                      duration: "9 months"
                    }
                  ].map((course, index) => (
                    <Card key={index} className="hover-lift border border-gray-200">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-center w-16 h-16 mx-auto">
                            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                              <Building className="w-6 h-6 text-gray-600" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 text-center leading-tight">{course.title}</h4>
                          <p className="text-sm text-gray-600 text-center">{course.institution}</p>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                            </div>
                            <div className="w-4 h-4 bg-blue-300 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 text-xs font-bold">∞</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 text-center">{course.duration}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* New Launches */}
          <div className="relative">
            <div className="absolute left-6 w-4 h-4 bg-gray-300 rounded-full -translate-x-1/2"></div>
            <div className="ml-16 mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <Plus className="w-5 h-5 text-gray-600" />
                <h3 className="text-2xl font-bold text-gray-900">New Launches</h3>
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                For graduates
              </Badge>
            </div>
            <div className="ml-16">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Advanced Certification in GenAI & Multi Agent Systems",
                    stats: ["100+ Hrs of content", "390+ Problems", "576+ Learners"],
                    iconBg: "bg-blue-100"
                  },
                  {
                    title: "Advanced Certification in GenAI for Non-tech Professionals",
                    stats: ["100+ Hrs of content", "390+ Problems", "529+ Learners"],
                    iconBg: "bg-orange-100"
                  },
                  {
                    title: "Advanced Certification in Data Science with GenAI",
                    stats: ["140+ Hrs of content", "600+ Problems", "780+ Learners"],
                    iconBg: "bg-blue-100"
                  }
                ].map((course, index) => (
                  <Card key={index} className="hover-lift border border-gray-200">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto">
                          <div className={`w-12 h-12 ${course.iconBg} rounded flex items-center justify-center`}>
                            <Database className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 text-center leading-tight">{course.title}</h4>
                        <div className="space-y-2">
                          {course.stats.map((stat, statIndex) => (
                            <p key={statIndex} className="text-sm text-gray-600 text-center">
                              <span className="font-semibold">{stat.split(' ')[0]}</span> {stat.split(' ').slice(1).join(' ')}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
