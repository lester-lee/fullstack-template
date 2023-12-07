import { useSelector } from "react-redux";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetProductsByStoreIdQuery } from "./productsSlice";
import { useGetStoreDetailsQuery } from "../UserAccounts/authSlice";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import CartCard from "./CartCard";
import Popup from "../Popup/Popup";
import { useState, useEffect } from "react";
import "./CashRegister.scss";
import { selectToken } from "../UserAccounts/authSlice";

const CashRegister = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  /////////// Fetches list of products from api//////////////
  // gets store details using useGetStoreDetailsQuery
  const {
    data: storeDetailsData,
    storeDetailsIsLoading,
    storeDetailsIsError,
  } = useGetStoreDetailsQuery();

  // get products by storeId using useGetProdcutsByStoreIdQuery
  // if no token, storeId is set to 1
  // with a token, storeId is found via useGetStoreDetailsQuery above
  const {
    data: productsByStoreData,
    isLoading: productsByStoreIsLoading,
    isError: productsByStoreIsError,
  } = useGetProductsByStoreIdQuery(
    !token ? 1 : storeDetailsData?.id ?? skipToken
  );

  // Use select cart items and total price from redux store
  let total = useSelector((state) => state.cart.totalPrice);
  total = Math.abs(total).toFixed(2);
  const cartItems = useSelector((state) => state.cart.cartItems);

  //Popup: useState and useEffect for Popup function
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 200);
  }, []);

  return productsByStoreIsLoading || storeDetailsIsLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="main-container">
      <div className="product-container">
        <ul className="product-list">
          {productsByStoreData?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <ul className="cart-list">
          {cartItems.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </ul>
        <h2 className="total-price">Total: ${total}</h2>
        <button onClick={() => navigate("/received-bills")}>Checkout</button>
      </div>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1 className="popup-header">Greet the customer:</h1>
        <p className="popup-para">Hello, how can I help you today?</p>
      </Popup>
    </div>
  );
};

export default CashRegister;
