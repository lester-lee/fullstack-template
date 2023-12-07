import { useSelector } from "react-redux";
import { skipToken } from "@reduxjs/toolkit/query";
import {
  useGetProductsQuery,
  useGetProductsByStoreIdQuery,
} from "./productsSlice";
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
  // Fetch list of products from api

  const {
    data: storeDetailsData,
    storeDetailsIsLoading,
    storeDetailsIsError,
  } = useGetStoreDetailsQuery();

  // get products using storeId
  const {
    data: productsByStoreData,
    isLoading: productsByStoreIsLoading,
    isError: productsByStoreIsError,
  } = useGetProductsByStoreIdQuery(storeDetailsData?.id ?? skipToken);

  // in case there is no token, getting data from the sample store
  const {
    data: sampleStoreData,
    isLoading: sampleStoreDataIsLoading,
    isError: sampleStoreDataIsError,
  } = useGetProductsByStoreIdQuery(1);

  // determine if there is or isn't a token, and conditionally return an array of data
  let storeToMap = [];
  const findStoreToMap = () => {
    if (token) {
      storeToMap = productsByStoreData;
    } else {
      storeToMap = sampleStoreData;
    }
  };

  findStoreToMap();

  console.log("storeToMap:", storeToMap);

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

  return productsByStoreIsLoading || sampleStoreDataIsLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="main-container">
      <div className="product-container">
        <ul className="product-list">
          {storeToMap?.map((product) => (
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
