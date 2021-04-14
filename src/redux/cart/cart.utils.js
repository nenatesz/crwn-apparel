export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    //  the map function on the cartItems returns a new array, which causes the component to re-render
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }else{
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
}