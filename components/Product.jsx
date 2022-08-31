import React from "react";
import Image from "next/image";
import useStore from "../hooks/useStore";
import { formatQuantity } from "../helpers";

const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useStore();

  const { name, imagen, price } = product;

  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen platillo ${name}`}
        width={400}
        height={500}
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-3xl text-amber-500">
          {formatQuantity(price)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 p-3 font-bold w-full"
          onClick={() =>{
            handleChangeModal()
            handleSetProduct(product)
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Product;
