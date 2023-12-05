import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../assets/images/images.scss";
import Totalbar from "../TotalsBar/TotalsBar";
import DenominationCard from "./DenominationCard";

// shows user all change due
const TotalChange = () => {
  // gets calculatedChange object from state
  const calculatedChange = useSelector((state) => state.cart.calculatedChange);
  const navigate = useNavigate();

  return (
    <div>
      <div className="totalbar">
        <Totalbar />
      </div>
      <ul>
        {/* renders each key and corresponding value */}
        {Object.keys(calculatedChange).map((denomination) => {
          const value = calculatedChange[denomination];
          return <DenominationCard denomination={denomination} value={value} />;
        })}
      </ul>
      <button onClick={() => navigate("/completed")}>Next</button>
    </div>
  );
};

export default TotalChange;
