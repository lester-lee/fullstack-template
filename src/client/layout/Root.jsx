import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;