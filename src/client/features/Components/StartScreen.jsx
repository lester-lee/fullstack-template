import { Link } from "react-router-dom";
import Totalbar from "../../layout/Totals_Navbar";

export default function StartScreen() {
   return (
   <>
   <div>
      <Totalbar />
   </div>
   <div>
   <Link className="start-button" to={'/products'}> Start </Link>
   </div>
   <div>
   <Link className="setup-button" to={'/login'}> Setup </Link>
   </div>   </>
   )
}
