import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "../../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectDataCart } from "@/Redux/Slices/dataCartSlice";

const ProductHeader = () => {
  const route = useRouter();
  const { cartItem } = useSelector(selectDataCart);
  return (
    <div className={style.navbarCategory}>
      <div className={style.navbarTitle}>
        <span className={style.title} onClick={() => route.push("/")}>
          Products
        </span>
      </div>
      <hr width="100%" color="#CCCCCC"></hr>
      <div className={style.productCategory}>
        <Link className={style.categoryButton} href="/electronics">
          electronics
        </Link>
        <Link className={style.categoryButton} href="/jewelery">
          jewelery
        </Link>
        <Link className={style.categoryButton} href="/men's clothing">
          men's clothing
        </Link>
        <Link className={style.categoryButton} href="/women's clothing">
          women's clothing
        </Link>
        <Link className={style.categoryButton} href="/cart">
          {cartItem.length !== 0 ? (
            <span className={style.countProductCart}>{cartItem.length}</span>
          ) : (
            ""
          )}
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default ProductHeader;
