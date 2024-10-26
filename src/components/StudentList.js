import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Link } from 'react-router-dom';
import './StudentList.css';

const StudentList = () => {
    const { students, deleteStudent } = useContext(StudentContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 5;
    const [error, setError] = useState('');

    useEffect(() => {
        const results = students.filter(student =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredStudents(results);
        setCurrentPage(1);
    }, [searchTerm, students]);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (confirmDelete) {
            try {
                await deleteStudent(id); // Assuming deleteStudent returns a promise
                alert("Student deleted successfully!");
            } catch (error) {
                setError("Failed to delete student. Please try again.");
            }
        }
    };

    // Pagination Logic
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h2>Student List</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <input 
                type="text" 
                placeholder="Search by Name" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="search-input"
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentStudents.length === 0 ? (
                        <tr>
                            <td colSpan="4">No students found. <Link to="/students">Show all students</Link></td>
                        </tr>
                    ) : (
                        currentStudents.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.class}</td>
                                <td>
                                    <Link to={`/students/edit/${student.id}`} className="edit-link">Edit</Link>
                                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => handlePageChange(index + 1)} 
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StudentList;
