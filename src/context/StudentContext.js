import React, { createContext, useState, useEffect } from 'react';
import { mockStudents } from './mockData';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students'));
        // Set initial state from localStorage or mock data if nothing is stored
        setStudents(storedStudents ? storedStudents : mockStudents);
    }, []);

    const addStudent = (student) => {
        const newStudent = { ...student, id: Date.now() };
        const updatedStudents = [...students, newStudent];
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };

    const updateStudent = (updatedStudent) => {
        const updatedStudents = students.map(student =>
            student.id === updatedStudent.id ? updatedStudent : student
        );
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };

    const deleteStudent = (id) => {
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    );
};
