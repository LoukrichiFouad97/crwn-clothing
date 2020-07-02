import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selectors";

import "./cart-dropdown.scss";

const cartDropdown = ({ cartItems, history }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your Cart is empty</span>
			)}
		</div>
		<CustomButton onClick={() => history.push('/checkout')}>Go To Checkout</CustomButton>
	</div>
);

const mapStateToProp = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProp)(cartDropdown));