const DenominationCard = (key, value) => {
  // variables to be set in if statements
  let imgSrc = null;
  let className = null;

  // determines img and className to associate with key/value pairs
  const determineImg = () => {
    if (key === "Twenties") {
      imgSrc = "../../../images/twenty-dollar-bill.jpeg";
      className = "bills";
    }
    if (key === "Tens") {
      imgSrc = "../../../images/ten-dollar-bill.jpg";
      className = "bills";
    }
    if (key === "Fives") {
      imgSrc = "../../../images/five-dollar-bill.jpg";
      className = "bills";
    }
    if (key === "Singles") {
      imgSrc = "../../../images/one-dollar-bill.jpg";
      className = "bills";
    }
    if (key === "Quarters") {
      imgSrc = "../../../images/quarter.jpeg";
      className = "coins quarter";
    }
    if (key === "Dimes") {
      imgSrc = "../../../images/dime.jpeg";
      className = "coins dime";
    }
    if (key === "Nickels") {
      imgSrc = "../../../images/Nickel.jpeg";
      className = "coins nickel";
    }
    if (key === "Pennies") {
      imgSrc = "../../../images/penny.jpeg";
      className = "coins penny";
    }
  };

  determineImg();

  return (
    <div className="denomination-card">
      <p>{key}: </p>
      <p>{value}</p>
      <img className={className} src={imgSrc} />
    </div>
  );
};

export default DenominationCard;
