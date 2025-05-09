import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import happyLogo from './happy_logo.svg';

const Auth = () => {
  // State for tracking active tab and form data
  const [activeTab, setActiveTab] = useState('student');
  const [activeForm, setActiveForm] = useState('login');
  
  // Form data states
  const [studentLoginData, setStudentLoginData] = useState({ email: '', password: '' });
  const [studentSignupData, setStudentSignupData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [proLoginData, setProLoginData] = useState({ email: '', password: '' });
  const [proSignupData, setProSignupData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    profession: '',
    license: ''
  });

  // Handle form input changes
  const handleStudentLoginChange = (e) => {
    const { name, value } = e.target;
    setStudentLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleStudentSignupChange = (e) => {
    const { name, value } = e.target;
    setStudentSignupData(prev => ({ ...prev, [name]: value }));
  };

  const handleProLoginChange = (e) => {
    const { name, value } = e.target;
    setProLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleProSignupChange = (e) => {
    const { name, value } = e.target;
    setProSignupData(prev => ({ ...prev, [name]: value }));
  };

  // Form submission handlers
  const handleStudentLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Student login submitted:', studentLoginData);
    // Add authentication logic here
  };

  const handleStudentSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Student signup submitted:', studentSignupData);
    // Add registration logic here
  };

  const handleProLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Professional login submitted:', proLoginData);
    // Add authentication logic here
  };

  const handleProSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Professional signup submitted:', proSignupData);
    // Add registration logic here
  };

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between h-20 px-6 md:px-16 bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
        <div className="flex items-center">
          <img className="h-15 w-15" src={happyLogo} alt="Happy Soul Logo" />
          <span className="text-2xl font-nav text-[#0F2A3F] ml-2">
            Happy Soul
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <a 
            href="/landing.html" 
            className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
          >
            Home
          </a>
          <a 
            href="/resources" 
            className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
          >
            Resources
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* User Type Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 text-center font-nav text-lg transition-colors ${
                activeTab === 'student' 
                  ? 'bg-[#83C5B3] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('student')}
            >
              Student User
            </button>
            <button
              className={`flex-1 py-4 text-center font-nav text-lg transition-colors ${
                activeTab === 'professional' 
                  ? 'bg-[#83C5B3] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('professional')}
            >
              Professional User
            </button>
          </div>

          {/* Student Tab Content */}
          {activeTab === 'student' && (
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <button
                  className={`px-6 py-2 mx-2 rounded-full font-nav transition-colors ${
                    activeForm === 'login'
                      ? 'bg-[#83C5B3] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveForm('login')}
                >
                  Login
                </button>
                <button
                  className={`px-6 py-2 mx-2 rounded-full font-nav transition-colors ${
                    activeForm === 'signup'
                      ? 'bg-[#83C5B3] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveForm('signup')}
                >
                  Sign Up
                </button>
              </div>

              {/* Student Login Form */}
              {activeForm === 'login' && (
                <form onSubmit={handleStudentLoginSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="student-email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="student-email"
                      name="email"
                      value={studentLoginData.email}
                      onChange={handleStudentLoginChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="student-password" className="block text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      id="student-password"
                      name="password"
                      value={studentLoginData.password}
                      onChange={handleStudentLoginChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="student-remember"
                        className="mr-2"
                      />
                      <label htmlFor="student-remember" className="text-sm text-gray-600">Remember me</label>
                    </div>
                    <a href="#forgot-password" className="text-sm text-[#6bb7a2] hover:underline">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#83C5B3] text-white rounded-md font-nav hover:bg-[#6bb7a2] transition-colors"
                  >
                    Login
                  </button>
                </form>
              )}

              {/* Student Signup Form */}
              {activeForm === 'signup' && (
                <form onSubmit={handleStudentSignupSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="student-name" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="student-name"
                      name="name"
                      value={studentSignupData.name}
                      onChange={handleStudentSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="student-signup-email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="student-signup-email"
                      name="email"
                      value={studentSignupData.email}
                      onChange={handleStudentSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="student-signup-password" className="block text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      id="student-signup-password"
                      name="password"
                      value={studentSignupData.password}
                      onChange={handleStudentSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="student-confirm-password" className="block text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      id="student-confirm-password"
                      name="confirmPassword"
                      value={studentSignupData.confirmPassword}
                      onChange={handleStudentSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="student-terms"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="student-terms" className="text-sm text-gray-600">
                      I agree to the <a href="#terms" className="text-[#6bb7a2] hover:underline">Terms of Service</a> and <a href="#privacy" className="text-[#6bb7a2] hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#83C5B3] text-white rounded-md font-nav hover:bg-[#6bb7a2] transition-colors"
                  >
                    Create Account
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Professional Tab Content */}
          {activeTab === 'professional' && (
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <button
                  className={`px-6 py-2 mx-2 rounded-full font-nav transition-colors ${
                    activeForm === 'login'
                      ? 'bg-[#83C5B3] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveForm('login')}
                >
                  Login
                </button>
                <button
                  className={`px-6 py-2 mx-2 rounded-full font-nav transition-colors ${
                    activeForm === 'signup'
                      ? 'bg-[#83C5B3] text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveForm('signup')}
                >
                  Sign Up
                </button>
              </div>

              {/* Professional Login Form */}
              {activeForm === 'login' && (
                <form onSubmit={handleProLoginSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="pro-email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="pro-email"
                      name="email"
                      value={proLoginData.email}
                      onChange={handleProLoginChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pro-password" className="block text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      id="pro-password"
                      name="password"
                      value={proLoginData.password}
                      onChange={handleProLoginChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="pro-remember"
                        className="mr-2"
                      />
                      <label htmlFor="pro-remember" className="text-sm text-gray-600">Remember me</label>
                    </div>
                    <a href="#forgot-password" className="text-sm text-[#6bb7a2] hover:underline">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#83C5B3] text-white rounded-md font-nav hover:bg-[#6bb7a2] transition-colors"
                  >
                    Login
                  </button>
                </form>
              )}

              {/* Professional Signup Form */}
              {activeForm === 'signup' && (
                <form onSubmit={handleProSignupSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="pro-name" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="pro-name"
                      name="name"
                      value={proSignupData.name}
                      onChange={handleProSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pro-signup-email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="pro-signup-email"
                      name="email"
                      value={proSignupData.email}
                      onChange={handleProSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pro-profession" className="block text-gray-700 mb-2">Profession</label>
                    <select
                      id="pro-profession"
                      name="profession"
                      value={proSignupData.profession}
                      onChange={handleProSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    >
                      <option value="">Select your profession</option>
                      <option value="psychologist">Psychologist</option>
                      <option value="psychiatrist">Psychiatrist</option>
                      <option value="counselor">Counselor</option>
                      <option value="career-advisor">Career Advisor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pro-license" className="block text-gray-700 mb-2">License/Certification Number</label>
                    <input
                      type="text"
                      id="pro-license"
                      name="license"
                      value={proSignupData.license}
                      onChange={handleProSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pro-signup-password" className="block text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      id="pro-signup-password"
                      name="password"
                      value={proSignupData.password}
                      onChange={handleProSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pro-confirm-password" className="block text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      id="pro-confirm-password"
                      name="confirmPassword"
                      value={proSignupData.confirmPassword}
                      onChange={handleProSignupChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pro-terms"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="pro-terms" className="text-sm text-gray-600">
                      I agree to the <a href="#terms" className="text-[#6bb7a2] hover:underline">Terms of Service</a> and <a href="#privacy" className="text-[#6bb7a2] hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#83C5B3] text-white rounded-md font-nav hover:bg-[#6bb7a2] transition-colors"
                  >
                    Create Professional Account
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t text-center text-sm text-gray-600">
            {activeTab === 'student' ? (
              <p>Are you a mental health professional? <button onClick={() => setActiveTab('professional')} className="text-[#6bb7a2] hover:underline">Switch to Professional Login</button></p>
            ) : (
              <p>Are you a student? <button onClick={() => setActiveTab('student')} className="text-[#6bb7a2] hover:underline">Switch to Student Login</button></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;