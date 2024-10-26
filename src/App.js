import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import EditStudentForm from './components/EditStudentForm';
import StudentDetails from './components/StudentDetails';
import './styles.css';

const App = () => {
    return (
        <StudentProvider>
            <Router>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/students" element={<StudentList />} />
                        <Route path="/add-student" element={<StudentForm />} />
                        <Route path="/students/edit/:id" element={<EditStudentForm />} />
                        <Route path="/students/:id" element={<StudentDetails />} />
                    </Routes>
                </main>
            </Router>
        </StudentProvider>
    );
};

export default App;
