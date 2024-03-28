import {createContext, useContext, useState} from "react";
import products from "../products";

const MainContext = createContext({});

export const MainProvider = ({children}) => {
  const [productsInCart, setProductsInCart] = useState([]);

  function addProductToCart(newProduct) {
    const ifProductExist = productsInCart.find((item) => item.id === newProduct.id);

    if (ifProductExist) {
      const updatedProducts = productsInCart.map((productInCart) =>
        productInCart.id === newProduct.id ? {...productInCart, count: productInCart.count + 1} : productInCart
      );

      setProductsInCart(updatedProducts);
    } else {
      setProductsInCart([...productsInCart, newProduct]);
    }
  }

  function removeProductFromCart(productId) {
    const product = productsInCart.find((item) => item.id === productId);
    let updatedProducts = [];

    if (product.count === 1) {
      updatedProducts = productsInCart.filter((productInCart) => productInCart.id !== productId);
    } else {
      updatedProducts = productsInCart.map((productInCart) =>
        productInCart.id === productId ? {...productInCart, count: productInCart.count - 1} : productInCart
      );
    }

    setProductsInCart(updatedProducts);
  }

  return (<MainContext.Provider
      value={{
        products,
        productsInCart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </MainContext.Provider>)
};

export const useMainContext = () => useContext(MainContext);
