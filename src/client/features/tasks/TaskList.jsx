import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import Task from "./Task";
import { useGetTasksQuery } from "./taskSlice";

/** Displays list of all tasks for the logged-in user */
export default function TaskList() {
  const token = useSelector(selectToken);
  const { data: tasks, isLoading } = useGetTasksQuery();

  if (!token) {
    return <p>You must be logged in to see your tasks.</p>;
  }

  return (
    <>
      <h1>Tasks</h1>
      {isLoading && <p>Loading tasks...</p>}
      {tasks && (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </>
  );
}
