import Layout from "@/Layout";
import ProductPage from "../../views/product";

export default function Product({ dataProduct }) {
  console.log(dataProduct);
  return (
    <Layout>
      <ProductPage dataProduct={dataProduct} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const dataProduct = await res.json();

  const result = dataProduct.map((product) => {
    return { ...product, stock: 10 };
  });
  return {
    props: {
      dataProduct: result,
    },
  };
}
