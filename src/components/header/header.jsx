import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase-utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

const Header = ({ currentUser }) => (
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
		</div>
	</div>
);

// access to redux reducers
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Header);
