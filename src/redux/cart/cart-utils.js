/** add item to cart items
 * 1 - get the cart items and the item to add
 * 2 - search through cart items if contains the target item
 *     -- if cart contains the item
 *        -- return new cart & increase the quantity of items
 *     -- if cart doesn't contain the item
 *        -- return new cart with the new item in it
 * 3 - return cart items & add to it the quantity of 1 to new items
 */

export const addItemToCart = (cartItems, cartItemToAdd) => {
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

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
