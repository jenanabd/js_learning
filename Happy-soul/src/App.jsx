import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import Resources from'./Components/Resources';
import ProfessionalResources from './Components/ProfessionalResources';
import Auth from './Components/Auth';
import BookSession from './Components/BookSession';

// Assuming you have a Home component for your landing page
// If not, you'll need to create one

function App() {
  useEffect(() => {
    // Check if we're at the root path and redirect to landing.html
    if (window.location.pathname === '/') {
      window.location.href = '/landing.html';
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Auth page route */}
        <Route path="/auth" element={<Auth />} />
        
        {/* Resources page route */}
        <Route path="/resources" element={<Resources />} />
        
        {/* Professional Resources page route */}
        <Route path="/professional-resources" element={<ProfessionalResources />} />
        
        {/* Book Session page route */}
        <Route path="/book-session" element={<BookSession />} />
      </Routes>
    </Router>
  );
}

export default App;