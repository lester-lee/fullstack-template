import React from "react";
import "./Popup.scss"
//**Popup needs in other files:
// import Popup from "./Popup";
//only need useEffect for timed popup
// import { useState, useEffect } from "react";
//**inside function, before return:
// const [buttonPopup, setButtonPopup] = useState(false);
//or
// const [timedPopup, setTimedPopup] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setTimedPopup(true);
//     }, 200);
//   }, []);
//**inside return in function:
//change for buttonPopup to <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> and add onClick={() => setButtonPopup(true)} to button
      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1 className="popup-header">Greet the customer:</h1>
        <p className="popup-para">Hello, how can I help you today?</p>
      </Popup> */}

const Popup = ({ trigger, setTrigger, children }) => {

  return trigger ? (
     <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          X
        </button>
          {children}
      </div>
    </div>
    ) : (
      ""
  );
}

export default Popup;
