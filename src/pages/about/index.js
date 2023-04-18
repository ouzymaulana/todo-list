import Layout from "@/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const route = useRouter();
  return (
    <Layout>
      <div>
        <Image src="/salad.jpg" width={200} height={200} alt="makanan" />

        <button onClick={() => route.push("About/satu")} className="button">
          detail
        </button>
      </div>
    </Layout>
  );
};

export default index;
