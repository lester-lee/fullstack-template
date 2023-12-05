const DenominationCard = ({ denomination, value }) => {
  // variables to be set in if statements
  let imgSrc = null;
  let className = null;

  // determines img and className to associate with key/value pairs
  const determineImg = () => {
    if (denomination === "Twenties") {
      imgSrc = "src/images/twenty-dollar-bill.jpeg";
      className = "bills";
    }
    if (denomination === "Tens") {
      imgSrc = "src/images/ten-dollar-bill.jpg";
      className = "bills";
    }
    if (denomination === "Fives") {
      imgSrc = "src/images/five-dollar-bill.jpg";
      className = "bills";
    }
    if (denomination === "Singles") {
      imgSrc = "src/images/one-dollar-bill.jpg";
      className = "bills";
    }
    if (denomination === "Quarters") {
      imgSrc = "src/images/quarter.jpeg";
      className = "coins quarter";
    }
    if (denomination === "Dimes") {
      imgSrc = "src/images/dime.jpeg";
      className = "coins dime";
    }
    if (denomination === "Nickels") {
      imgSrc = "src/images/Nickel.jpeg";
      className = "coins nickel";
    }
    if (denomination === "Pennies") {
      imgSrc = "src/images/penny.jpeg";
      className = "coins penny";
    }
  };

  determineImg();

  return (
    <div className="denomination-card">
      <p>{denomination}: </p>
      <p>{value}</p>
      <img className={className} src={imgSrc} />
    </div>
  );
};

export default DenominationCard;
