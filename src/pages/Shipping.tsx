
import { useState } from 'react';
import { Section, HeroSection } from "@/components/ui/containers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Package, User, MapPin, Truck, InfoIcon, Check, CreditCard, Clock, Calendar } from 'lucide-react';

interface AddressFormProps {
  title: string;
  formData: {
    name: string;
    company: string;
    street: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const AddressForm = ({ title, formData, onChange }: AddressFormProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label htmlFor={`${title.toLowerCase()}-name`} className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <Input 
            id={`${title.toLowerCase()}-name`}
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor={`${title.toLowerCase()}-company`} className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
          <Input 
            id={`${title.toLowerCase()}-company`}
            name="company"
            value={formData.company}
            onChange={onChange}
            placeholder="Company Name"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor={`${title.toLowerCase()}-street`} className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
          <Input 
            id={`${title.toLowerCase()}-street`}
            name="street"
            value={formData.street}
            onChange={onChange}
            placeholder="Street Address"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor={`${title.toLowerCase()}-street2`} className="block text-sm font-medium text-gray-700 mb-1">Apartment, Suite, etc. (Optional)</label>
          <Input 
            id={`${title.toLowerCase()}-street2`}
            name="street2"
            value={formData.street2}
            onChange={onChange}
            placeholder="Apt, Suite, Unit, etc."
          />
        </div>
        <div>
          <label htmlFor={`${title.toLowerCase()}-city`} className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <Input 
            id={`${title.toLowerCase()}-city`}
            name="city"
            value={formData.city}
            onChange={onChange}
            placeholder="City"
            required
          />
        </div>
        <div>
          <label htmlFor={`${title.toLowerCase()}-state`} className="block text-sm font-medium text-gray-700 mb-1">State / Province</label>
          <Input 
            id={`${title.toLowerCase()}-state`}
            name="state"
            value={formData.state}
            onChange={onChange}
            placeholder="State / Province"
            required
          />
        </div>
        <div>
          <label htmlFor={`${title.toLowerCase()}-zip`} className="block text-sm font-medium text-gray-700 mb-1">Postal / ZIP Code</label>
          <Input 
            id={`${title.toLowerCase()}-zip`}
            name="zip"
            value={formData.zip}
            onChange={onChange}
            placeholder="ZIP / Postal Code"
            required
          />
        </div>
        <div>
          <label htmlFor={`${title.toLowerCase()}-country`} className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <Select 
            value={formData.country} 
            onValueChange={(value) => onChange({ target: { name: 'country', value } } as any)}
          >
            <SelectTrigger id={`${title.toLowerCase()}-country`}>
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="US">United States</SelectItem>
              <SelectItem value="CA">Canada</SelectItem>
              <SelectItem value="MX">Mexico</SelectItem>
              <SelectItem value="UK">United Kingdom</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor={`${title.toLowerCase()}-phone`} className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <Input 
            id={`${title.toLowerCase()}-phone`}
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <label htmlFor={`${title.toLowerCase()}-email`} className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input 
            id={`${title.toLowerCase()}-email`}
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Email Address"
            required
          />
        </div>
      </div>
    </div>
  );
};

const Shipping = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  // Address forms state
  const emptyAddress = {
    name: '',
    company: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
    phone: '',
    email: ''
  };
  
  const [senderInfo, setSenderInfo] = useState({ ...emptyAddress });
  const [receiverInfo, setReceiverInfo] = useState({ ...emptyAddress });
  
  // Package details state
  const [packageDetails, setPackageDetails] = useState({
    weight: '',
    length: '',
    width: '',
    height: '',
    packageType: 'box',
    description: '',
    value: ''
  });
  
  // Service options state
  const [serviceOption, setServiceOption] = useState('standard');
  const [additionalOptions, setAdditionalOptions] = useState({
    insurance: false,
    signature: false,
    fragile: false
  });
  
  // Payment state
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const handleSenderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSenderInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleReceiverChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReceiverInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePackageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPackageDetails(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAdditionalOptions(prev => ({ ...prev, [name]: checked }));
  };
  
  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Addresses</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <AddressForm 
                    title="Sender"
                    formData={senderInfo}
                    onChange={handleSenderChange}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <AddressForm 
                    title="Recipient"
                    formData={receiverInfo}
                    onChange={handleReceiverChange}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Package Details</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Package Type</label>
                    <RadioGroup 
                      value={packageDetails.packageType} 
                      onValueChange={(value) => setPackageDetails(prev => ({ ...prev, packageType: value }))}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="box" id="box" />
                        <Label htmlFor="box">Box</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="envelope" id="envelope" />
                        <Label htmlFor="envelope">Envelope</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tube" id="tube" />
                        <Label htmlFor="tube">Tube</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pallet" id="pallet" />
                        <Label htmlFor="pallet">Pallet</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
                      <Input 
                        id="weight"
                        name="weight"
                        type="number"
                        value={packageDetails.weight}
                        onChange={handlePackageChange}
                        placeholder="Package weight in pounds"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Length (in)</label>
                        <Input 
                          id="length"
                          name="length"
                          type="number"
                          value={packageDetails.length}
                          onChange={handlePackageChange}
                          placeholder="L"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width (in)</label>
                        <Input 
                          id="width"
                          name="width"
                          type="number"
                          value={packageDetails.width}
                          onChange={handlePackageChange}
                          placeholder="W"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Height (in)</label>
                        <Input 
                          id="height"
                          name="height"
                          type="number"
                          value={packageDetails.height}
                          onChange={handlePackageChange}
                          placeholder="H"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Package Description</label>
                    <Textarea 
                      id="description"
                      name="description"
                      value={packageDetails.description}
                      onChange={handlePackageChange}
                      placeholder="Brief description of package contents"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-1">Declared Value ($)</label>
                    <Input 
                      id="value"
                      name="value"
                      type="number"
                      value={packageDetails.value}
                      onChange={handlePackageChange}
                      placeholder="Package value in USD"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Options</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Delivery Service</h3>
                    <RadioGroup 
                      value={serviceOption} 
                      onValueChange={setServiceOption}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="flex items-start space-x-3 border p-4 rounded-md">
                        <RadioGroupItem value="economy" id="economy" className="mt-1" />
                        <div>
                          <Label htmlFor="economy" className="text-base font-medium">Economy</Label>
                          <div className="text-sm text-gray-600">
                            <p>3-5 business days</p>
                            <p className="font-semibold mt-1">$12.99</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 border p-4 rounded-md">
                        <RadioGroupItem value="standard" id="standard" className="mt-1" />
                        <div>
                          <Label htmlFor="standard" className="text-base font-medium">Standard</Label>
                          <div className="text-sm text-gray-600">
                            <p>2-3 business days</p>
                            <p className="font-semibold mt-1">$19.99</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 border p-4 rounded-md">
                        <RadioGroupItem value="express" id="express" className="mt-1" />
                        <div>
                          <Label htmlFor="express" className="text-base font-medium">Express</Label>
                          <div className="text-sm text-gray-600">
                            <p>Next business day</p>
                            <p className="font-semibold mt-1">$29.99</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 border p-4 rounded-md">
                        <RadioGroupItem value="priority" id="priority" className="mt-1" />
                        <div>
                          <Label htmlFor="priority" className="text-base font-medium">Priority</Label>
                          <div className="text-sm text-gray-600">
                            <p>Same day (local) or overnight</p>
                            <p className="font-semibold mt-1">$49.99</p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Additional Options</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <input 
                          type="checkbox" 
                          id="insurance"
                          name="insurance"
                          checked={additionalOptions.insurance}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 mt-1 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
                        />
                        <div>
                          <label htmlFor="insurance" className="block text-base font-medium">
                            Shipment Insurance
                          </label>
                          <p className="text-sm text-gray-600">
                            Protect your package up to $1000 against loss or damage
                            <span className="block font-semibold mt-1">+ $8.99</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <input 
                          type="checkbox" 
                          id="signature"
                          name="signature"
                          checked={additionalOptions.signature}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 mt-1 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
                        />
                        <div>
                          <label htmlFor="signature" className="block text-base font-medium">
                            Signature Required
                          </label>
                          <p className="text-sm text-gray-600">
                            Recipient signature required upon delivery
                            <span className="block font-semibold mt-1">+ $4.99</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <input 
                          type="checkbox" 
                          id="fragile"
                          name="fragile"
                          checked={additionalOptions.fragile}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 mt-1 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
                        />
                        <div>
                          <label htmlFor="fragile" className="block text-base font-medium">
                            Fragile Handling
                          </label>
                          <p className="text-sm text-gray-600">
                            Extra care for delicate items
                            <span className="block font-semibold mt-1">+ $6.99</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 4:
        const baseCost = serviceOption === 'economy' ? 12.99 : 
                          serviceOption === 'standard' ? 19.99 : 
                          serviceOption === 'express' ? 29.99 : 49.99;
                          
        const insuranceCost = additionalOptions.insurance ? 8.99 : 0;
        const signatureCost = additionalOptions.signature ? 4.99 : 0;
        const fragileCost = additionalOptions.fragile ? 6.99 : 0;
        
        const totalCost = baseCost + insuranceCost + signatureCost + fragileCost;
        
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Review & Payment</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-brand-orange/10 p-2 rounded mr-4 mt-1">
                        <Truck className="h-5 w-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium">Shipping Service</h4>
                        <p className="text-gray-600">
                          {serviceOption === 'economy' ? 'Economy (3-5 business days)' :
                           serviceOption === 'standard' ? 'Standard (2-3 business days)' :
                           serviceOption === 'express' ? 'Express (Next business day)' :
                           'Priority (Same day/overnight)'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-orange/10 p-2 rounded mr-4 mt-1">
                        <Package className="h-5 w-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium">Package Details</h4>
                        <p className="text-gray-600">
                          {packageDetails.packageType.charAt(0).toUpperCase() + packageDetails.packageType.slice(1)}, 
                          {packageDetails.weight ? ` ${packageDetails.weight} lbs, ` : ' '}
                          {packageDetails.length && packageDetails.width && packageDetails.height ? 
                            `${packageDetails.length}" × ${packageDetails.width}" × ${packageDetails.height}"` : ''}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-orange/10 p-2 rounded mr-4 mt-1">
                        <User className="h-5 w-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium">From</h4>
                        <p className="text-gray-600">
                          {senderInfo.name}<br />
                          {senderInfo.street}{senderInfo.street2 ? `, ${senderInfo.street2}` : ''}<br />
                          {senderInfo.city}, {senderInfo.state} {senderInfo.zip}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-orange/10 p-2 rounded mr-4 mt-1">
                        <MapPin className="h-5 w-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="font-medium">To</h4>
                        <p className="text-gray-600">
                          {receiverInfo.name}<br />
                          {receiverInfo.street}{receiverInfo.street2 ? `, ${receiverInfo.street2}` : ''}<br />
                          {receiverInfo.city}, {receiverInfo.state} {receiverInfo.zip}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                  
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3 border p-4 rounded-md">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 border p-4 rounded-md">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 border p-4 rounded-md">
                      <RadioGroupItem value="account" id="account" />
                      <Label htmlFor="account">
                        Billing Account #123456
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === 'card' && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <Input 
                          id="card-number"
                          placeholder="•••• •••• •••• ••••"
                          className="font-mono"
                        />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                          <Input 
                            id="expiry"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                          <Input 
                            id="cvc"
                            placeholder="•••"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                        <Input 
                          id="name-on-card"
                          placeholder="Full name as displayed on card"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Order Total</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Shipping Cost</span>
                    <span>${baseCost.toFixed(2)}</span>
                  </div>
                  
                  {additionalOptions.insurance && (
                    <div className="flex justify-between">
                      <span>Insurance</span>
                      <span>$8.99</span>
                    </div>
                  )}
                  
                  {additionalOptions.signature && (
                    <div className="flex justify-between">
                      <span>Signature Required</span>
                      <span>$4.99</span>
                    </div>
                  )}
                  
                  {additionalOptions.fragile && (
                    <div className="flex justify-between">
                      <span>Fragile Handling</span>
                      <span>$6.99</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 flex items-start mt-4">
                    <InfoIcon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>By completing this order, you agree to our Terms of Service and Shipping Policies.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Order Placed!",
      description: `Your shipment has been created. Tracking number: OI${Math.floor(Math.random() * 1000000000)}`,
      action: (
        <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="h-5 w-5 text-white" />
        </div>
      ),
    });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        className="py-12 bg-gray-100"
      >
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Create a <span className="text-brand-orange">Shipment</span>
          </h1>
          <p className="text-lg opacity-90 animate-fade-in">
            Fill out the information below to create a new shipment.
          </p>
        </div>
      </HeroSection>

      {/* Shipping Form Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              {[...Array(totalSteps)].map((_, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center relative"
                  style={{ width: '25%' }}
                >
                  <div className="flex-none">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep > index + 1 ? 'bg-brand-orange text-white' : 
                      currentStep === index + 1 ? 'bg-white border-2 border-brand-orange text-brand-orange' : 
                      'bg-gray-200 text-gray-500'
                    }`}>
                      {currentStep > index + 1 ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className={`text-xs font-medium mt-2 text-center ${
                    currentStep >= index + 1 ? 'text-brand-orange' : 'text-gray-500'
                  }`}>
                    {index === 0 ? 'Addresses' : 
                     index === 1 ? 'Package' : 
                     index === 2 ? 'Options' : 'Payment'}
                  </div>
                  
                  {index < totalSteps - 1 && (
                    <div 
                      className={`absolute h-0.5 top-5 left-[55%] right-0 -translate-y-1/2 ${
                        currentStep > index + 1 ? 'bg-brand-orange' : 'bg-gray-200'
                      }`}
                      style={{ width: '90%' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {getStepContent()}
            
            <div className="mt-10 flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep === totalSteps ? (
                <Button 
                  type="submit" 
                  className="bg-brand-orange hover:bg-brand-dark-orange text-white"
                >
                  Place Order
                </Button>
              ) : (
                <Button 
                  type="button" 
                  className="bg-brand-orange hover:bg-brand-dark-orange text-white"
                  onClick={handleNext}
                >
                  Continue
                </Button>
              )}
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Shipping;
