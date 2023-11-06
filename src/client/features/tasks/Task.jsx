import { useState } from "react";
import { useDeleteTaskMutation, useEditTaskMutation } from "./taskSlice";

/** Allows user to read, update, and delete a task */
export default function Task({ task }) {
  const [editTask] = useEditTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const [description, setDescription] = useState(task.description);

  /** Updates the task's `done` status */
  const toggleTask = async (evt) => {
    const done = evt.target.checked;
    editTask({ ...task, done });
  };

  /** Saves the task's description */
  const save = async (evt) => {
    evt.preventDefault();
    editTask({ ...task, description });
  };

  /** Deletes the task */
  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteTask(task.id);
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
