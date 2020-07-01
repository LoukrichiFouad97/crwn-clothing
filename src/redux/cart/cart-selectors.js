import { createSelector } from "reselect";

// select cart from state
const selectCart = (state) => state.cart;

// select cart items from cart 
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

// select quantity from cart items
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
