import { selectDataCart } from "@/Redux/Slices/dataCartSlice";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/Cart/Cart.module.scss";
import Image from "next/image";
import {
  decrementQuantity,
  incrementQuantity,
  setCartItem,
} from "@/Redux/Slices/dataCartSlice";
import { formatCurrency } from "@/Helper/formatCurrency";

export default function OrderList() {
  const { cartItem } = useSelector(selectDataCart);
  const dispatch = useDispatch();

  const increment = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  return (
    <>
      {cartItem.map((data, i) => (
        <div className={style.orderItem} key={i}>
          <div className={style.dataProduct}>
            <Image
              src={data.image}
              alt="product"
              width={100}
              height={100}
              className={style.image}
            />
            <div className={style.productTitle}>
              <span>{data.title}</span>
              <span>price : {formatCurrency(data.price)}</span>
            </div>
          </div>
          <div className={style.subTotalPerItem}>
            <span>{formatCurrency(data.price * data.quantity)}</span>
          </div>
          <div className={style.incrementDecrementButton}>
            <button className={style.decrement} onClick={() => decrement(data)}>
              -
            </button>
            <span className={style.quantity}>{data.quantity}</span>
            <button className={style.increment} onClick={() => increment(data)}>
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
