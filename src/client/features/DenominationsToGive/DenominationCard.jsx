import "./DenominationCard.scss";

const DenominationCard = ({ denomination, value }) => {
  // variables to be set in if statements
  let imgSrc = null;
  let className = null;

  // determines img and className to associate with key/value pairs
  const determineImg = () => {
    if (denomination === "Twenties") {
      imgSrc = "src/client/assets/images/20-dollar-bill.jpeg";
      className = "bills";
    }
    if (denomination === "Tens") {
      imgSrc = "src/client/assets/images/10-dollar-bill.jpeg";
      className = "bills";
    }
    if (denomination === "Fives") {
      imgSrc = "src/client/assets/images/5-dollar-bill.jpeg";
      className = "bills";
    }
    if (denomination === "Singles") {
      imgSrc = "src/client/assets/images/1-dollar-bill.jpeg";
      className = "bills";
    }
    if (denomination === "Quarters") {
      imgSrc = "src/client/assets/images/25-cent-coin.jpeg";
      className = "coins coin-25-cent";
    }
    if (denomination === "Dimes") {
      imgSrc = "src/client/assets/images/10-cent-coin.jpeg";
      className = "coins coin-10-cent";
    }
    if (denomination === "Nickels") {
      imgSrc = "src/client/assets/images/5-cent-coin.jpeg";
      className = "coins coin-5-cent";
    }
    if (denomination === "Pennies") {
      imgSrc = "src/client/assets/images/1-cent-coin.jpeg";
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
