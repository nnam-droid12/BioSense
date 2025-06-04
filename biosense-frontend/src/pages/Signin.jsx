import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'https://biosense-service.onrender.com/api/v1/auth/login',
        formData
      );

      if (response.status === 200) {
      
        if (response.data.accessToken) {
          localStorage.setItem('authToken', response.data.accessToken);
        }
        alert('Login successful!');
        navigate('/user-dashboard'); 
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left side image with animations */}
      <div className="hidden lg:block lg:w-1/2 relative">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-2/5 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute bottom-1/5 right-1/5 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '2.3s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
        </div>

        <img
          src="/med-tech.jpg" 
          alt="Healthcare Tech"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 hover:scale-110 transition-transform duration-[3000ms] ease-out"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-teal-900/60 to-cyan-900/70 animate-pulse" style={{animationDuration: '4s'}}></div>
        
        {/* Content with slide-in animation */}
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
          <div className="text-white text-center px-8 max-w-lg transform translate-y-0 animate-slide-up">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight animate-fade-in-delay">
              Welcome Back
            </h1>
            <p className="text-lg xl:text-xl opacity-90 leading-relaxed animate-fade-in-delay-2">
              Sign in to access your secure dashboard.
            </p>
            
            {/* Animated pulse ring */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
                <div className="absolute inset-0 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 w-8 h-8 bg-white/30 rounded-full"></div>
              </div>
            </div>

            {/* Floating icons */}
            <div className="absolute top-10 left-10 animate-float">
              <div className="w-8 h-8 bg-white/20 rounded-lg rotate-12"></div>
            </div>
            <div className="absolute bottom-10 right-10 animate-float-delayed">
              <div className="w-6 h-6 bg-white/15 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side form with animations */}
      <div className="flex-1 lg:w-1/2 flex flex-col overflow-hidden animate-slide-in-right">
        <div className="flex-1 flex items-center justify-center bg-gray-50 px-10 py-16 overflow-y-auto">
          <div className="w-full max-w-xl animate-fade-in-up">
            {/* Mobile header for small screens */}
            <div className="lg:hidden text-center mb-12 animate-bounce-in">
              <h1 className="text-3xl font-bold text-slate-700 mb-3">BioSense</h1>
              <p className="text-gray-600 text-lg">Sign in to your account</p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-16 text-center animate-slide-down">
              Sign In
            </h2>

            {error && (
              <div className="mb-10 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg text-base animate-shake">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-5 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 text-gray-900 text-lg hover:border-teal-400 hover:shadow-md"
                 
                />
              </div>

              <div className="animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-5 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 text-gray-900 text-lg hover:border-teal-400 hover:shadow-md"
                
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right animate-slide-in-left" style={{animationDelay: '0.5s'}}>
                <a 
                  href="/forgot-password" 
                  className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-300 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-lg animate-pulse-slow"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-12 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <p className="text-lg text-gray-600">
                Don't have an account?{' '}
                <a 
                  href="/signup" 
                  className="text-teal-700 hover:text-teal-900 font-semibold transition-colors duration-300 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </div>

            {/* Social Login Options (Optional) */}
            <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">Quick Demo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setFormData({ email: 'technnam@gmail.com', password: '123456' })}
                  className="text-sm text-teal-600 hover:text-teal-800 font-medium transition-colors duration-300 hover:underline"
                >
                  Fill demo credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from { 
            opacity: 0;
            transform: translateY(-30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0;
            transform: translateX(50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-in {
          0% { 
            opacity: 0;
            transform: scale(0.3);
          }
          50% { 
            opacity: 1;
            transform: scale(1.05);
          }
          70% { 
            transform: scale(0.9);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(12deg);
          }
          50% { 
            transform: translateY(-20px) rotate(12deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-15px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }
        
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 1s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 1.5s both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
};

export default Signin;