
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Section, HeroSection } from "@/components/ui/containers";
import { 
  MapPin, Phone, Mail, ArrowRight, CheckCircle2, 
  Truck, Clock, Shield, Star
} from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        className="py-20 text-white min-h-screen flex items-center relative"
        backgroundImage="/lovable-uploads/ee2b4f6a-697c-44ad-9ba0-34fe553423ba.png"
        overlay={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Dare to be <span className="text-brand-orange">different...</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              We deliver your packages with speed, care, and trust across Nepal
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg">
                LEARN MORE <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="text-center">
                <Truck className="h-20 w-20 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4 text-white">Express Delivery</h3>
                <p className="text-white/90">Fast and reliable delivery service across Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Services Overview */}
      <Section className="bg-white py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive delivery solutions for all your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-orange hover:text-white transition-all duration-300 group">
            <Truck className="h-16 w-16 mx-auto mb-4 text-brand-orange group-hover:text-white" />
            <h3 className="text-2xl font-bold mb-4">Express Delivery</h3>
            <p className="text-gray-600 group-hover:text-white">Same-day and next-day delivery options for urgent packages</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-orange hover:text-white transition-all duration-300 group">
            <Shield className="h-16 w-16 mx-auto mb-4 text-brand-orange group-hover:text-white" />
            <h3 className="text-2xl font-bold mb-4">Secure Shipping</h3>
            <p className="text-gray-600 group-hover:text-white">End-to-end package protection with real-time tracking</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-orange hover:text-white transition-all duration-300 group">
            <Clock className="h-16 w-16 mx-auto mb-4 text-brand-orange group-hover:text-white" />
            <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
            <p className="text-gray-600 group-hover:text-white">Round-the-clock customer service and package tracking</p>
          </div>
        </div>
      </Section>

      {/* Word from CEO Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-orange mb-8">
              WORD FROM CEO
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "At OrderInstant, our mission is simple — to deliver with speed, care, and trust. 
                Every package we handle represents someone's priority, and we treat it as our own."
              </blockquote>
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "We're committed to making delivery easier, faster, and more reliable every day. 
                Our team works tirelessly to ensure your packages reach their destination safely and on time."
              </blockquote>
              <div className="text-brand-orange font-semibold text-xl">
                "Thank you for trusting us with your logistics needs."
              </div>
              <div className="mt-4 text-gray-600">
                — CEO, OrderInstant
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-brand-orange to-brand-dark-orange rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👨‍💼</span>
                    </div>
                    <div className="font-bold text-gray-800">CEO</div>
                    <div className="text-brand-orange font-semibold">OrderInstant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-white py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-orange mb-8">GET IN TOUCH</h2>
          <p className="text-xl text-gray-600">Ready to ship? Contact us today</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-brand-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Address</h3>
            <p className="text-gray-600 text-lg">Samakhusi-3, Kathmandu, Nepal</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-brand-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Phone</h3>
            <p className="text-gray-600 text-lg">01-4974691</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-brand-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <p className="text-gray-600 text-lg">orderinstant088@gmail.com</p>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-brand-orange py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">10M+</div>
            <p className="text-lg opacity-90">Packages Delivered</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">99.8%</div>
            <p className="text-lg opacity-90">Delivery Success</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
            <p className="text-lg opacity-90">Customer Support</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <p className="text-lg opacity-90">Cities Served</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 py-16 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Confidence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust OrderInstant with their shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/account">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-dark-orange text-white">
                Create Account
              </Button>
            </Link>
            <Link to="/shipping">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-dark-orange text-white">
                Ship Now
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
