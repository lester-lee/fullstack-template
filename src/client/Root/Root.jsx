import { Outlet } from "react-router-dom";
import "./Root.scss";

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