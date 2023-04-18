import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormatNumber } from "@/Helper/formatCurrency";

const ProductItem = ({ product, i }) => {
  const route = useRouter();
  return (
    <div
      onClick={() => route.push(`/product/detail/${product.id}`)}
      className="product-item"
    >
      <div className="product-img">
        <span>price {FormatNumber(product.price)}</span>
        <Image src={product.image} alt="gambar" width={100} height={100} />
      </div>
      <div className="product-title">
        <p>{product.title}</p>
      </div>
    </div>
  );
};

export default ProductItem;
