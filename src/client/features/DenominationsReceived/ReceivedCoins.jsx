//pictures associated with values

// onClick the picture, it adds value to total received (connected to navBar (shared state))

// a delete button

//take the total value - total cost, and then put remainder into changeCalculation.js (puts change into an object split by $$ denominations)
//after than, we're getting an object that says  twenties: 2, tens: 0 etc....

// next button to CalculatedChangeRender.jsx

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTotalReceived,
  subtractTotalReceived,
  addCalculatedChange,
  setChangeToGive,
} from "../CashRegister/cartSlice";
import { useState } from "react";

import calculateChange from "./changeCalculation";
import "./Denomination.scss";
import "./ReceivedCoins.scss";
import Totalbar from "../TotalsBar/TotalsBar";
import Popup from "../Popup/Popup";

const ReceivedCoins = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [coins, setCoins] = useState({
    100: 0,
    25: 0,
    10: 0,
    5: 0,
    1: 0,
  });

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const totalReceived = useSelector((state) => state.cart.totalReceived);

  const changeToGive = totalReceived - totalPrice;

  //Popup:
  const [buttonPopup, setButtonPopup] = useState(false);

  // Increase quantity of coin clicked and increase total value recieved
  const handleCoinClick = (coinValue) => {
    // Add coin to denomination count
    setCoins((prevCoins) => ({
      ...prevCoins,
      [coinValue]: prevCoins[coinValue] + 1,
    }));
    // Increase total value recieved
    dispatch(addTotalReceived(coinValue / 100));
  };

  // Remove quantity of coin clicked and subtract from total value recieved
  const handleCoinRemovalClick = (coinValue) => {
    // Remove coin from denominatoin count
    setCoins((prevCoins) => ({
      ...prevCoins,
      [coinValue]: prevCoins[coinValue] - 1,
    }));
    // Decrease total value recieved
    dispatch(subtractTotalReceived(coinValue / 100));
  };

  const handleClick = () => {
    const result = calculateChange(changeToGive);
    dispatch(addCalculatedChange({ changeObject: result }));
    dispatch(setChangeToGive(changeToGive));
    if (changeToGive < 0) {
      setButtonPopup(true);
    } else {
      navigate("/change");
    }
  };

  return (
    <>
      <body>
        <div className="receivedCoinHeader">
          <h1 className="receivedHeaderText">Received Coins</h1>
          <p>Click on each coin that you received from the customer</p>
        </div>
        <div className="totalbar">
          <Totalbar />
        </div>
        <section className="coinsSection">
          {Object.entries(coins).map(([coinValue, count]) => {
            const coinSrc = `src/client/assets/images/${coinValue}-cent-coin.jpeg`;
            return (
              <div className="coinDiv" key={coinValue}>
                <img
                  src={coinSrc}
                  alt={`${coinValue}-cent-coin`}
                  className={`coins coin-${coinValue}-cent`}
                  onClick={() => handleCoinClick(coinValue)}
                />
                {count > 0 && (
                  <>
                    <p>x {count}</p>
                    <button
                      className="remove-button"
                      onClick={() => handleCoinRemovalClick(coinValue)}
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
          <button onClick={() => navigate("/received-bills")}>Back</button>
          <button onClick={handleClick}>Next</button>
        </footer>
        {/* Popup: */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1 className="popup-header">Tell the customer:</h1>
          <p className="popup-para">
            It looks like the cost is more than what you paid, please provide
            more cash. Thanks!
          </p>
        </Popup>
      </body>
    </>
  );
};

export default ReceivedCoins;
