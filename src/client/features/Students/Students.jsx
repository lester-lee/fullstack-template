import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import NewStudent from "./NewStudent";
import Student from "./Student";
import { useGetStudentsQuery } from "./studentSlice";

import "./Students.less";

/** Main interface for user to interact with their tasks */
export default function Tasks() {
  const token = useSelector(selectToken);
  const { data: tasks, isLoading } = useGetStudentsQuery();

  if (!token) {
    return <p>You must be logged in to see your tasks.</p>;
  }

  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <h2>Add New Task</h2>
      <NewStudent />
      <h2>Your Tasks</h2>
      {isLoading && <p>Loading tasks...</p>}
      {tasks && (
        <ul>
          {tasks.map((task) => (
            <Student key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}
