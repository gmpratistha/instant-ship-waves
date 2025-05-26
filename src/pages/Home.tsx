
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Section, HeroSection } from "@/components/ui/containers";
import { 
  Clock, Package, Truck, Globe, 
  CheckCircle2, Shield, Clock3, PieChart,
  MapPin, Phone, Mail, ArrowRight
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800">
              Dare to be <span className="text-brand-orange">different...</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Revolutionary delivery solutions that set us apart from the competition
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full">
                LEARN MORE <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/331a0921-0d5b-4cc6-ab67-b099929091ff.png" 
                alt="Delivery Truck with Packages" 
                className="w-full h-auto max-w-2xl mx-auto"
              />
            </div>
            {/* Floating location pins */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center animate-bounce">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-20 right-20 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center animate-bounce delay-75">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute bottom-20 right-10 w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center animate-bounce delay-150">
              <MapPin className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Contacts Section */}
      <Section className="bg-white py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-orange mb-8">CONTACTS</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/da313ac2-9e21-4722-8aec-14619af2d3ab.png" 
              alt="Delivery Service Illustration" 
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-orange/10 p-4 rounded-full">
                <MapPin className="h-8 w-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600 text-lg">Samakhusi-3, Kathmandu, Nepal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-brand-orange/10 p-4 rounded-full">
                <Phone className="h-8 w-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 text-lg">01-4974691</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-brand-orange/10 p-4 rounded-full">
                <Mail className="h-8 w-8 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-lg">orderinstant088@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Word from CEO Section */}
      <Section className="bg-gray-50 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-orange mb-8">
              WORD FROM<br />CEO
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "At OrderInstant, our mission is simple — to deliver with speed, care, and trust. 
                Every package we handle represents someone's priority, and we treat it as our own. 
                Thank you for choosing us as your logistics partner."
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "We're committed to making delivery easier, faster, and more reliable every day. 
                Our team works tirelessly to ensure your packages reach their destination safely and on time."
              </p>
              <p className="text-brand-orange font-semibold text-xl">
                "Thank you for trusting us with your logistics needs. Together, we can achieve great things."
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/b6d7c816-2585-43f6-93d0-a141e46039d7.png" 
                alt="CEO Profile" 
                className="w-full h-auto max-w-md mx-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Explore Us Section */}
      <Section className="bg-white py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/216d0b13-9b97-4cc8-bd2a-7dba3f388044.png" 
              alt="Mobile App with Delivery" 
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
          
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-orange mb-8">
              EXPLORE US
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-xl leading-relaxed">
                At OrderInstant, we deliver more than just packages — we deliver trust. 
                Based in Nepal, we specialize in fast, reliable, and secure courier services 
                tailored to meet the needs of individuals and businesses across the country.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                Whether it's same-day delivery in the city or nationwide logistics, 
                we're committed to making every delivery instant and hassle-free.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                Our cutting-edge technology and dedicated team ensure that your packages 
                are tracked, protected, and delivered with the utmost care and precision.
              </p>
            </div>
            
            <div className="mt-10">
              <Link to="/services">
                <Button className="bg-brand-orange hover:bg-brand-dark-orange text-white px-8 py-4 text-lg rounded-full">
                  Learn More About Our Services
                </Button>
              </Link>
            </div>
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
