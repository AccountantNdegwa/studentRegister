
import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    admissionNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    course: '',
    level: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({
      admissionNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      course: '',
      level: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="admissionNumber">Admission Number</label>
        <input type="number" className="form-control" id="admissionNumber" value={formData.admissionNumber} onChange={handleChange} placeholder="Enter Admission Number" required />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter first name" required />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter last name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
      </div>
      <div className="form-group">
        <label htmlFor="course">Course</label>
        <input type="text" className="form-control" id="course" value={formData.course} onChange={handleChange} placeholder="Enter course" required />
      </div>
      <div className="form-group">
        <label htmlFor="level">Level</label>
        <input type="text" className="form-control" id="level" value={formData.level} onChange={handleChange} placeholder="Enter Cert or Dip" required />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default StudentForm;
