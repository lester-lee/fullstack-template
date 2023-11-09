import {useGetStudentsQuery} from "./studentSlice"

export default function Students(){
  const {data:students, isLoading} = useGetStudentsQuery()
  console.log(students)
  if (isLoading){
    return <p>is loading</p>
  }

  return(
    <div>
      <ul>
      {
        students.map((student)=> (
          <li key={student.id}>
            {student.firstName}
            {student.lastName}
            {student.email}
            {student.gpa}
          </li>

        ))
      }
      </ul>
    </div>

  )
} 