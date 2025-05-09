import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import happyLogo from './happy_logo.svg';

const ProfessionalResourcesNavbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-6 md:px-16 bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      {/* Logo Area */}
      <div className="flex items-center">
        <img className="h-15 w-15" src={happyLogo} alt="Happy Soul Logo"></img>
        <span className="text-2xl font-nav text-[#0F2A3F] ml-2">
          Happy Soul - Professional Portal
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
          Public Resources
        </a>
        <a 
          href="#dashboard" 
          className="text-[#0F2A3F] hover:text-[#6bb7a2] transition-colors font-nav"
        >
          Dashboard
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <a 
          href="#profile" 
          className="text-[#0F2A3F] border border-[#6bb7a2] px-4 py-2 rounded-md font-nav hover:bg-blue-50 transition-colors"
        >
          Profile
        </a>
        <a 
          href="#logout" 
          className="bg-[#6bb7a2] text-white px-4 py-2 rounded-md font-nav hover:bg-[#5a9d8b] transition-colors"
        >
          Logout
        </a>
      </div>
    </nav>
  );
};

const ProfessionalResources = () => {
  // State for content management
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Understanding Anxiety in Students",
      content: "Anxiety is a common issue among students...",
      category: "Mental Health",
      image: null,
      video: null,
      date: "2024-06-01",
      author: "Dr. Jane Smith"
    }
  ]);
  
  // State for new post form
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "Mental Health"
  });
  
  // State for media preview
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  
  // Refs for file inputs
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle video upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Submit new post
  const handleSubmitPost = (e) => {
    e.preventDefault();
    
    const newPostData = {
      id: Date.now(),
      ...newPost,
      image: imagePreview,
      video: videoPreview,
      date: new Date().toISOString().split('T')[0],
      author: "Dr. Jane Smith" // This would come from user authentication
    };
    
    setPosts(prev => [newPostData, ...prev]);
    
    // Reset form
    setNewPost({
      title: "",
      content: "",
      category: "Mental Health"
    });
    setImagePreview(null);
    setVideoPreview(null);
    if (imageInputRef.current) imageInputRef.current.value = "";
    if (videoInputRef.current) videoInputRef.current.value = "";
  };
  
  // Delete post
  const handleDeletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <ProfessionalResourcesNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Dashboard Navigation */}
          <div className="md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Professional Dashboard</h2>
              
              <div className="space-y-2">
                <a href="#create" className="block p-3 bg-my-teal text-white rounded-md hover:bg-[#5a9d8b] transition-colors">
                  Create New Content
                </a>
                <a href="#manage" className="block p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  Manage Content
                </a>
                <a href="#analytics" className="block p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  View Analytics
                </a>
                <a href="#messages" className="block p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  Messages
                </a>
              </div>
              
              {/* Categories Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Content Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="mental-health" className="mr-2" checked />
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
          
          {/* Main Content - Content Creation and Management */}
          <div className="md:w-3/4">
            {/* Content Creation Form */}
            <div id="create" className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">Create New Content</h2>
              
              <form onSubmit={handleSubmitPost}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newPost.title}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={newPost.category}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    <option value="Mental Health">Mental Health</option>
                    <option value="Study Stress">Study Stress</option>
                    <option value="Career Guide">Career Guide</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={newPost.content}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      ref={imageInputRef}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {imagePreview && (
                      <div className="mt-2">
                        <img src={imagePreview} alt="Preview" className="h-40 object-cover rounded-md" />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Video
                    </label>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      ref={videoInputRef}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {videoPreview && (
                      <div className="mt-2">
                        <video 
                          src={videoPreview} 
                          controls 
                          className="h-40 w-full object-cover rounded-md"
                        ></video>
                      </div>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="bg-my-teal text-white px-6 py-3 rounded-md hover:bg-[#5a9d8b] transition-colors"
                >
                  Publish Content
                </button>
              </form>
            </div>
            
            {/* Content Management */}
            <div id="manage" className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Manage Your Content</h2>
              
              {posts.length === 0 ? (
                <p className="text-gray-500">No content published yet.</p>
              ) : (
                <div className="space-y-6">
                  {posts.map(post => (
                    <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="mr-3">{post.date}</span>
                        <span className="mr-3">•</span>
                        <span className="mr-3">{post.author}</span>
                        <span className="mr-3">•</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">{post.category}</span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{post.content}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {post.image && (
                          <div>
                            <img src={post.image} alt={post.title} className="rounded-md w-full h-48 object-cover" />
                          </div>
                        )}
                        
                        {post.video && (
                          <div>
                            <video 
                              src={post.video} 
                              controls 
                              className="rounded-md w-full h-48 object-cover"
                            ></video>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResources;