import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useStore from "../hooks/useStore";
import { formatQuantity } from "../helpers";

export default function Total() {
  const { order, name, setName, putOrder, total } = useStore();

  const checkOrder = useCallback(() => {
    return order.length === 0 || name === "" || name.length < 3;
  }, [order, name]);

  useEffect(() => {
    checkOrder();
  }, [order]);



  return (
    <Layout page="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

      <form onSubmit={putOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar {""} <span className="font-bold">${formatQuantity(total)}</span>{" "}
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={` ${
              checkOrder()
                ? "bg-indigo-300"
                : " bg-indigo-600 hover:cursor-pointer"
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirmar Pedido"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
