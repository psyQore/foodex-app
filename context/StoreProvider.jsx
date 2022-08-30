import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryActual, setCategoryActual] = useState({});

  const getCategories = async () => {
    const { data } = await axios("/api/categories");
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCategoryActual(category[0]);
  };

  return (
    <StoreContext.Provider
      value={{
        categories,
        categoryActual,
        handleClickCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };

export default StoreContext;
