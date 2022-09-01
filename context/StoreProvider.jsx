import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryActual, setCategoryActual] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

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

  const handleEditQuantities = (id) => {
    const productUpgrade = order.filter((product) => product.id === id);
    setProduct(productUpgrade[0]);

    setModal(!modal);
  };

  const handleAddOrder = ({ categoryId, ...product }) => {
    if (order.some((productState) => productState.id === product.id)) {
      const updatedOrder = order.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrder(updatedOrder);
      toast.success("Guardado Correctamente", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    } else {
      setOrder([...order, product]);
      toast.success("Agregado al Pedido", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    }
    setModal(false);
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
        handleChangeModal,
        handleAddOrder,
        order,
        handleEditQuantities,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };

export default StoreContext;
