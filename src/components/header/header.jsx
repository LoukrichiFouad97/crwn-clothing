import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase-utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link to="/shop" className="option">
				Shop
			</Link>
			<Link to="/contact" className="option">
				Contact
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					Sing Out
				</div>
			) : (
				<Link to="/signin" className="option">
					Sign in
				</Link>
			)}
			<CartIcon />
		</div>

		{/* Hide and Show cart dropdown  */}
		{!hidden && <CartDropDown />}
	</div>
);

// access to redux state
const mapStateToProps = createStructuredSelector({ 
	// passes top level state by default
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
