import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

import {
	CartDropdownContainer,
	EmptyMessage,
	CartItemStyles,
	ButtonStyles,
} from "./cart-dropdown-styles";

const cartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItemStyles>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessage>Your Cart is empty</EmptyMessage>
			)}
		</CartItemStyles>
		<ButtonStyles
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			Go To Checkout
		</ButtonStyles>
	</CartDropdownContainer>
);

const mapStateToProp = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProp)(cartDropdown));
