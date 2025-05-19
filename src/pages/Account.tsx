
import { useState } from 'react';
import { Section, HeroSection } from "@/components/ui/containers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Mail, Lock, User, Check } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import TermsAndConditions from "@/components/TermsAndConditions";

const Account = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('login');
  const [termsOpen, setTermsOpen] = useState(false);
  
  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
  
  // Signup form state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);
  const [isSubmittingSignup, setIsSubmittingSignup] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLogin(true);
    
    // Simulate login submission
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to OrderInstant!",
        action: (
          <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-white" />
          </div>
        ),
      });
      setIsSubmittingLogin(false);
    }, 1500);
  };
  
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    if (!acceptedTerms) {
      toast({
        title: "Terms and Conditions Required",
        description: "Please agree to the Terms and Conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmittingSignup(true);
    
    // Simulate signup submission
    setTimeout(() => {
      toast({
        title: "Account Created",
        description: "Welcome to OrderInstant! You can now log in.",
        action: (
          <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-white" />
          </div>
        ),
      });
      setIsSubmittingSignup(false);
      setActiveTab('login');
    }, 1500);
  };

  const openTermsModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setTermsOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        className="py-16 bg-gray-100"
      >
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Your <span className="text-brand-orange">Account</span>
          </h1>
          <p className="text-lg opacity-90 mb-8 animate-fade-in">
            Log in to your OrderInstant account or create a new one to start shipping.
          </p>
        </div>
      </HeroSection>

      {/* Terms and Conditions Modal */}
      <TermsAndConditions open={termsOpen} onOpenChange={setTermsOpen} />

      {/* Account Forms Section */}
      <Section className="bg-white">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="mt-0">
                  <form onSubmit={handleLoginSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input 
                            id="login-email" 
                            name="email" 
                            type="email" 
                            placeholder="your@email.com"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            className="pl-10" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input 
                            id="login-password" 
                            name="password" 
                            type={showLoginPassword ? "text" : "password"} 
                            placeholder="Your password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            className="pl-10 pr-10" 
                            required 
                          />
                          <button 
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowLoginPassword(!showLoginPassword)}
                          >
                            {showLoginPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input 
                            id="remember-me" 
                            name="remember-me" 
                            type="checkbox" 
                            className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded" 
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                          </label>
                        </div>
                        <div className="text-sm">
                          <a href="#" className="text-brand-orange hover:text-brand-dark-orange">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-brand-orange hover:bg-brand-dark-orange text-white"
                        disabled={isSubmittingLogin}
                      >
                        {isSubmittingLogin ? 'Logging In...' : 'Log In'}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="mt-0">
                  <form onSubmit={handleSignupSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input 
                              id="firstName" 
                              name="firstName" 
                              placeholder="First name"
                              value={signupData.firstName}
                              onChange={handleSignupChange}
                              className="pl-10" 
                              required 
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <Input 
                            id="lastName" 
                            name="lastName" 
                            placeholder="Last name"
                            value={signupData.lastName}
                            onChange={handleSignupChange}
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input 
                            id="signup-email" 
                            name="email" 
                            type="email" 
                            placeholder="your@email.com"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            className="pl-10" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input 
                            id="signup-password" 
                            name="password" 
                            type={showSignupPassword ? "text" : "password"} 
                            placeholder="Create a password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            className="pl-10 pr-10" 
                            required 
                          />
                          <button 
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowSignupPassword(!showSignupPassword)}
                          >
                            {showSignupPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input 
                            id="confirm-password" 
                            name="confirmPassword" 
                            type={showSignupConfirmPassword ? "text" : "password"} 
                            placeholder="Confirm your password"
                            value={signupData.confirmPassword}
                            onChange={handleSignupChange}
                            className="pl-10 pr-10" 
                            required 
                          />
                          <button 
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)}
                          >
                            {showSignupConfirmPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Checkbox 
                          id="terms" 
                          checked={acceptedTerms}
                          onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                          className="mt-1"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                          I agree to the <a href="#" onClick={openTermsModal} className="text-brand-orange hover:text-brand-dark-orange underline">Terms and Conditions</a> including the liability limitations, COD policies, packaging requirements, and dispute resolution procedures.
                        </label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-brand-orange hover:bg-brand-dark-orange text-white"
                        disabled={isSubmittingSignup}
                      >
                        {isSubmittingSignup ? 'Creating Account...' : 'Create Account'}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center text-gray-600">
            <p>By creating an account, you can:</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-left max-w-sm mx-auto">
              <div className="flex items-start">
                <div className="bg-brand-orange/10 p-1 rounded mr-2 mt-1">
                  <Check className="h-4 w-4 text-brand-orange" />
                </div>
                <span>Track your shipments</span>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-orange/10 p-1 rounded mr-2 mt-1">
                  <Check className="h-4 w-4 text-brand-orange" />
                </div>
                <span>Save shipping addresses</span>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-orange/10 p-1 rounded mr-2 mt-1">
                  <Check className="h-4 w-4 text-brand-orange" />
                </div>
                <span>View shipping history</span>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-orange/10 p-1 rounded mr-2 mt-1">
                  <Check className="h-4 w-4 text-brand-orange" />
                </div>
                <span>Access special discounts</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Account;
