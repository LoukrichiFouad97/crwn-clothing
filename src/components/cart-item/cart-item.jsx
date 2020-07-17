import React from "react";

import {
	CartItemContainer,
	ImgStyles,
	ImageDetailsStyles,
	NameStyles,
} from "./cart-item-styles";

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<ImgStyles src={imageUrl} alt={name} />
		<ImageDetailsStyles>
			<NameStyles>{name}</NameStyles>
			<span className="price">
				{quantity} x {price}
			</span>
		</ImageDetailsStyles>
	</CartItemContainer>
);

export default cartItem;
