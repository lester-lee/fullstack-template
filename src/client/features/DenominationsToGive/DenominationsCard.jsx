const DenominationCard = ({ denomination, value }) => {
  // variables to be set in if statements
  let imgSrc = null;
  let className = null;

  // determines img and className to associate with key/value pairs
  const determineImg = () => {
    if (denomination === "Twenties") {
      imgSrc = "src/client/assets/images/twenty-dollar-bill.jpeg";
      className = "bills";
    }
    if (denomination === "Tens") {
      imgSrc = "src/client/assets/images/ten-dollar-bill.jpg";
      className = "bills";
    }
    if (denomination === "Fives") {
      imgSrc = "src/client/assets/images/five-dollar-bill.jpg";
      className = "bills";
    }
    if (denomination === "Singles") {
      imgSrc = "src/client/assets/images/one-dollar-bill.jpg";
      className = "bills";
    }
    if (denomination === "Quarters") {
      imgSrc = "src/client/assets/images/quarter.jpeg";
      className = "coins quarter";
    }
    if (denomination === "Dimes") {
      imgSrc = "src/client/assets/images/dime.jpeg";
      className = "coins dime";
    }
    if (denomination === "Nickels") {
      imgSrc = "src/client/assets/images/Nickel.jpeg";
      className = "coins nickel";
    }
    if (denomination === "Pennies") {
      imgSrc = "src/client/assets/images/penny.jpeg";
      className = "coins penny";
    }
  };

  determineImg();

  return (
    <ul className="denomination-card">
      <h4>{denomination}: </h4>
      <p>{value}</p>
      <img className={className} src={imgSrc} />
    </ul>
  );
};

export default DenominationCard;
