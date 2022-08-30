import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout";
import Product from "../components/Product";
import useStore from "../hooks/useStore";

export default function Home() {
  const { categoryActual } = useStore();

  return (
    <Layout page={`Menú - ${categoryActual?.name}`}>
      <h1 className="text-4xl font-black">{categoryActual?.name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoryActual?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
