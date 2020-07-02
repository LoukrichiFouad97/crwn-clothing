import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menuItem";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

import "./directory.scss";

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map((section) => (
			<MenuItem {...section} key={section.id} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
