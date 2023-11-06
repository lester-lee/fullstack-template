import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import NewTask from "./NewTask";
import Task from "./Task";
import { useGetTasksQuery } from "./taskSlice";

/** Main interface for user to interact with their tasks */
export default function Tasks() {
  const token = useSelector(selectToken);
  const { data: tasks, isLoading } = useGetTasksQuery();

  if (!token) {
    return <p>You must be logged in to see your tasks.</p>;
  }

  return (
    <>
      <h1>Tasks</h1>
      <NewTask />
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
