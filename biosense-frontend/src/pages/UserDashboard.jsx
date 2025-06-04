import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Menu, X, List, Eye, FileText, Brain, LogOut } from 'lucide-react';
import ViewTimelineEvents from './ViewTimelineEvent';
import ViewProcedures from './ViewProcedure';
import MedicalHistoryRecording from './MedicalHistoryRecording';
import Explore3DAnatomy from './Explore3DAnatomy';

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('view-timeline');
    const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('authToken'); 
   
    
    navigate('/'); 
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-20'} bg-gradient-to-b from-gray-800 to-gray-900 text-white transition-all duration-300 ease-in-out flex-shrink-0 shadow-2xl flex flex-col`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className={`${sidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>
              <h2 className="font-bold text-3xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                BioSense
              </h2>
              <p className="text-gray-400 text-sm mt-1"></p>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-3 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        <nav className="mt-16 flex-1">
          <div style={{ marginBottom: '3rem' }}>
            <button
              onClick={() => setCurrentView('view-timeline')}
              className={`w-full flex items-center px-6 py-5 text-left text-lg hover:bg-gray-700 transition-all duration-200 rounded-lg mx-2 ${
                currentView === 'view-timeline' ? 'bg-green-600' : ''
              }`}
            >
              <List size={24} />
              {sidebarOpen && <span className="ml-4">View Medical Timeline Events</span>}
            </button>
          </div>
          
          <div style={{ marginBottom: '3rem' }}>
            <button
              onClick={() => setCurrentView('view-procedures')}
              className={`w-full flex items-center px-6 py-5 text-left text-lg hover:bg-gray-700 transition-all duration-200 rounded-lg mx-2 ${
                currentView === 'view-procedures' ? 'bg-green-600' : ''
              }`}
            >
              <Eye size={24} />
              {sidebarOpen && <span className="ml-4">View Medical Procedures</span>}
            </button>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <button
              onClick={() => setCurrentView('medical-history')}
              className={`w-full flex items-center px-6 py-5 text-left text-lg hover:bg-gray-700 transition-all duration-200 rounded-lg mx-2 ${
                currentView === 'medical-history' ? 'bg-green-600' : ''
              }`}
            >
              <FileText size={24} />
              {sidebarOpen && <span className="ml-4">Medical History Recording</span>}
            </button>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <button
              onClick={() => setCurrentView('3d-anatomy')}
              className={`w-full flex items-center px-6 py-5 text-left text-lg hover:bg-gray-700 transition-all duration-200 rounded-lg mx-2 ${
                currentView === '3d-anatomy' ? 'bg-green-600' : ''
              }`}
            >
              <Brain size={24} />
              {sidebarOpen && <span className="ml-4">Explore 3D Anatomy</span>}
            </button>
          </div>
        </nav>

        {/* Logout Button at Bottom */}
        <div className="p-6 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-5 text-left text-lg hover:bg-green-600 transition-all duration-200 rounded-lg text-green-400 hover:text-white hover:scale-105"
          >
            <LogOut size={24} />
            {sidebarOpen && <span className="ml-4">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="p-12 h-full">
          {currentView === 'view-timeline' && <ViewTimelineEvents />}
          {currentView === 'view-procedures' && <ViewProcedures />}
          {currentView === 'medical-history' && <MedicalHistoryRecording />}
          {currentView === '3d-anatomy' && <Explore3DAnatomy />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;