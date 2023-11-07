import { useState } from "react";
import { useDeleteStudentMutation, useEditStudentMutation } from "./studentSlice";

/** Allows user to read, update, and delete a task */
export default function Task({ task }) {
  const [editStudent] = useEditStudentMutation();
  const [deleteStudent] = useDeleteStudentMutation();

  const [description, setDescription] = useState(task.description);

  /** Updates the task's `done` status */
  const toggleStudent = async (evt) => {
    const done = evt.target.checked;
    editStudent({ ...task, done });
  };

  /** Saves the task's description */
  const save = async (evt) => {
    evt.preventDefault();
    editStudent({ ...task, description });
  };

  /** Deletes the task */
  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteStudent(task.id);
  };

  return (
    <li>
      <form onSubmit={save}>
        <input type="checkbox" checked={task.done} onChange={toggleTask} />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button>Save</button>
        <button onClick={onDelete} aria-label="delete">
          🞪
        </button>
      </form>
    </li>
  );
}
