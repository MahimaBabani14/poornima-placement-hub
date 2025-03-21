
import React, { useState } from "react";
import { 
  LifeBuoy,
  X,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import HelpSystem from "./HelpSystem";
import { cn } from "@/lib/utils";

const FloatingHelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstVisit] = useState(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      localStorage.setItem('visited', 'true');
      return true;
    }
    return false;
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {firstVisit && (
        <div className="bg-primary text-white p-3 rounded-lg shadow-lg max-w-xs animate-bounce">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            <p className="text-sm">Need help? Click here!</p>
          </div>
        </div>
      )}
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className={cn(
                "h-12 w-12 rounded-full shadow-lg transition-all duration-300", 
                isOpen ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <LifeBuoy className="h-5 w-5" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>{isOpen ? "Close help" : "Get help"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      {isOpen && (
        <div className="bg-background border rounded-lg shadow-lg p-4 min-w-[300px] animate-in fade-in-50 slide-in-from-right-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              Quick Help
            </h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-4 mb-4">
            <p className="text-sm text-muted-foreground">
              Welcome to the Campus Placement Portal! How can we help you today?
            </p>
            
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-left" asChild>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  window.open('https://example.com/user-guide', '_blank');
                }}>
                  <span>View User Guide</span>
                </a>
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-left" asChild>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  window.open('mailto:support@campus-placement.com');
                }}>
                  <span>Email Support</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <HelpSystem />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingHelpButton;
