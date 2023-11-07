import React, { Component } from 'react';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // eed to change for actual api
    fetch('https://api.example.com/students')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          students: data,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({
          students: [],
          loading: false,
          error: error,
        });
      });
  }

  render() {
    const { students, loading, error } = this.state;

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
}

export default StudentList;
