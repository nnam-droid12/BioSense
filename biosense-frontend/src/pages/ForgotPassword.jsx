import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setLoading(true);
    resetMessages();

    try {
      const response = await fetch(
        `https://biosense-service.onrender.com/api/v1/forgot-password/verify-email/${email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        setSuccess('OTP sent to your email successfully!');
        setTimeout(() => {
          setStep(2);
        }, 1500);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to send OTP. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError('Please enter the OTP');
      return;
    }

    setLoading(true);
    resetMessages();

    try {
      const response = await fetch(
        `https://biosense-service.onrender.com/api/v1/forgot-password/verify-otp/${otp}/${email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        setSuccess('OTP verified successfully!');
        setTimeout(() => {
          setStep(3);
        }, 1500);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!password || !repeatedPassword) {
      setError('Please fill in both password fields');
      return;
    }

    if (password !== repeatedPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    resetMessages();

    try {
      const response = await fetch(
        `https://biosense-service.onrender.com/api/v1/forgot-password/change-password/${email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password: password,
            repeatedPassword: repeatedPassword,
          }),
        }
      );

      if (response.ok) {
        setSuccess('Password changed successfully!');
       
        setTimeout(() => {
          window.location.href = '/login'; 
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to change password. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const goToPreviousStep = () => {
    resetMessages();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return 'Verify Email';
      case 2:
        return 'Verify OTP';
      case 3:
        return 'Change Password';
      default:
        return 'Forgot Password';
    }
  };

  const getStepDescription = () => {
    switch (step) {
      case 1:
        return 'Enter your email address to receive an OTP';
      case 2:
        return 'Enter the OTP sent to your email';
      case 3:
        return 'Create a new password for your account';
      default:
        return '';
    }
  };

  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div className="max-w-lg w-full bg-white rounded-lg shadow-lg px-8 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          {step > 1 && (
            <button
              onClick={goToPreviousStep}
              className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-800 transition-colors"
              disabled={loading}
            >
              <ArrowLeft size={20} />
            </button>
          )}
          
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {step === 1 && <Mail className="w-8 h-8 text-green-600" />}
              {step === 2 && <CheckCircle className="w-8 h-8 text-green-600" />}
              {step === 3 && <Lock className="w-8 h-8 text-green-600" />}
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">{getStepTitle()}</h1>
          <p className="text-gray-600">{getStepDescription()}</p>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6 mb-8">
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-2 rounded-full ${
                    i <= step ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
            {success}
          </div>
        )}

        {/* Step 1: Email Verification */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-16 pr-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                  placeholder="Email address"
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleVerifyEmail}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors text-center text-lg tracking-widest"
                placeholder="000000"
                maxLength="6"
                disabled={loading}
              />
              <p className="text-sm text-gray-500 mt-2">
                OTP sent to: <span className="font-medium">{email}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={handleVerifyOTP}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-green-600 text-sm hover:text-green-700 transition-colors"
              disabled={loading}
            >
              Resend OTP
            </button>
          </div>
        )}

        {/* Step 3: Change Password */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                  placeholder="Enter new password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="repeatedPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showRepeatedPassword ? 'text' : 'password'}
                  id="repeatedPassword"
                  value={repeatedPassword}
                  onChange={(e) => setRepeatedPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                  placeholder="Confirm new password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowRepeatedPassword(!showRepeatedPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showRepeatedPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleChangePassword}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {loading ? 'Changing Password...' : 'Change Password'}
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <a href="/login" className="text-green-600 hover:text-green-700 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;