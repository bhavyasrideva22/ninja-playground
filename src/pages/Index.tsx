import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import OfferingsSection from "@/components/OfferingsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TrustIndicatorsSection from "@/components/TrustIndicatorsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import LearningModelSection from "@/components/LearningModelSection";
import FacultySection from "@/components/FacultySection";
import IndustryExpertSection from "@/components/IndustryExpertSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <OfferingsSection />
      <AchievementsSection />
      <TrustIndicatorsSection />
      <SuccessStoriesSection />
      <LearningModelSection />
      <FacultySection />
      <IndustryExpertSection />
      <Footer />
    </div>
  );
};

export default Index;
