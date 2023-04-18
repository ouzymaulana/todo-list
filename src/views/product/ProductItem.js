import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { formatCurrency } from "@/Helper/formatCurrency";
import style from "../../styles/CardProduct.module.css";
import ButtonAddToCart from "@/Components/Product/ButtonAddToCart";
import { useSelector } from "react-redux";
import { selectDataCart } from "@/Redux/Slices/dataCartSlice";

const ProductItem = ({ product, i }) => {
  const route = useRouter();
  const { cartItem } = useSelector(selectDataCart);

  return (
    <div className={style.productItem}>
      <div className={style.productImg}>
        <Image
          className={style.image}
          src={product.image}
          alt="gambar"
          width={100}
          height={100}
        />
      </div>
      <div className={style.productTitle}>
        <p
          className={style.title}
          onClick={() => route.push(`/product/detail/${product.id}`)}
        >
          {product.title}
        </p>
        <span className={style.productPrice}>
          price {formatCurrency(product.price)}
        </span>
      </div>
      <div className={style.productButton}>
        <ButtonAddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductItem;
