import { useNavigate } from "react-router-dom";

export default function Completed() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="finished_h1">Finished!</h1>
      <h2 className="finished_h2">Tell the customer: Have a great day!</h2>
      <button className="done" onClick={() => navigate("/")}>
        Done
      </button>
    </>
  );
}
