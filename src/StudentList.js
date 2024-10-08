import React from 'react';
import { Link } from 'react-router-dom';

const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Admission Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Level</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.admissionNumber}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.level}</td>
            <td>
              <Link className="btn btn-info btn-sm" to={`/student/${student.admissionNumber}`}>Display</Link>
              <button className="btn btn-warning btn-sm" onClick={() => onEdit(student)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(student.admissionNumber)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
