import React from 'react';
import { useCart } from '../Context/CartContext';

function CartWidget() {
    const { cartItems } = useCart();

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <span className="amountCart">{totalQuantity}</span>
    );
}

export default CartWidget;
