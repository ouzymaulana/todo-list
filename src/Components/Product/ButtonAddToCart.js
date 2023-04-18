import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/CardProduct.module.css";
import {
  decrementQuantity,
  // incrementQuantity,
  selectDataCart,
} from "@/Redux/Slices/dataCartSlice";
import { setCartItem, incrementQuantity } from "@/Redux/Slices/dataCartSlice";

export default function ButtonAddToCart({ product }) {
  const { cartItem } = useSelector(selectDataCart);
  const dispatch = useDispatch();

  const handleAddToCart = (value) => {
    dispatch(setCartItem(value));
  };

  const increment = (productItem) => {
    dispatch(incrementQuantity(productItem));
  };

  const decrement = (productItem) => {
    dispatch(decrementQuantity(productItem));
  };

  const hasCartProduct = cartItem.find((item) => item.id === product.id);

  return (
    <>
      {hasCartProduct && hasCartProduct.quantity !== 0 ? (
        <div className={style.quantityWrapper}>
          <button className={style.button} onClick={() => decrement(product)}>
            -
          </button>
          <span className={style.quantity}>{hasCartProduct.quantity}</span>
          <button className={style.button} onClick={() => increment(product)}>
            +
          </button>
        </div>
      ) : (
        <button
          className={style.button}
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
      )}
    </>
  );
}
