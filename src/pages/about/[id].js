import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const route = useRouter();
  console.log(route);
  const id = route.query.id;
  return <div>{id}</div>;
};

export default Detail;
