import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-form-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">CN</span>
          </div>
          <span className="text-xl font-bold text-foreground">codingninjas</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
            <span>Job Bootcamp</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
            <span>IIT Certifications</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
            <span>New Launches</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Login Button */}
        <Button variant="default" className="bg-primary hover:bg-primary-hover text-primary-foreground">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;