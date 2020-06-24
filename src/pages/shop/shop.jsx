import React, { Component } from "react";
import SHOP_DATA from "./Shop-Data";
import PreviewCollection from "../../components/preview-collection/preview-collection";

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map((collection) => (
					<PreviewCollection key={collection.id} {...collection} />
				))}
			</div>
		);
	}
}

export default Shop;
