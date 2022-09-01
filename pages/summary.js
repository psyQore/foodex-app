import Layout from "../layout/Layout";
import SummaryProduct from "../components/SummaryProduct";
import useStore from "../hooks/useStore";

export default function Summary() {
  const { order } = useStore();

  return (
    <Layout page="Resumen">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>

      {order.length === 0 ? (
        <p className="text-center text-2xl">No hay elemento en tu pedido</p>
      ) : (
        order.map((product) => (
          <SummaryProduct key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}
