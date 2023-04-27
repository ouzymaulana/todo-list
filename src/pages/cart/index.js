import Layout from "@/Layout";
import style from "../../styles/Cart/Cart.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectDataCart } from "@/Redux/Slices/dataCartSlice";
import OrderList from "@/Components/Cart/OrderList";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/Helper/formatCurrency";

export default function CardPage() {
  const { cartItem } = useSelector(selectDataCart);
  const [total, setTotal] = useState(0);

  function calculateTotal(cartItem) {
    if (cartItem !== null) {
      let total = 0;
      cartItem.forEach((item) => {
        total += item.quantity * item.price;
      });
      return total;
    }
  }

  useEffect(() => {
    const newTotal = calculateTotal(cartItem);
    setTotal(newTotal);
  }, [cartItem, total]);

  return (
    <Layout>
      <div className={style.cart}>
        <div className={style.orderList}>
          <div className={style.titlePage}>
            <span>Order list</span>
          </div>
          <div className={style.dataCart}>
            <OrderList />
          </div>
          <div className={style.orderSummary}>
            <div className={style.subTotal}>
              <span>Subtotal</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <hr width="100%" color="#CCCCCC" style={{ margin: "25px 0" }} />
            <div className={style.total}>
              <span>TOTAL</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
          <button className={style.buttonPay}>Pay</button>
        </div>
      </div>
    </Layout>
  );
}
