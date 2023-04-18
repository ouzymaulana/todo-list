import { formatCurrency } from "@/Helper/formatCurrency";
import Layout from "@/Layout";
import Image from "next/image";
import React from "react";
import style from "../../../styles/DetailProduct.module.css";

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
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productDetail = await res.json();
  return {
    props: {
      productDetail,
    },
  };
}
