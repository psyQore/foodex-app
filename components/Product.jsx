import React from "react";
import Image from "next/image";
import { formatQuantity } from "../helpers";

const Product = ({ product }) => {
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
      </div>
    </div>
  );
};

export default Product;
