import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collection-overview/collection-overview";
import collectionPage from "../collection/collection";

const Shop = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={collectionPage} />
	</div>
);

export default Shop;
