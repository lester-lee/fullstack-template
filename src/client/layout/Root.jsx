import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
