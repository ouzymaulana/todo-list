import { useRouter } from "next/router";
import React from "react";

const Datas = () => {
  const route = useRouter();

  console.log(route.query);

  return <div>user</div>;
};

export default Datas;
