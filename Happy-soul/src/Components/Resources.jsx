import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import happyLogo from './happy_logo.svg'
import studyImage from './studyImage.jpg'
import careerImage from './career.jpg'



const ResourcesNavbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-6 md:px-16 bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      {/* Logo Area */}
      <div className="flex items-center">
      <img className="h-15 w-15" src={happyLogo} alt="Happy Soul Logo"></img>
        <span className="text-2xl font-nav text-[#0F2A3F] ml-2">
          Happy Soul
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-12">
        <a 
          href="/landing.html" 
          className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
        >
          Home
        </a>
        <a 
          href="#resources" 
          className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
        >
          Resources
        </a>
        <a 
          href="#book" 
          className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
        >
          Book a Session
        </a>
        <a 
          href="#about" 
          className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
        >
          About
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <a 
          href="#login" 
          className="text-[#0F2A3F] border border-[#6bb7a2] px-4 py-2 rounded-md font-nav hover:bg-blue-50 transition-colors"
        >
          Login
        </a>
        <a 
          href="#signup" 
          className="bg-[#6bb7a2] text-white px-4 py-2 rounded-md font-nav hover:bg-[#6bb7a2] transition-colors"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

const Resources = () => {
  // State to store the selected mood
  const [selectedMood, setSelectedMood] = useState(null);
  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState('grid');

  // Function to handle mood selection
  const handleMoodSelection = (mood) => {
    setSelectedMood(prevMood => (prevMood === mood ? null : mood));
    console.log(`Selected mood: ${mood}`);
    // We'll use this mood later to recommend resources
  };

  return (
    <div className="pt-24 bg-gray-50 min-h-screen"> {/* Add padding-top to account for fixed navbar */}
      <ResourcesNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Mood Selection */}
          <div className="md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              
              <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
              
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleMoodSelection('Happy')}
                  className={`flex flex-col items-center justify-center p-3 rounded-md transition-colors ${selectedMood === 'Happy' ? 'bg-teal-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <span className="text-2xl mb-1">😊</span>
                  <span className="text-sm">Happy</span>
                </button>
                
                <button 
                  onClick={() => handleMoodSelection('Stressed')}
                  className={`flex flex-col items-center justify-center p-3 rounded-md transition-colors ${selectedMood === 'Stressed' ? 'bg-teal-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <span className="text-2xl mb-1">😣</span>
                  <span className="text-sm">Stressed</span>
                </button>
                
                <button 
                  onClick={() => handleMoodSelection('Anxious')}
                  className={`flex flex-col items-center justify-center p-3 rounded-md transition-colors ${selectedMood === 'Anxious' ? 'bg-teal-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <span className="text-2xl mb-1">😰</span>
                  <span className="text-sm">Anxious</span>
                </button>
                
                <button 
                  onClick={() => handleMoodSelection('Motivated')}
                  className={`flex flex-col items-center justify-center p-3 rounded-md transition-colors ${selectedMood === 'Motivated' ? 'bg-teal-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <span className="text-2xl mb-1">😤</span>
                  <span className="text-sm">Motivated</span>
                </button>
                
                <button 
                  onClick={() => handleMoodSelection('Sad')}
                  className={`flex flex-col items-center justify-center p-3 rounded-md transition-colors ${selectedMood === 'Sad' ? 'bg-teal-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <span className="text-2xl mb-1">😔</span>
                  <span className="text-sm">Sad</span>
                </button>
                
                <button 
                  onClick={() => handleMoodSelection('Confused')}
                  className={`flex flex-col items-center justify-center p-3 rounded-md transition-colors ${selectedMood === 'Confused' ? 'bg-teal-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <span className="text-2xl mb-1">😕</span>
                  <span className="text-sm">Confused</span>
                </button>
              </div>

              {/* Categories Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="mental-health" className="mr-2" />
                    <label htmlFor="mental-health">Mental Health</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="study-stress" className="mr-2" />
                    <label htmlFor="study-stress">Study Stress</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="career-guide" className="mr-2" />
                    <label htmlFor="career-guide">Career Guide</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content - Resources */}
          <div className="md:w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Knowledge Resources</h1>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-my-teal  text-white' : 'bg-gray-200'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-my-teal text-white' : 'bg-gray-200'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">Expert articles, tips and advice from mental health professionals.</p>
              
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
                {/* Resource Card 1 */}
                <div className="bg-white border-my-teal rounded-lg overflow-hidden shadow-sm">
                  <img src={studyImage} alt="Resource" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <div className="flex space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Exam Anxiety</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Mental Health</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Managing Exam Stress: Practical Techniques</h3>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-2">
                        <span>👩‍⚕️</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Dr. Sarah Johnson</p>
                        <p className="text-gray-600 text-xs">Psychologist</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Resource Card 2 */}
                <div className="bg-white border-my-teal rounded-lg overflow-hidden shadow-sm">
                  <img src={careerImage} alt="Resource" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <div className="flex space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Career Advice</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Confidence</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Finding Your Career Path: A Guide for Students</h3>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                        <span>👨‍💼</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Mark Williams</p>
                        <p className="text-gray-600 text-xs">Career Counsellor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;