import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../images/images.css";
import Totalbar from "../../layout/Totals_Navbar";
//dummydata
// const calculatedChange = {
//   twenties: 2,
//   tens: 3,
//   fives: 1,
//   singles: 1,
//   quarters: 1,
//   dimes: 1,
//   nickels: 1,
//   pennies: 1,
// };

export default function TotalChange() {
  const calculatedChange = useSelector((state) => state.cart.calculatedChange);
  const navigate = useNavigate();

  const findValue = (key) => {
    let value = calculatedChange[key];
    return value;
  };

  const usableKeys = [];

  const valuesQueue = [];

  for (const key in calculatedChange) {
    const value = calculatedChange[key];
    if (value > 0) {
      usableKeys.push(key);
      valuesQueue.push(value);
    }
  }

  return (
    <div>
      <div className="totalbar">
        <Totalbar />
      </div>
      <h1>This will show the full amount of change</h1>
      {usableKeys.map((key) => (
        <>
          <p>{findValue(key)}</p>
          <p key={key}>{key}</p>
          {key === "twenties" ? (
            <>
              <img className="bills" src="src/images/twenty-dollar-bill.jpeg" />
            </>
          ) : null}
          {key === "tens" ? (
            <img className="bills" src="src/images/ten-dollar-bill.jpg" />
          ) : null}
          {key === "fives" ? (
            <img className="bills" src="src/images/five-dollar-bill.jpg" />
          ) : null}
          {key === "singles" ? (
            <img className="bills" src="src/images/one-dollar-bill.jpg" />
          ) : null}
          {key === "quarters" ? (
            <img className="coins quarter" src="src/images/quarter.jpeg" />
          ) : null}
          {key === "dimes" ? (
            <img className="coins dime" src="src/images/dime.jpeg" />
          ) : null}
          {key === "nickels" ? (
            <img className="coins nickel" src="src/images/nickel.jpeg" />
          ) : null}
          {key === "pennies" ? (
            <img className="coins penny" src="src/images/penny.jpeg" />
          ) : null}
        </>
      ))}
      <button onClick={() => navigate("/completed")}>Next</button>
    </div>
  );
}
