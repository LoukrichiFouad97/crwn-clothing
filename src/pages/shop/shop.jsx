import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collection-overview/collection-overview";
import collectionPage from "../collection/collection";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase-utils";
import updateCollections from "../../redux/shop/shop-actions";

/** Pull down data from firestore
 * [1] when component mount get the collection reference
 * [2] get the snapshot using onSnapshot('gets the data when updating the snapshot or when accessing it at first time', it accepts the snapshot as argument)
 *
 */

class Shop extends React.Component {
	componentDidMount() {
		const collectionRef = firestore.collection("collection");

		const { updateCollections } = this.props;
		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionMap = convertCollectionsSnapshotToMap(snapshot);
				updateCollections(collectionMap);
			}
		);
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route
					path={`${match.path}/:collectionId`}
					component={collectionPage}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) =>
		dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
