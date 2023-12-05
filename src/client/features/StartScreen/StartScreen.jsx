import { Link } from "react-router-dom";
import "./StartScreen.scss";
const StartScreen = () => {
   return (
   <>
   <div className="start-div">
   <Link className="start-button" to={'/products'}> Start </Link>
   </div>
   <br/>
   <div className="setup-div">
   <Link className="setup-button" to={'/login'}> Setup </Link>
   </div>   </>
   )
}

export default StartScreen;