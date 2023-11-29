import { useNavigate } from "react-router-dom";

export default function Completed() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Transaction Completed page</h1>
      <button onClick={() => navigate("/")}>Return home</button>
    </>
  );
}
