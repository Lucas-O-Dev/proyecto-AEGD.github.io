import React, { useContext } from 'react';
import CartContext from '../Context/CartContext'; // Asumiendo que CartContext está definido en otro archivo
import './_cart.scss'

const Cart = () => {
    // Usamos el hook useContext para acceder al contexto
    const cartList = useContext(CartContext);

    // Mostrar el contenido de cartList en la consola
    console.log('Contenido del carrito:', cartList);

    return (
        <div>
            <h2>Carrito</h2>
        </div>
    );
};

export default Cart;

