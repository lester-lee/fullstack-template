import {useGetStudentsQuery} from "./studentSlice"

export default function Students(){
  const {data:students, isLoading} = useGetStudentsQuery()
  console.log(students)
  if (isLoading){
    return <p>is loading</p>
  }

  return(
    <div>
    <h2>List of Students</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
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
            <td>{student.gpa}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
} 