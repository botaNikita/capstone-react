// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorName, setDoctorName] = useState(null);
  const [doctorSpeciality, setDoctorSpeciality] = useState(null);
  const [patienrName, setPatienrName] = useState(null);
  const [patientPhone, setPatientPhone] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);

  var fillDataFromStorage = () => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    
    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    setDoctorName(window.localStorage.getItem("doctorName"));   
    setDoctorSpeciality(window.localStorage.getItem("doctorSpeciality"));
    setPatienrName(window.localStorage.getItem("patienrName")); 
    setPatientPhone(window.localStorage.getItem("patientPhone"));
    setAppointmentDate(window.localStorage.getItem("appointmentDate"));
    setAppointmentTime(window.localStorage.getItem("appointmentTime"));
  }

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    fillDataFromStorage();

    window.addEventListener('storage', () => {
        console.log("Change to local storage!");
        fillDataFromStorage();
    })
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar ></Navbar>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentDate && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorName}
              </p>
              <p className="appointment-card__message">
                <strong>Speciality:</strong> {doctorSpeciality}
              </p>
              <p className="appointment-card__message">
                <strong>Patient:</strong> {patienrName}
              </p>
              <p className="appointment-card__message">
                <strong>Phone:</strong> {patientPhone}
              </p>
              <p className="appointment-card__message">
                <strong>Date:</strong> {appointmentDate}
              </p>
              <p className="appointment-card__message">
                <strong>Time:</strong> {appointmentTime}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;