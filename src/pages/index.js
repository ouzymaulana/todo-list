import Layout from "@/Layout";
import ProductPage from "../views/product";
import Cookies from "js-cookie";

export default function Product({ dataProduct }) {
  return (
    <Layout>
      <ProductPage dataProduct={dataProduct} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const dataProduct = await res.json();

  // const cookies = new Cookies(context.req.headers.cookie);
  // const isLoggedIn = cookies.get("email");
  // console.log(isLoggedIn);
  // if (!isLoggedIn) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }

  const result = dataProduct.map((product) => {
    return { ...product, stock: 10 };
  });
  return {
    props: {
      dataProduct: result,
    },
  };
}
