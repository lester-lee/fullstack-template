//pictures associated with values
// onClick the picture, it adds value to total received (connected to navBar (shared state))
// a delete button
// next button
import "./Denomination.scss";
import "./ReceivedBills.scss";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addTotalReceived,
  subtractTotalReceived,
} from "../CashRegister/cartSlice";
import { useState } from "react";
import Totalbar from "../TotalsBar/TotalsBar";
//popup and import show the total in the popup
import Popup from "../Popup/Popup";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ReceivedBills = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Inialize demonimation state object
  const [bills, setBills] = useState({
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    1: 0,
  });

  //Popup: to show the total in the popup
  const { totalPrice } = useSelector((state) => state.cart);
  //Popup: useState and useEffect for Popup function
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 200);
  }, []);

  // Increase quantity of bill clicked and increase total value recieved
  const handleBillClick = (billValue) => {
    // Add bill to denomination count
    setBills((prevBills) => ({
      ...prevBills,
      [billValue]: prevBills[billValue] + 1,
    }));
    // Increase total value recieved
    dispatch(addTotalReceived(billValue));
  };

  // Remove quantity of bill clicked and subtract from total value recieved
  const handleBillRemovalClick = (billValue) => {
    // Remove bill from denomination count
    setBills((prevBills) => ({
      ...prevBills,
      [billValue]: prevBills[billValue] - 1,
    }));
    // Decrease total value recieved
    dispatch(subtractTotalReceived(billValue));
  };

  return (
    <>
      <body>
        <div className="receivedBillHeader">
          <h1 className="receivedHeaderText">Received Bills</h1>
          <p>Click on each bill that you received from the customer</p>
        </div>
        <div className="totalbar">
          <Totalbar />
        </div>
        <section className="billsSection">
          {Object.entries(bills).map(([billValue, count]) => {
            const billSrc = `src/client/assets/images/${billValue}-dollar-bill.jpeg`;
            return (
              <div className="billDiv" key={billValue}>
                <img
                  src={billSrc}
                  alt={`${billValue}-dollar-bill`}
                  className="bills"
                  onClick={() => handleBillClick(billValue)}
                />
                {count > 0 && (
                  <>
                    <p>x {count}</p>
                    <button
                      className="remove-button"
                      onClick={() => handleBillRemovalClick(billValue)}
                    >
                      -
                    </button>
                  </>
                )}
                <br />
              </div>
            );
          })}
        </section>
        <footer>
          <button onClick={() => navigate("/products")}>Back</button>
          <button
            className="receivedBillNextButton"
            onClick={() => navigate("/received-coins")}
          >
            Next
          </button>
        </footer>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h1 className="popup-header">Tell the customer:</h1>
          <p className="popup-para">
            Your total today is ${totalPrice.toFixed(2)}
          </p>
        </Popup>
      </body>
    </>
  );
};

export default ReceivedBills;
