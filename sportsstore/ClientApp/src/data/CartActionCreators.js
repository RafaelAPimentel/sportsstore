import { ActionTypes } from "./Types"

export const addToCart = (product, quantity) => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});

export const updateCartQuantity = (product, quantity) => ({
    type: ActionTypes.updateCartQuanitity,
    payload: { product, quantity }
});

export const removeFromCart = (product) => ({
    type: ActionTypes.removeFromCart,
    payload: product
});

export const clearCart = () => ({
    type: ActionTypes.clearCart
});
