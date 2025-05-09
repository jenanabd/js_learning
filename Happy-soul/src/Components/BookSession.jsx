import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import happyLogo from './happy_logo.svg';

// Sample data for professionals
const PROFESSIONALS = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    category: "psychologist",
    specialization: "Anxiety & Depression",
    experience: "10 years",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    availability: ["Mon 2-5 PM", "Wed 1-6 PM", "Fri 9 AM-12 PM"],
    bio: "Dr. Johnson specializes in cognitive behavioral therapy for young adults dealing with anxiety and depression."
  },
  {
    id: 2,
    name: "Michael Chen, LMFT",
    title: "Family Therapist",
    category: "therapist",
    specialization: "Relationship Counseling",
    experience: "8 years",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    availability: ["Tue 10 AM-3 PM", "Thu 1-7 PM", "Sat 10 AM-2 PM"],
    bio: "Michael helps couples and families improve communication and resolve conflicts through evidence-based approaches."
  },
  {
    id: 3,
    name: "Dr. Amara Patel",
    title: "Psychiatrist",
    category: "psychiatrist",
    specialization: "Mood Disorders",
    experience: "12 years",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    availability: ["Mon 9 AM-3 PM", "Wed 2-6 PM", "Thu 10 AM-4 PM"],
    bio: "Dr. Patel specializes in medication management for mood disorders and has extensive experience with young adults."
  },
  {
    id: 4,
    name: "James Wilson, MA",
    title: "Career Counselor",
    category: "career counsellor",
    specialization: "Career Transitions",
    experience: "6 years",
    rating: 4.6,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    availability: ["Tue 1-6 PM", "Thu 9 AM-2 PM", "Fri 2-5 PM"],
    bio: "James helps students and professionals navigate career changes and develop effective job search strategies."
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    title: "Educational Psychologist",
    category: "psychologist",
    specialization: "Learning Difficulties",
    experience: "9 years",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    availability: ["Mon 1-5 PM", "Wed 10 AM-3 PM", "Fri 12-4 PM"],
    bio: "Dr. Thompson specializes in assessing and supporting students with learning difficulties and ADHD."
  },
  {
    id: 6,
    name: "Robert Garcia, PhD",
    title: "Career Development Specialist",
    category: "career counsellor",
    specialization: "Graduate Employment",
    experience: "7 years",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    availability: ["Tue 9 AM-1 PM", "Thu 2-6 PM", "Sat 10 AM-1 PM"],
    bio: "Robert helps recent graduates transition into the workforce and develop long-term career plans."
  }
];

// Categories for filtering
const CATEGORIES = [
  { id: "all", name: "All Professionals" },
  { id: "psychologist", name: "Psychologists" },
  { id: "psychiatrist", name: "Psychiatrists" },
  { id: "therapist", name: "Therapists" },
  { id: "career counsellor", name: "Career Counsellors" }
];

const BookSessionNavbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-6 md:px-16 bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      {/* Logo Area */}
      <div className="flex items-center">
        <img className="h-15 w-15" src={happyLogo} alt="Happy Soul Logo" />
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
          href="/resources" 
          className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
        >
          Resources
        </a>
        <Link 
          to="/professional-resources" 
          className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
        >
          Professional Resources
        </Link>
        <Link 
          to="/book-session" 
          className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav font-bold"
        >
          Book a Session
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <a 
          href="/auth" 
          className="text-[#0F2A3F] border border-[#6bb7a2] px-4 py-2 rounded-md font-nav hover:bg-blue-50 transition-colors"
        >
          Login
        </a>
        <a 
          href="/auth" 
          className="bg-[#6bb7a2] text-white px-4 py-2 rounded-md font-nav hover:bg-[#5a9d8b] transition-colors"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

const ProfessionalCard = ({ professional, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-md"
      onClick={() => onClick(professional)}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-4">
          <img 
            src={professional.image} 
            alt={professional.name} 
            className="w-full h-48 md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-[#0F2A3F]">{professional.name}</h3>
              <p className="text-[#6bb7a2] font-medium">{professional.title}</p>
            </div>
            <div className="flex items-center bg-[#F0F7F5] px-2 py-1 rounded">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="font-medium">{professional.rating}</span>
            </div>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {professional.specialization}
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {professional.experience} experience
            </span>
          </div>
          
          <p className="mt-3 text-gray-600 line-clamp-2">{professional.bio}</p>
          
          <div className="mt-3">
            <p className="text-sm font-medium text-gray-700">Available:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {professional.availability.map((slot, index) => (
                <span key={index} className="bg-gray-100 text-xs px-2 py-1 rounded">
                  {slot}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingModal = ({ professional, onClose }) => {
  const [activeTab, setActiveTab] = useState('message');
  
  if (!professional) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold text-[#0F2A3F]">{professional.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src={professional.image} 
                alt={professional.name} 
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="mt-4">
                <h3 className="font-semibold text-[#0F2A3F]">{professional.title}</h3>
                <p className="text-gray-600">{professional.specialization}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-medium">{professional.rating}</span>
                  <span className="text-gray-500 ml-1">(120 reviews)</span>
                </div>
                <p className="mt-2 text-gray-600">{professional.experience} experience</p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-[#0F2A3F]">Available Slots:</h4>
                <div className="mt-2 space-y-2">
                  {professional.availability.map((slot, index) => (
                    <div key={index} className="bg-gray-100 p-2 rounded text-center">
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="flex border-b mb-4">
                <button
                  className={`py-2 px-4 font-medium ${activeTab === 'message' ? 'text-[#6bb7a2] border-b-2 border-[#6bb7a2]' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('message')}
                >
                  Message
                </button>
                <button
                  className={`py-2 px-4 font-medium ${activeTab === 'book' ? 'text-[#6bb7a2] border-b-2 border-[#6bb7a2]' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('book')}
                >
                  Book a Session
                </button>
              </div>
              
              {activeTab === 'message' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Send a Message</h3>
                  <p className="text-gray-600 mb-4">
                    Have a question for {professional.name.split(',')[0]}? Send a direct message to discuss your needs.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Subject</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                        placeholder="What would you like to discuss?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Message</label>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 h-32"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    
                    <button className="w-full py-3 bg-[#83C5B3] text-white rounded-md font-nav hover:bg-[#6bb7a2] transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'book' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Book a Session</h3>
                  <p className="text-gray-600 mb-4">
                    Schedule a video consultation with {professional.name.split(',')[0]} via Google Meet.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Select Date</label>
                      <input 
                        type="date" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Select Time Slot</label>
                      <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300">
                        <option value="">Select a time slot</option>
                        {professional.availability.map((slot, index) => (
                          <option key={index} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Session Type</label>
                      <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300">
                        <option value="initial">Initial Consultation (30 min)</option>
                        <option value="standard">Standard Session (50 min)</option>
                        <option value="extended">Extended Session (80 min)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-1">Brief Description</label>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 h-24"
                        placeholder="Briefly describe what you'd like to discuss..."
                      ></textarea>
                    </div>
                    
                    <button className="w-full py-3 bg-[#83C5B3] text-white rounded-md font-nav hover:bg-[#6bb7a2] transition-colors">
                      Book Google Meet Session
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookSession = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  
  // Filter professionals based on category and search query
  const filteredProfessionals = PROFESSIONALS.filter(professional => {
    const matchesCategory = selectedCategory === 'all' || professional.category === selectedCategory;
    const matchesSearch = professional.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          professional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          professional.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleProfessionalClick = (professional) => {
    setSelectedProfessional(professional);
  };
  
  const closeModal = () => {
    setSelectedProfessional(null);
  };

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <BookSessionNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Categories */}
          <div className="md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Search professionals..." 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              
              <div className="space-y-2">
                {CATEGORIES.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      selectedCategory === category.id 
                        ? 'bg-[#83C5B3] text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Additional Filters */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="weekdays" className="mr-2" />
                    <label htmlFor="weekdays">Weekdays</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="weekends" className="mr-2" />
                    <label htmlFor="weekends">Weekends</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="evenings" className="mr-2" />
                    <label htmlFor="evenings">Evenings</label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Session Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="video" className="mr-2" checked />
                    <label htmlFor="video">Video Session</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="chat" className="mr-2" />
                    <label htmlFor="chat">Chat Consultation</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content - Professionals List */}
          <div className="md:w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Book a Session with a Professional</h1>
              </div>
              
              {filteredProfessionals.length > 0 ? (
                <div className="space-y-4">
                  {filteredProfessionals.map(professional => (
                    <ProfessionalCard 
                      key={professional.id} 
                      professional={professional} 
                      onClick={handleProfessionalClick}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No professionals found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    className="mt-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {selectedProfessional && (
        <BookingModal 
          professional={selectedProfessional} 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default BookSession;