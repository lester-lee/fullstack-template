import { Link } from "react-router-dom";
import "./StartScreen.scss";
const StartScreen = () => {
   return (
   <div className="start-screen-div">
      <h4>Welcome!</h4>
   <div>
   <Link to={'/products'}>
      <button className="start-button"> Start </button>
   </Link>
   </div>
   <div>
   <Link to={'/login'}>
      <button className="setup-button"> Setup </button>
   </Link>
   </div>
   </div>
   )
}

export default StartScreen;