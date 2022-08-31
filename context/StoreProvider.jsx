import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryActual, setCategoryActual] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);

  const getCategories = async () => {
    const { data } = await axios("/api/categories");
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCategoryActual(categories[0]);
  }, [categories]);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCategoryActual(category[0]);
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  return (
    <StoreContext.Provider
      value={{
        categories,
        categoryActual,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };

export default StoreContext;
