import ShopActionTypes from "./shop-actions";

const updateCollections = (collectionsMap) => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});

export default updateCollections;
