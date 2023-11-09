import { useDeleteStudentMutation, useGetStudentQuery } from "./studentSlice";

export default function Student() {
    const {id} = useParams();
    const { data, isLoading, isError } = useGetStudentQuery(id);
    const [deleteStudent] = useDeleteStudentMutation();

    const onDelete = async (evt) => {
        evt.preventDefault();
        deleteStudent(student.id);
      };

      if (isLoading) {
        return <h1>Loading Student ...</h1>;
      }
    
      if (isError || !data) {
        return <h1>Error loading data</h1>;
      }
    
      const student = data.student
    
    return (
        <div>
            <img src={student.imgUrl} />
            <h2>{student.firstName} {student.lastName}</h2>
            <p>Email: {student.email}</p>
            <p>GPA: {student.gpa}</p>
            <p>Campus:</p>
            <button onClick={onDelete} aria-label="delete"></button>
        </div>
    )
}