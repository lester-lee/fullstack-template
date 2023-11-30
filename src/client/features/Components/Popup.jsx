import React from "react";
import "./popup.css"
//**Popup needs in other files:
// import Popup from "./Popup";
// import { useState, useEffect } from "react";
//**inside function, before return:
// const [timedPopup, setTimedPopup] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setTimedPopup(true);
//     }, 200);
//   }, []);
//**inside return in function:
      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1 className="popup-header">Greet the customer:</h1>
        <p className="popup-para">Hello, how can I help you today?</p>
      </Popup> */}

function Popup(props) {

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          &times;
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
