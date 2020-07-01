import cartActionTypes from "./cart-types";

export const toggleCartHidden = () => ({
	type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

// Passes the item to the reducer as an action payload 
export const addItem = (item) => ({
	type: cartActionTypes.ADD_ITEM,
	payload: item,
});

