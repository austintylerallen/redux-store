import { v4 as uuidv4 } from 'uuid'; // Import UUID

export const addToCart = (product) => {
  return {
    type: 'cart/addToCart',
    payload: { ...product, cartItemId: uuidv4() }, // Add a unique identifier
  };
};

export const removeFromCart = (cartItemId) => {
  return {
    type: 'cart/removeFromCart',
    payload: cartItemId,
  };
};

export const clearCart = () => {
  return {
    type: 'cart/clearCart',
  };
};
