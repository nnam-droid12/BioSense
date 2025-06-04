import React from 'react';
import { Clock, Microscope, Headphones, Activity, ChevronRight, Menu, X, Star, Users, Award, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const navigate = useNavigate();

  const features = [
    {
      icon: <Clock className="w-16 h-16" />,
      title: "Interactive Timeline",
      description: "Explore key discoveries and innovations in medical history through an immersive, interactive timeline showcasing significant advancements and their lasting impact on modern medicine."
    },
    {
      icon: <Microscope className="w-16 h-16" />,
      title: "3D Medical Models",
      description: "Examine detailed 3D models of medical instruments and anatomical structures, providing a visual and immersive learning experience that brings history to life."
    },
    {
      icon: <Headphones className="w-16 h-16" />,
      title: "Historical Audio Recordings",
      description: "Listen to authentic recordings of historical medical voices, including interviews with patients, physicians, and medical professionals from the past."
    },
    {
      icon: <Activity className="w-16 h-16" />,
      title: "Interactive Simulations",
      description: "Experience hands-on medical procedure simulations, learn about risks and benefits, and make informed decisions through interactive learning modules."
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); 
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/98 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  BioSense
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
            <div className="flex items-center gap-8">
                <button 
                onClick={() => handleNavigation('/')}
                className="text-green-700 hover:text-green-800 font-bold text-lg transition-all duration-300 border-b-3 border-green-700 pb-1"
                >
                Home
                </button>
                <button 
                onClick={() => handleNavigation('/signup')}
                className="text-gray-700 hover:text-green-700 font-semibold text-lg transition-all duration-300 hover:bg-green-50 px-6 py-3 rounded-xl"
                >
                SignUp
                </button>
                <button 
                onClick={() => handleNavigation('/signin')}
                className="text-gray-700 hover:text-green-700 font-semibold text-lg transition-all duration-300 hover:bg-green-50 px-6 py-3 rounded-xl"
                >
                SignIn
                </button>
            </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-700 p-4 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-6 py-8 space-y-6 bg-white border-t border-gray-100 shadow-2xl">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-green-700 block px-6 py-4 text-xl font-bold w-full text-left rounded-xl bg-green-50"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/signup')}
                className="text-gray-700 hover:text-green-700 hover:bg-green-50 block px-6 py-4 text-xl font-semibold w-full text-left transition-all duration-300 rounded-xl"
              >
                SignUp
              </button>
              <button 
                onClick={() => handleNavigation('/signin')}
                className="text-gray-700 hover:text-green-700 hover:bg-green-50 block px-6 py-4 text-xl font-semibold w-full text-left transition-all duration-300 rounded-xl"
              >
                SignIn
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Cool Background Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
          {/* Medical Cross Pattern Animation */}
          <div className="absolute inset-0 opacity-10">
            <div className="medical-pattern animate-medical-drift"></div>
          </div>
          
          {/* Floating Medical Icons */}
          <div className="absolute inset-0">
            <div className="floating-icon animate-float-1" style={{top: '10%', left: '10%'}}>
              <Microscope className="w-8 h-8 text-green-400 opacity-30" />
            </div>
            <div className="floating-icon animate-float-2" style={{top: '20%', right: '15%'}}>
              <Activity className="w-6 h-6 text-gray-400 opacity-40" />
            </div>
            <div className="floating-icon animate-float-3" style={{bottom: '30%', left: '20%'}}>
              <Clock className="w-10 h-10 text-green-500 opacity-25" />
            </div>
            <div className="floating-icon animate-float-4" style={{bottom: '15%', right: '10%'}}>
              <Headphones className="w-7 h-7 text-gray-500 opacity-35" />
            </div>
            <div className="floating-icon animate-float-5" style={{top: '60%', left: '5%'}}>
              <Microscope className="w-5 h-5 text-green-600 opacity-30" />
            </div>
            <div className="floating-icon animate-float-6" style={{top: '40%', right: '5%'}}>
              <Activity className="w-9 h-9 text-gray-400 opacity-20" />
            </div>
          </div>

          {/* Gradient Overlay Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-gray-900/20 animate-gradient-shift"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12 py-40 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-none text-white">
                Discover the Journey of 
                <span className="text-green-400 block mt-4 animate-text-glow bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                    Medical History
                </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up delay-300">
                Explore centuries of medical breakthroughs through interactive timelines, immersive 3D models, 
                historical audio recordings, and hands-on simulations that bring the past to life.
                </p>
            <div className="animate-fade-in-up delay-500">
              <button 
                onClick={() => handleNavigation('/signup')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-black py-8 px-16 rounded-3xl text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-green-500/30 inline-flex items-center group animate-pulse-button"
              >
                Get Started Now
                <ChevronRight className="ml-4 w-8 h-8 group-hover:translate-x-3 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-8 h-14 border-3 border-green-400 rounded-full flex justify-center">
            <div className="w-2 h-6 bg-green-400 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Large Spacing Between Sections */}
      <div className="h-32 bg-gradient-to-b from-gray-900/5 to-transparent"></div>

      {/* Features Section */}
      <section className="py-40 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-32 animate-fade-in-up">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-12">
              Features
            </h2>
            <p className="text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Immerse yourself in medical history through cutting-edge technology and interactive experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20 lg:gap-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-12 rounded-3xl border-2 border-gray-200 hover:border-green-400 transition-all duration-700 hover:shadow-3xl bg-gradient-to-br from-white via-gray-50 to-white transform hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex items-center mb-10">
                  <div className="p-8 bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-green-700 rounded-3xl group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-green-700 group-hover:text-white transition-all duration-700 transform group-hover:rotate-12 group-hover:scale-110 shadow-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 ml-8">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-xl leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Spacing */}
      <div className="h-32 bg-gradient-to-b from-gray-50 to-gray-900"></div>

      {/* Stats Section - Trusted by Thousands */}
      <section className="py-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-green-500/8 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-white">Trusted by Thousands</h2>
            <p className="text-3xl text-gray-300 font-light">Join our growing community of medical history enthusiasts</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-16">
            {[
              { number: "500+", label: "Historical Events", icon: <Clock className="w-12 h-12" /> },
              { number: "100+", label: "3D Models", icon: <Microscope className="w-12 h-12" /> },
              { number: "200+", label: "Audio Recordings", icon: <Headphones className="w-12 h-12" /> },
              { number: "50+", label: "Simulations", icon: <Activity className="w-12 h-12" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex justify-center mb-8">
                  <div className="p-6 bg-green-500/20 rounded-3xl text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 transform group-hover:scale-125">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-7xl font-black text-green-400 mb-6 group-hover:scale-110 transition-transform duration-500">{stat.number}</div>
                <div className="text-gray-300 text-2xl font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Spacing */}
      <div className="h-32 bg-gradient-to-b from-gray-900 to-green-600"></div>

      {/* CTA Section */}
      <section className="py-40 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Animated Medical Icon/Illustration */}
            <div className="flex justify-center lg:justify-start animate-fade-in-left">
              <div className="relative">
                <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center animate-pulse-slow">
                  <div className="w-64 h-64 bg-white/30 rounded-full flex items-center justify-center animate-spin-slow">
                    <Microscope className="w-32 h-32 text-gray-900 animate-float" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center animate-bounce">
                  <Play className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-left animate-fade-in-right">
              <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
                Ready to Explore Medical History?
              </h2>
              <p className="text-3xl text-gray-100 mb-12 leading-relaxed font-light">
                Join thousands of students, educators, and medical professionals discovering the fascinating world of medical heritage.
              </p>
              <div className="space-y-6">
                <button 
                  onClick={() => handleNavigation('/signup')}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-gray-900/50 inline-flex items-center group w-full lg:w-auto justify-center lg:justify-start"
                >
                  Start Your Journey
                  <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-3 transition-transform duration-300" />
                </button>
                <p className="text-gray-100 text-lg font-medium">✨ Free 14-day trial • No credit card required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Spacing */}
      <div className="h-32 bg-gradient-to-b from-green-800 to-gray-900"></div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-32 border-t-4 border-green-600">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="col-span-2">
              <h3 className="text-5xl font-black mb-8 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                BioSense
              </h3>
              <p className="text-gray-400 mb-12 max-w-lg text-xl leading-relaxed font-light">
                Bridging the past and present of medical knowledge through immersive technology and interactive learning experiences.
              </p>
              <div className="flex space-x-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer shadow-xl">
                  B
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-3xl font-bold mb-12 text-green-400">Quick Links</h4>
              <ul className="space-y-6">
                <li><button onClick={() => handleNavigation('/')} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl font-medium">Home</button></li>
                <li><button onClick={() => handleNavigation('/features')} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl font-medium">Features</button></li>
                <li><button onClick={() => handleNavigation('/about')} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl font-medium">About</button></li>
                <li><button onClick={() => handleNavigation('/contact')} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl font-medium">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-3xl font-bold mb-12 text-green-400">Account</h4>
              <ul className="space-y-6">
                <li><button onClick={() => handleNavigation('/signin')} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl font-medium">Sign In</button></li>
                <li><button onClick={() => handleNavigation('/signup')} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl font-medium">Sign Up</button></li>
                <li><button onClick={() => handleNavigation('/help')} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl font-medium">Help</button></li>
                <li><button onClick={() => handleNavigation('/privacy')} className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xl font-medium">Privacy</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-20 pt-16 text-center">
            <p className="text-gray-400 text-xl font-light">
              © 2025 BioSense. All rights reserved. | Exploring medical heritage through technology.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
          }
          50% {
            text-shadow: 0 0 40px rgba(34, 197, 94, 0.8);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-button {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes medical-drift {
          0% {
            transform: translateX(-100px) translateY(-100px) rotate(0deg);
          }
          25% {
            transform: translateX(100px) translateY(-50px) rotate(90deg);
          }
          50% {
            transform: translateX(50px) translateY(100px) rotate(180deg);
          }
          75% {
            transform: translateX(-50px) translateY(50px) rotate(270deg);
          }
          100% {
            transform: translateX(-100px) translateY(-100px) rotate(360deg);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) translateX(20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) translateX(-20px) rotate(240deg);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) translateX(-30px) rotate(180deg);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(25px) translateX(25px) rotate(90deg);
          }
          75% {
            transform: translateY(-25px) translateX(-15px) rotate(270deg);
          }
        }

        @keyframes float-4 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          40% {
            transform: translateY(-35px) translateX(15px) rotate(144deg);
          }
          80% {
            transform: translateY(15px) translateX(-25px) rotate(288deg);
          }
        }

        @keyframes float-5 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          60% {
            transform: translateY(30px) translateX(-20px) rotate(216deg);
          }
        }

        @keyframes float-6 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          30% {
            transform: translateY(-20px) translateX(35px) rotate(108deg);
          }
          70% {
            transform: translateY(25px) translateX(10px) rotate(252deg);
          }
        }

        .medical-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(156, 163, 175, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 3px, transparent 3px);
          background-size: 100px 100px, 150px 150px, 200px 200px;
          width: 200%;
          height: 200%;
        }

        .floating-icon {
          position: absolute;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-button {
          animation: pulse-button 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-medical-drift {
          animation: medical-drift 30s linear infinite;
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 15s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 12s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 18s ease-in-out infinite;
        }

        .animate-float-4 {
          animation: float-4 14s ease-in-out infinite;
        }

        .animate-float-5 {
          animation: float-5 16s ease-in-out infinite;
        }

        .animate-float-6 {
          animation: float-6 13s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .border-b-3 {
          border-bottom-width: 3px;
        }

        .border-3 {
          border-width: 3px;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

         `}</style>
    </div>
  );
};

export default Home;      