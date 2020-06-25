import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";

const Header = ({ currUser }) => (
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
			{currUser ? (
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

export default Header;
