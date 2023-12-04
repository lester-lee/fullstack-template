const DenominationCard = (key, value) => {
  const imgSrc = null;
  const determineImg = () => {
    if (key === "Twenties") {
      imgSrc = "../../../images/twenty-dollar-bill.jpeg";
    }
    if (key === "Tens") {
      imgSrc = "../../../images/ten-dollar-bill.jpg";
    }
    if (key === "Fives") {
      imgSrc = "../../../images/five-dollar-bill.jpg";
    }
    if (key === "Singles") {
      imgSrc = "../../../images/one-dollar-bill.jpg";
    }
    if (key === "Quarters") {
      imgSrc = "../../../images/quarter.jpeg";
    }
    if (key === "Dimes") {
      imgSrc = "../../../images/dime.jpeg";
    }
    if (key === "Nickels") {
      imgSrc = "../../../images/Nickel.jpeg";
    }
    if (key === "Pennies") {
      imgSrc = "../../../images/penny.jpeg";
    }
  };

  determineImg;

  return (
    <div className="denomination-card">
      <p>{key}: </p>
      <p>{value}</p>
      <img src={imgSrc} />
    </div>
  );
};

export default DenominationCard;
