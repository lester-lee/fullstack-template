import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import NewTask from "./NewTask";
import Task from "./Task";
import { useGetTasksQuery } from "./taskSlice";

import "./Tasks.less";

/** Main interface for user to interact with their tasks */
export default function Tasks() {
  const token = useSelector(selectToken);
  const { data: tasks, isLoading } = useGetTasksQuery();

  if (!token) {
    return <p>You must be logged in to see your tasks.</p>;
  }

  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <h2>Add New Task</h2>
      <NewTask />
      <h2>Your Tasks</h2>
      {isLoading && <p>Loading tasks...</p>}
      {tasks && (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}
