import React from "react";
import ProductHeader from "./ProductHeader";
import ProductItem from "./ProductItem";

const ProductPage = ({ dataProduct }) => {
  return (
    <div className="product-page">
      <ProductHeader />
      <div className="product-list">
        {dataProduct.map((product, i) => (
          <ProductItem product={product} i={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
