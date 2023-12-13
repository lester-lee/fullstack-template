import "./DenominationCard.scss";

import dollarBill1 from "../../assets/images/1-dollar-bill.jpeg";
import dollarBill5 from "../../assets/images/5-dollar-bill.jpeg";
import dollarBill10 from "../../assets/images/10-dollar-bill.jpeg";
import dollarBill20 from "../../assets/images/20-dollar-bill.jpeg";
import centCoin1 from "../../assets/images/1-cent-coin.jpeg";
import centCoin5 from "../../assets/images/5-cent-coin.jpeg";
import centCoin10 from "../../assets/images/10-cent-coin.jpeg";
import centCoin25 from "../../assets/images/25-cent-coin.jpeg";

const DenominationCard = ({ denomination, value }) => {
  // variables to be set in if statements
  let imgSrc = null;
  let className = null;

  // determines img and className to associate with key/value pairs
  const determineImg = () => {
    if (denomination === "Twenties") {
      imgSrc = dollarBill20;
      className = "bills";
    }
    if (denomination === "Tens") {
      imgSrc = dollarBill10;
      className = "bills";
    }
    if (denomination === "Fives") {
      imgSrc = dollarBill5;
      className = "bills";
    }
    if (denomination === "Singles") {
      imgSrc = dollarBill1;
      className = "bills";
    }
    if (denomination === "Quarters") {
      imgSrc = centCoin25;
      className = "coins coin-25-cent";
    }
    if (denomination === "Dimes") {
      imgSrc = centCoin10;
      className = "coins coin-10-cent";
    }
    if (denomination === "Nickels") {
      imgSrc = centCoin5;
      className = "coins coin-5-cent";
    }
    if (denomination === "Pennies") {
      imgSrc = centCoin1;
      className = "coins coin-1-cent";
    }
  };

  determineImg();

  return (
    <section className="denomination-card">
      <img className={className} src={imgSrc} />
      <h4>
        {denomination}: {value}
      </h4>
    </section>
  );
};

export default DenominationCard;
