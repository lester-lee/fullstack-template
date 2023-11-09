import { useGetStudentsQuery } from "./studentSlice";
import StudentForm from "./StudentForm";
import { Link } from "react-router-dom";

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
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <Link to={`/students/${student.id}`}>{student.id}</Link>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <StudentForm />
    </div>
  );
}
