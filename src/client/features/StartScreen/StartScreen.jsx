import { Link } from "react-router-dom";


const StartScreen = () => {
   return (
   <>
   <div>
   <Link className="start-button" to={'/products'}> Start </Link>
   </div>
   <div>
   <Link className="setup-button" to={'/login'}> Setup </Link>
   </div>   </>
   )
}

export default StartScreen;