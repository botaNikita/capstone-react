import React, { useEffect, useState } from 'react';
import './Reviews.css';

const Reviews = () => {
    const [doctors, setDoctors] = useState([]);
    const [reviews, setReviews] = useState([]);

    var fillReviews = () => {
        var reviewsJson = window.localStorage.getItem("reviews");
        if (reviewsJson) {
            setReviews(JSON.parse(reviewsJson));
        }
    }
    
      // useEffect hook to perform side effects in the component
    useEffect(() => {
        fillReviews();
        getDoctorsDetails();
    }, []);

    
    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => setDoctors(data))
        .catch(err => console.log(err));
    }
    
    return (
        <center className="reviews-container">
            <div>
                <table>
                    <tr>
                        <th>Serial number</th>
                        <th>Doctor name</th>
                        <th>Doctor speciality</th>
                        <th>Provide feedback</th>
                        <th>Review given</th>
                    </tr>
                    {doctors.map((doctor, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td>
                                    <input type="button" value="Click here" />
                                </td>
                                <td></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </center>
    )
}

export default Reviews