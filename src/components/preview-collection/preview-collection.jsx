import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./preview-collection.scss";

const PreviewCollection = ({ id, title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...restItemProps }) => (
						<CollectionItem key={id} {...restItemProps} />
					))}
			</div>
		</div>
	);
};

export default PreviewCollection;
