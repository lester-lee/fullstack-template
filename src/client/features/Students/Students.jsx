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
          </li>

        ))
      }
      </ul>
    </div>

  )
} 