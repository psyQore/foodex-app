import React from "react";
import Image from "next/image";
import useStore from "../hooks/useStore";

const Category = ({ category }) => {
  const { name, icon, id } = category;

  const { categoryActual, handleClickCategory } = useStore();

  return (
    <div
      className={`${
        categoryActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt="imagen icono"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer "
        onClick={() => handleClickCategory(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
