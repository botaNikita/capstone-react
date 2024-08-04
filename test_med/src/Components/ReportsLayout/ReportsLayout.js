import React, { useEffect, useState } from 'react';
import './ReportsLayout.css';
import { Link } from "react-router-dom";

const ReportsLayout = () => {
    const [doctors, setDoctors] = useState([]);
    
      // useEffect hook to perform side effects in the component
    useEffect(() => {
        getDoctorsDetails();
    }, []);
    
    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => setDoctors(data))
        .catch(err => console.log(err));
    }
    
    return (
        <center className="reports-container">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Serial number</th>
                            <th>Doctor name</th>
                            <th>Doctor speciality</th>
                            <th>View report</th>
                            <th>Download report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>
                                        <Link to="/patient_report.pdf" >View report</Link>
                                    </td>
                                    <td>                                        
                                        <Link to="/patient_report.pdf"  download>Download report</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </center>
    )
}

export default ReportsLayout