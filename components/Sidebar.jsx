import React from "react";
import Image from "next/image";
import useStore from "../hooks/useStore";
import Category from "./Category";

const Sidebar = () => {
  const { categories } = useStore();

  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logo"
      />

      <nav className="mt-10">
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
