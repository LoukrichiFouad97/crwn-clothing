export const addItemToCart = (cartItems, cartItemToAdd) => {
	// check if cart item existed
	const existedCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existedCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
  }
  
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
