import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import StudentDetails from './components/StudentDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleEdit = (updatedStudent) => {
    setStudents(students.map(student => 
      student.admissionNumber === updatedStudent.admissionNumber ? updatedStudent : student
    ));
  };

  const handleDelete = (admissionNumber) => {
    setStudents(students.filter(student => student.admissionNumber !== admissionNumber));
  };

  return (
    <Router>
      <div className="container mt-5">
        <h2 className="text-center">Student Registration Form</h2>
        <StudentForm addStudent={addStudent} />
        <h2 className="text-center mt-5">Registered Students</h2>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/students">Students</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome to the Student Registration System</div>} />
          <Route path="/students" element={<StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />} />
          <Route path="/student/:id" element={<StudentDetails students={students} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
