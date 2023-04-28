import { formatCurrency } from "@/Helper/formatCurrency";
import Layout from "@/Layout";
import Image from "next/image";
import React from "react";
import style from "../../../styles/DetailProduct.module.css";
import checkLogin from "@/Helper/checkLogin";

const DetailProduct = ({ productDetail }) => {
  return (
    <Layout>
      <div className={style.detailProduct}>
        <div className={style.cardDetailProduct}>
          {/* <img src={productDetail.image} alt="gambar" width={300} height={320} /> */}
          <Image
            className={style.image}
            src={productDetail.image}
            alt="gambar"
            width={100}
            height={120}
          />
          <div className={style.descriptionProductDetail}>
            <p className={style.descriptionValue}>{productDetail.title}</p>
            <p className={style.descriptionValue}>
              Category : {productDetail.category}
            </p>
            <p className={style.descriptionValue}>
              Price : {formatCurrency(productDetail.price)}
            </p>
            <p className={style.descriptionValue}>
              {productDetail.description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DetailProduct;

export async function getServerSideProps(context) {
  const { id } = context.query;

  let productDetail = [];
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    productDetail = await res.json();
  } catch (error) {
    console.error(error);
  }

  const isLogin = checkLogin(context.req.cookies.email);

  if (isLogin) {
    return isLogin;
  }

  return {
    props: {
      productDetail,
    },
  };
}
