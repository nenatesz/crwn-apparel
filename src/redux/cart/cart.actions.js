import  cartActionTypes from "./cart.types";


export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const cartAddItem = item => (
    {type: cartActionTypes.CART_ADD_ITEMS,
     payload: item
    }
)