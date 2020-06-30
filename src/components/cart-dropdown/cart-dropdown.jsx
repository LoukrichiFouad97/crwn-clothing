import React from "react";

// import CustomButton from "../custom-button/custom-button";
import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

const cartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<CustomButton>Go To Checkout</CustomButton>
	</div>
);

export default cartDropdown;
