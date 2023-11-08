import { useState } from "react";
import { useDeleteStudentMutation, useEditStudentMutation, useGetStudentQuery } from "./studentSlice";

/** Allows user to read, update, and delete a task */
export default function Student() {
  const {id} = useParams();
  const { data, isLoading, isError } = useGetStudentQuery(id)
  const [editStudent] = useEditStudentMutation();
  const [deleteStudent] = useDeleteStudentMutation();

  // const [description, setDescription] = useState(task.description);

  // Might change and utilize this code to take to an update form
  /** Updates the task's `done` status */
  const toggleStudent = async (evt) => {
    const done = evt.target.checked;
    editStudent({ ...task, done });
  };

  /** Deletes the student */
  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteStudent(student.id);
  };
  
  if (isLoading) {
    return <h1>Loading Book ...</h1>;
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
      <button onClick={onDelete} aria-label="delete">
          🞪
      </button>
    </div>
  );
}