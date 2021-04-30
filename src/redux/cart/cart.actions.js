import  cartActionTypes from "./cart.types";


export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const cartAddItem = item => (
    {type: cartActionTypes.CART_ADD_ITEMS,
     payload: item
    }
);

export const removeCartItem = item => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart= () => ({
    type: cartActionTypes.CLEAR_CART
});