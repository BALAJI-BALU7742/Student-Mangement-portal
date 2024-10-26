// src/components/StudentDetails.js
import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams, useNavigate } from 'react-router-dom';
import './StudentDetails.css';

const StudentDetails = () => {
    const { id } = useParams(); // Get the student ID from the URL
    const { students } = useContext(StudentContext); // Access the student context
    const navigate = useNavigate(); // Hook to navigate programmatically
    const student = students.find(student => student.id === parseInt(id)); // Find the student by ID

    // Handle case where student is not found
    if (!student) {
        return <h2>Student not found</h2>;
    }

    return (
        <div className="student-details" role="region" aria-labelledby="student-details-heading">
            <h3 id="student-details-heading">Student Details</h3>
            <div className="detail"><strong>Name:</strong> {student.name}</div>
            <div className="detail"><strong>Email:</strong> {student.email}</div>
            <div className="detail"><strong>Age:</strong> {student.age}</div>
            <div className="detail"><strong>Class:</strong> {student.class}</div>
            <div className="detail"><strong>Address:</strong> {student.address}</div>
            <div className="detail"><strong>Phone Number:</strong> {student.phoneNumber}</div>
            <button className="back-button" onClick={() => navigate('/students')}>Back to Student List</button>
        </div>
    );
};

export default StudentDetails;
