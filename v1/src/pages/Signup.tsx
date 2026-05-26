
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '@/components/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Mail, Lock, User, Check, X, AlertCircle } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'Contains number', met: /\d/.test(formData.password) },
    { text: 'Contains special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) }
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRequirements.every(req => req.met)) {
      newErrors.password = 'Password does not meet all requirements';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup attempt:', formData);
      // Handle successful signup logic here
    }, 2000);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const passwordStrength = passwordRequirements.filter(req => req.met).length;
  const strengthColors = ['bg-red-500', 'bg-red-400', 'bg-yellow-500', 'bg-yellow-400', 'bg-green-500'];
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <AuthLayout title="Create Account - MyTypist" description="Join MyTypist to create professional documents with ease">
      <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-gray-900">Create your account</CardTitle>
          <p className="text-gray-600 mt-2">Join thousands of professionals creating better documents</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className={`pl-10 h-12 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-500'}`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className={`pl-10 h-12 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-500'}`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  className={`pl-10 pr-12 h-12 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-500'}`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {formData.password && (
                <div className="space-y-3 mt-3">
                  {/* Password Strength Indicator */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">Password Strength:</span>
                      <span className={`text-xs font-medium ${passwordStrength >= 4 ? 'text-green-600' : passwordStrength >= 3 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {strengthLabels[passwordStrength - 1] || 'Very Weak'}
                      </span>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 flex-1 rounded-full transition-colors ${
                            i < passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Password Requirements */}
                  <div className="space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center text-xs">
                        {req.met ? (
                          <Check className="w-3 h-3 mr-2 text-green-500" />
                        ) : (
                          <X className="w-3 h-3 mr-2 text-gray-300" />
                        )}
                        <span className={req.met ? 'text-green-600' : 'text-gray-500'}>{req.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {errors.password && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                  className={`pl-10 pr-12 h-12 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-500'}`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <X className="w-4 h-4 mr-1" />
                  Passwords do not match
                </p>
              )}
              {formData.confirmPassword && formData.password === formData.confirmPassword && formData.password && (
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <Check className="w-4 h-4 mr-1" />
                  Passwords match
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded mt-1 transition-colors"
                />
                <label htmlFor="terms" className="ml-3 block text-sm text-gray-700 leading-relaxed">
                  I agree to the{' '}
                  <Link to="/legals" className="text-brand-600 hover:text-brand-500 font-medium transition-colors">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/legals" className="text-brand-600 hover:text-brand-500 font-medium transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.terms}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-700 h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={isLoading || !agreedToTerms}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating your account...
                </div>
              ) : (
                'Create your MyTypist account'
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">Or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button variant="outline" className="w-full h-12 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full h-12 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-brand-600 hover:text-brand-500 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default Signup;
