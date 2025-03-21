
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter 
} from "@/components/ui/dialog";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  HelpCircle, 
  Info, 
  MessageSquare, 
  LifeBuoy, 
  BookOpen, 
  CheckCircle2,
  Mail
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export const HelpIconButton = ({ className }: { className?: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn("rounded-full bg-primary/10 hover:bg-primary/20", className)}
            >
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="sr-only">Help</span>
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Need help? Click for assistance</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const HelpTooltip = ({ 
  children, 
  content 
}: { 
  children: React.ReactNode, 
  content: React.ReactNode 
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center">
            {children}
            <HelpCircle className="ml-1 h-3.5 w-3.5 text-muted-foreground cursor-help" />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const InfoPopover = ({ 
  children, 
  content, 
  title 
}: { 
  children: React.ReactNode, 
  content: React.ReactNode,
  title?: string
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <span className="inline-flex items-center cursor-help">
          {children}
          <Info className="ml-1 h-3.5 w-3.5 text-muted-foreground" />
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {title && <h4 className="font-medium mb-2">{title}</h4>}
        <div className="text-sm text-muted-foreground">{content}</div>
      </PopoverContent>
    </Popover>
  );
};

const FaqItem = ({ 
  question, 
  answer 
}: { 
  question: string, 
  answer: React.ReactNode 
}) => {
  return (
    <Collapsible className="border rounded-lg mb-2">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-3 text-left font-medium hover:bg-muted/50">
        {question}
      </CollapsibleTrigger>
      <CollapsibleContent className="p-3 pt-0 text-sm text-muted-foreground border-t">
        {answer}
      </CollapsibleContent>
    </Collapsible>
  );
};

const HelpDialog = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = () => {
    setIsSending(true);
    // Simulate sending a message
    setTimeout(() => {
      setIsSending(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      setContactForm({
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <HelpCircle className="h-4 w-4" />
          Help & Support
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <LifeBuoy className="h-5 w-5 text-primary" />
            Help & Support Center
          </DialogTitle>
          <DialogDescription>
            Get assistance and learn how to use our placement portal effectively.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="guide" className="mt-4">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="guide" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">How to Use</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-1">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">FAQ</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Contact Us</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guide" className="space-y-4">
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <h3 className="text-base font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Finding Opportunities
                </h3>
                <p className="text-sm text-muted-foreground">
                  Browse all available placement opportunities on the Jobs page. Use filters to narrow down by department,
                  job type, or search for specific roles and companies.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <h3 className="text-base font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Applying for Positions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Click "Apply Now" on any job listing to submit your application. Make sure your profile information is
                  complete and updated before applying.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <h3 className="text-base font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Tracking Applications
                </h3>
                <p className="text-sm text-muted-foreground">
                  Visit the Placement Status page to track your applications. You'll see the status of each application,
                  upcoming interviews, and placement offers.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <h3 className="text-base font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Getting Notifications
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stay updated with important announcements, application status changes, and upcoming events through the
                  Notifications panel on each page.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="max-h-[400px] overflow-y-auto pr-2">
            <div className="space-y-2">
              <FaqItem 
                question="How do I apply for a job?"
                answer={
                  <div>
                    <p>To apply for a job:</p>
                    <ol className="list-decimal ml-4 mt-2 space-y-1">
                      <li>Navigate to the Jobs page</li>
                      <li>Find the job you're interested in</li>
                      <li>Click the "Apply Now" button</li>
                      <li>Follow the application steps</li>
                    </ol>
                  </div>
                }
              />
              
              <FaqItem 
                question="How can I filter jobs by my department?"
                answer="Use the Department dropdown in the search filters at the top of the Jobs page. Select your department to see only relevant opportunities."
              />
              
              <FaqItem 
                question="What's the difference between Placement and Internship?"
                answer="Placements are full-time job offers after graduation, while internships are temporary positions during your studies. PPO (Pre-Placement Offer) opportunities can convert to full-time roles based on internship performance."
              />
              
              <FaqItem 
                question="How can I check my application status?"
                answer="Visit the Placement Status page to track all your applications. Each application will show its current status, from 'Applied' through various stages to 'Offered' or 'Rejected'."
              />
              
              <FaqItem 
                question="Can I apply to multiple companies?"
                answer="Yes, you can apply to as many companies as you wish, but be aware of your college placement policy regarding multiple offers. Some institutions only allow accepting one offer."
              />
              
              <FaqItem 
                question="What do I do if I miss an application deadline?"
                answer="Unfortunately, applications typically close after the deadline. Contact your placement coordinator if you have extenuating circumstances that prevented you from applying on time."
              />
              
              <FaqItem 
                question="How do I update my profile and resume?"
                answer="Go to your Profile page by clicking on your profile icon in the navigation bar. From there, you can update your personal information, skills, education details, and upload a new resume."
              />
              
              <FaqItem 
                question="What if I don't meet the minimum CGPA requirement?"
                answer="Companies set CGPA requirements based on their hiring criteria. If you don't meet the minimum, you may not be eligible to apply. Focus on opportunities that match your qualifications."
              />
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground mb-4">
                Need personalized help? Send us a message and our placement team will get back to you as soon as possible.
              </div>
              
              <div className="space-y-3">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={contactForm.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Help with application process" 
                    value={contactForm.subject}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Please describe your issue or question in detail..." 
                    rows={4}
                    className="resize-none"
                    value={contactForm.message}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button onClick={handleSendMessage} disabled={isSending} className="gap-2">
                  {isSending ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Mail className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </DialogFooter>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

const HelpSystem = () => {
  return (
    <>
      <HelpDialog />
    </>
  );
};

export default HelpSystem;
