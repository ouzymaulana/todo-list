import Layout from "@/Layout";
import ProductPage from "../views/product";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import checkLogin from "@/Helper/checkLogin";

export default function Product({ dataProduct }) {
  return (
    <Layout>
      <ProductPage dataProduct={dataProduct} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let dataProduct = [];
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    dataProduct = await res.json();

    console.log(res);
  } catch (error) {
    console.error(error);
  }

  const isLogin = checkLogin(context.req.cookies.email);

  if (isLogin) {
    return isLogin;
  }

  const result = dataProduct.map((product) => {
    return { ...product, stock: 10 };
  });
  return {
    props: {
      dataProduct: result,
    },
  };
}
