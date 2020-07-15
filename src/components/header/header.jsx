import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase-utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from "./header.style";

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>

		<OptionsContainer>
			<OptionLink to="/shop">Shop</OptionLink>

			<OptionLink to="/contact">Contact</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={() => auth.signOut()}>
					Sing Out
				</OptionLink>
			) : (
				<OptionLink to="/signin">Sign in</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>

		{/* Hide and Show cart dropdown  */}
		{!hidden && <CartDropDown />}
	</HeaderContainer>
);

// access to redux state
const mapStateToProps = createStructuredSelector({
	// passes top level state by default
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
