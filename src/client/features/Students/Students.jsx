import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import NewStudent from "./NewStudent";
import Student from "./Student";
import { useGetStudentsQuery } from "./studentSlice";

import "./Students.less";

/** Main interface for user to interact with their tasks */
import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with real api once we get there
    fetch('https://api.example.com/students')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setStudents([]);
        setLoading(false);
        setError(error);
      });
  }, []); 

  return (
    <div>
      <h2>List of Students</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Image URL</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.imageUrl}</td>
              <td>{student.gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
