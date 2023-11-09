import { useGetStudentsQuery } from "./studentSlice";
import { Link } from "react-router-dom";

import StudentForm from "./StudentForm";
import "./pretty.css";

export default function Students() {
  const { data: students, isLoading } = useGetStudentsQuery();
  console.log(students);
  if (isLoading) {
    return <p>is loading</p>;
  }

  return (
    <div>
      <h2>List of Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <Link to={`/students/${student.id}`}>More Info</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <StudentForm />
    </div>
  );
}
