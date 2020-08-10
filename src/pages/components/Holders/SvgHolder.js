/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, Fragment } from "react";

import { connect } from "react-redux";
import Draggable from "react-draggable";

let SvgHolder = ({ svg }) => {
	return (
		<Fragment>
			<Draggable>
				<div id='svg-holder' dangerouslySetInnerHTML={{ __html: svg }}></div>
			</Draggable>
		</Fragment>
	);
};
const mapStateToProps = (state) => {
	let svg = state.output.svg;
	return { svg };
};
SvgHolder = connect(mapStateToProps, null)(SvgHolder);
export default SvgHolder;
