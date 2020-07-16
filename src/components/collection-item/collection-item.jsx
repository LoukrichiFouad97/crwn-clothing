import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart-actions";

// import "./collection-item.scss";
import {
	CollectionItemContainer,
	CollectionFooterContainer,
	ImageStyles,
	NameStyles,
	PriceStyle,
} from "./collection-item.style";

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<CollectionItemContainer>
			<ImageStyles style={{ backgroundImage: `url(${imageUrl})` }} />
			<CollectionFooterContainer>
				<NameStyles>{name}</NameStyles>
				<PriceStyle>{price}</PriceStyle>
			</CollectionFooterContainer>
			<CustomButton inverted onClick={() => addItem(item)}>
				Add To Cart
			</CustomButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
