import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartProvider ({children}) {
    const {cartQuantity, setCartQuantity} = useState(0)

    const incrementCartQuantity = (newQuantity) => {
        setCartQuantity(cartQuantity+1)
    }

    return <CartContext.Provider value={{
        cardQuantity: cartQuantity,
        incrementCartQuantity: incrementCartQuantity,
    }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider