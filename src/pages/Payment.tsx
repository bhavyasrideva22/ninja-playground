import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  ArrowLeft, 
  CreditCard,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Star,
  Trophy,
  Lock,
  Eye,
  EyeOff,
  Calendar,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  Info,
  Zap,
  Gift,
  Percent
} from "lucide-react";
import { useAdvancedScrollAnimation } from "@/hooks/useAdvancedScrollAnimation";
import { useFormSubmission } from "@/hooks/useButtonInteraction";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId');
  const [showPassword, setShowPassword] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    address: '',
    city: '',
    pincode: ''
  });

  // Button interactions
  const { isLoading: isPaymentLoading, handleFormSubmit } = useFormSubmission({
    loadingText: 'Processing payment...',
    successText: 'Payment successful! Redirecting...',
    errorText: 'Payment failed. Please try again.',
    onSuccess: () => {
      // Navigate to success page after successful payment
      setTimeout(() => {
        navigate(`/payment-success?courseId=${courseId}`);
      }, 2000);
    }
  });

  // Scroll animations
  const { ref: heroRef, animationClasses: heroClasses } = useAdvancedScrollAnimation({
    animationType: 'slideUp',
    delay: 100
  });

  // Mock course data - in real app, this would come from API
  const courseData = {
    id: courseId || '1',
    title: "Full Stack Web Development Job Bootcamp with GenAI",
    description: "Master frontend, backend, and AI integration for modern web applications",
    duration: "6 months",
    students: "15,000+",
    rating: 4.8,
    price: "₹99,999",
    originalPrice: "₹1,49,999",
    discount: "33% OFF",
    features: [
      "Live classes with industry experts",
      "1:1 mentorship sessions",
      "Job assistance and placement support",
      "GenAI integration projects",
      "Real-world project portfolio",
      "Interview preparation",
      "Resume building workshop",
      "Lifetime access to course content"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = async () => {
    // Validate form data
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in: ${missingFields.join(', ')}`);
      return;
    }

    if (paymentMethod === 'card') {
      const cardFields = ['cardNumber', 'expiryDate', 'cvv', 'cardName'];
      const missingCardFields = cardFields.filter(field => !formData[field as keyof typeof formData]);
      
      if (missingCardFields.length > 0) {
        alert(`Please fill in card details: ${missingCardFields.join(', ')}`);
        return;
      }
    }

    await handleFormSubmit(formData);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/offerings">
            <EnhancedButton
              variant="ghost"
              icon={<ArrowLeft className="w-4 h-4" />}
              className="text-gray-700 hover:text-primary"
            >
              Back to Courses
            </EnhancedButton>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-primary/10" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center ${heroClasses}`}>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              Secure Payment
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Complete Your Enrollment
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure payment gateway with 256-bit SSL encryption. Your data is protected.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Details */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Course Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Course Image */}
                <div className="relative">
                  <img 
                    src={courseData.image} 
                    alt={courseData.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    {courseData.discount}
                  </Badge>
                </div>

                {/* Course Info */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">{courseData.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{courseData.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{courseData.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{courseData.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{courseData.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {courseData.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Original Price:</span>
                    <span className="line-through text-muted-foreground">{courseData.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Discount:</span>
                    <span className="text-green-600 font-semibold">{courseData.discount}</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Final Price:</span>
                    <span className="text-primary text-2xl">{courseData.price}</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span>256-bit SSL encrypted payment</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        UPI Payment
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Card Details */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardName">Cardholder Name *</Label>
                      <Input
                        id="cardName"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        placeholder="Name on card"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <div className="relative">
                          <Input
                            id="cvv"
                            type={showPassword ? "text" : "password"}
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                            placeholder="123"
                            maxLength={4}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* UPI Details */}
                {paymentMethod === 'upi' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="upiId">UPI ID *</Label>
                      <Input
                        id="upiId"
                        placeholder="example@upi"
                      />
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-blue-800">
                        <Info className="w-4 h-4" />
                        <span className="text-sm font-medium">UPI Payment Instructions</span>
                      </div>
                      <p className="text-sm text-blue-700 mt-2">
                        After clicking "Pay Now", you'll be redirected to your UPI app to complete the payment.
                      </p>
                    </div>
                  </div>
                )}

                {/* Billing Address */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Enter your address"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="Enter your city"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                          placeholder="Enter pincode"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and{' '}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>

                {/* Payment Button */}
                <EnhancedButton
                  size="lg"
                  variant="gradient"
                  loading={isPaymentLoading}
                  onClick={handlePayment}
                  className="w-full group"
                >
                  <Lock className="w-5 h-5" />
                  Pay Securely - {courseData.price}
                </EnhancedButton>

                {/* Security Notice */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">Secure Payment</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    Your payment information is encrypted and secure. We never store your card details.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
