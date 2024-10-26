// src/components/Dashboard.js
import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import './Dashboard.css';

const Dashboard = () => {
    const { students } = useContext(StudentContext);
    const totalStudents = students.length; // Count of students

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="stats-card">
                <h3>Total Students: {totalStudents}</h3>
                <div className="student-images">
                    {/* Display images based on total students */}
                    {[...Array(totalStudents)].map((_, index) => (
                        <img 
                            key={index} 
                            src="https://media.istockphoto.com/id/1385168396/photo/people-registering-for-the-conference-event.jpg?s=612x612&w=0&k=20&c=ZHMACoGg5zfL-nUzjoXTrXedDXXoj_E7rBZBihaWfBA=" // Placeholder image
                            alt="Student" 
                            className="student-image" // Class for styling
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
