import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>Sorry, the page you requested does not exist.</p>
      <button className="Home" onClick={() => navigate("/")}>
        Return Home
      </button>
    </>
  );
};

export default ErrorPage;
