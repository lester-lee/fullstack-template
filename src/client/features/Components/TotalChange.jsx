import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Totalbar from "../../layout/Totals_Navbar";
//dummydata
// const calculatedChange = {
//   twenties: 2,
//   tens: 3,
//   fives: 1,
//   singles: 0,
//   quarters: 2,
//   dimes: 0,
//   nickels: 4,
//   pennies: 0,
// };

export default function TotalChange() {
  const calculatedChange = useSelector((state) => state.cart.calculatedChange);
  const navigate = useNavigate();

  const keys = Object.keys(calculatedChange);
  const values = Object.values(calculatedChange);
  const usableKeys = [];

  const valuesQueue = [];
  const valueIndeces = [];

  values.forEach((num, index) => {
    if (num > 0) {
      valuesQueue.push(num);
      valueIndeces.push(index);
    }
  });

  for (let i = 0; i < valuesQueue.length; i++) {
    usableKeys.push(keys[valueIndeces[i]]);
  }

  return (
    <div>
      <div className="totalbar">
      <Totalbar />
      </div>
      <h1>This will show the full amount of change</h1>
      {usableKeys.map((key) => (
        <p key={key}>{key}</p>
      ))}
      {valuesQueue.map((value) => (
        <p key={Math.random(100)}>{value}</p>
      ))}
      <button onClick={() => navigate("/completed")}>Finish</button>
    </div>
  );
}
