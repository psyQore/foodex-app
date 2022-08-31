import React from "react";
import Image from "next/image";
import useStore from "../hooks/useStore";
import { formatQuantity } from "../helpers";

const ModalProduct = () => {
  const { product, handleChangeModal } = useStore();

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`imagen producto ${product.name}`}
          src={`/assets/img/${product.imagen}.jpg`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5 ">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatQuantity(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ModalProduct;
