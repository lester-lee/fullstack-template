import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <h1>Tasks</h1>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
