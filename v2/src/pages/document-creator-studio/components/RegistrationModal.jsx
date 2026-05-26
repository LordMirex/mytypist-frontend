import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const RegistrationModal = ({ isOpen, onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData?.password) {
      newErrors.password = 'Password is required';
    } else if (formData?.password?.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData?.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Mock registration process
    setTimeout(() => {
      setIsLoading(false);
      onRegister(formData);
      onClose();
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const benefits = [
    { icon: 'Save', text: 'Save and access your documents anytime' },
    { icon: 'History', text: 'Keep track of all your creations' },
    { icon: 'Zap', text: 'Get premium templates and features' },
    { icon: 'Users', text: 'Share and collaborate with others' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-xl shadow-brand max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Create Your Account</h2>
              <p className="text-sm text-text-secondary mt-1">
                Join thousands of users creating professional documents
              </p>
            </div>
            <Button variant="ghost" size="sm" iconName="X" onClick={onClose} />
          </div>
        </div>

        {/* Benefits */}
        <div className="p-6 bg-muted/30">
          <h3 className="font-medium text-foreground mb-3">Why create an account?</h3>
          <div className="space-y-2">
            {benefits?.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={benefit?.icon} size={16} className="text-primary" />
                </div>
                <span className="text-sm text-text-secondary">{benefit?.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <Input
            label="Full Name"
            type="text"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            placeholder="Enter your full name"
            error={errors?.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            placeholder="Enter your email"
            error={errors?.email}
            required
          />

          <Input
            label="Password"
            type="password"
            value={formData?.password}
            onChange={(e) => handleInputChange('password', e?.target?.value)}
            placeholder="Create a password"
            description="Must be at least 6 characters"
            error={errors?.password}
            required
          />

          <Checkbox
            label="I agree to the Terms of Service and Privacy Policy"
            checked={formData?.agreeToTerms}
            onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
            error={errors?.agreeToTerms}
            required
          />

          <Button
            type="submit"
            variant="default"
            fullWidth
            loading={isLoading}
            className="shadow-conversion mt-6"
          >
            Create Free Account
          </Button>
        </form>

        {/* Footer */}
        <div className="p-6 pt-0 text-center">
          <p className="text-sm text-text-secondary">
            Already have an account?{' '}
            <button
              type="button"
              className="text-primary hover:underline font-medium"
              onClick={() => {/* Handle sign in */}}
            >
              Sign in
            </button>
          </p>
        </div>

        {/* Social Registration */}
        <div className="p-6 pt-0">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-surface text-text-secondary">Or continue with</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              fullWidth
              iconName="Mail"
              onClick={() => {/* Handle Google signup */}}
            >
              Google
            </Button>
            <Button
              variant="outline"
              fullWidth
              iconName="Github"
              onClick={() => {/* Handle GitHub signup */}}
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;