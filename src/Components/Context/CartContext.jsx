import React, { createContext, useState, useContext, useEffect } from 'react';

// Creamos el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [clickedAddToCart, setClickedAddToCart] = useState(false);

  useEffect(() => {
    if (clickedAddToCart) {
      console.log("CartList:", cartList);
      setClickedAddToCart(false); // Resetea el estado para que no se ejecute en el próximo render
    }
  }, [cartList, clickedAddToCart]); // Este efecto se ejecuta cuando cartList cambia o cuando se hace clic en el botón de agregar al carrito

  const addToCart = (course) => {
    setCartList([...cartList, course]);
    setClickedAddToCart(true); // Indica que se ha hecho clic en el botón de agregar al carrito
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartContext;
