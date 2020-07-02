import React from "react";
import { connect } from "react-redux";

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../../redux/cart/cart-actions";

import "./checkout-item.scss";

const CheckoutItem = ({
	cartItem,
	clearItemFromCart,
	increaseQuantity,
	decreaseQuantity,
}) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => decreaseQuantity(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => increaseQuantity(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div
				className="remove-button"
				onClick={() => clearItemFromCart(cartItem)}
			>
				&#10005;
			</div>
		</div>
	);
};

// send action type(CLEAR_ITEM_FROM_CART) to cart-reducer
const mapDispatchToProps = (dispatch) => ({
	clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
	increaseQuantity: (item) => dispatch(addItem(item)),
	decreaseQuantity: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
