import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/shop/shop-selectors";
import PreviewCollection from "../preview-collection/preview-collection";

const CollectionsOverview = ({ collections }) => (
	<div className="collection-overview">
		{
		collections.map((collection) => (
			<PreviewCollection key={collection.id} {...collection} />
		))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
