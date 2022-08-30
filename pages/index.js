import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout";
import useStore from "../hooks/useStore";

export default function Home() {
  const { categoryActual } = useStore();

  return (
    <Layout page={`Menú - ${categoryActual?.name}`}>
      <h1 className="text-4xl font-black">{categoryActual?.name}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
    </Layout>
  );
}
