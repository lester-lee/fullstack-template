import { useNavigate } from "react-router-dom";

export default function TotalChange() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This will show the full amount of change</h1>
      <button onClick={() => navigate("/completed")}>Finish</button>
    </div>
  );
}
