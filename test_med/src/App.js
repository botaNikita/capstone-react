// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Notification from './Components/Notification/Notification';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Appointments from './Components/Appointments/Appointments';
import Reviews from './Components/Reviews/Reviews';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportLayout from './Components/ReportsLayout/ReportsLayout';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">        
        <Notification>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Sign_Up/>}/>
            <Route exact path="/instant-consultation" element={<InstantConsultation />} />
            <Route exact path="/appointments" element={<Appointments />} />
            <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/profile" element={<ProfileCard />} />
            <Route exact path="/reports" element={<ReportLayout />} />      

            <Route onEnter={() => window.location.reload()} />
          </Routes>
        </Notification>
    </div>
  );
}

// Export the App component as the default export
export default App;