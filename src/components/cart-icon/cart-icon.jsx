import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// import "./cart-icon.scss";
import {
	CartIconContainer,
	ShoppingIconStyles,
	ItemCountStyles,
} from "./cart-icon-styles";

const CartIcon = ({ toggleCartHidden, ItemsCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIconStyles />
		<ItemCountStyles>{ItemsCount}</ItemCountStyles>
	</CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
	ItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
