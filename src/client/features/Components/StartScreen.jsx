import { useNavigate } from "react-router-dom";

export default function StartScreen() {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is the start screen</h1>
      <button onClick={() => navigate("products")}>Start</button>
    </>
  );
}
