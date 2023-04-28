import Layout from "@/Layout";
import ProductPage from "../views/product";
import checkLogin from "@/Helper/checkLogin";

export default function ProductCategory({ dataProduct }) {
  return (
    <Layout>
      <ProductPage dataProduct={dataProduct} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const category = `/category/${context.query.category}`;

  let dataProduct = [];
  try {
    const res = await fetch(`https://fakestoreapi.com/products${category}`);
    dataProduct = await res.json();
  } catch (error) {
    console.error(error);
  }

  const isLogin = checkLogin(context.req.cookies.email);

  if (isLogin) {
    return isLogin;
  }

  return {
    props: {
      dataProduct,
    },
  };
}
