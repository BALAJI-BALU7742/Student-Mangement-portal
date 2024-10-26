// src/components/EditStudentForm.js
import React, { useContext, useState, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams, useNavigate } from 'react-router-dom';
import './EditStudentForm.css'; // Import the CSS file

const EditStudentForm = () => {
    const { students, updateStudent } = useContext(StudentContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const student = students.find(student => student.id === Number(id));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState(''); 
    const [phone, setPhone] = useState(''); 

    useEffect(() => {
        if (student) {
            setName(student.name);
            setEmail(student.email);
            setAddress(student.address); 
            setPhone(student.phone); 
        }
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent({ 
            id: student.id, 
            name, 
            email, 
            address,
            phone 
        });
        navigate('/students'); // Redirect to student list after editing
    };

    if (!student) {
        return <div>Student not found</div>;
    }

    return (
        <div className="edit-student-form">
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required 
                />
                <input 
                    type="tel" 
                    placeholder="Phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditStudentForm;
