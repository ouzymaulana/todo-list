import Layout from "@/Layout";
import ProductPage from "../../views/product";

export default function ProductCategory({ dataProduct }) {
  return (
    <Layout>
      <ProductPage dataProduct={dataProduct} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const category = `/category/${context.query.category}`;

  const res = await fetch(`https://fakestoreapi.com/products${category}`);
  const dataProduct = await res.json();

  return {
    props: {
      dataProduct,
    },
  };
}
