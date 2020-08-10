import React, { useRef, useEffect } from "react";

import { connect } from "react-redux";

let SvgHolder = ({ svg }) => {
	const svg_holder = useRef(null);
	useEffect(() => {
		if (svg_holder) {
			svg_holder.current.innerHTML = svg.trim();
		}
	}, [svg_holder, svg]);
	return <div ref={svg_holder} id='svg-holder'></div>;
};
const mapStateToProps = (state) => {
	let svg = state.output.svg;
	return { svg };
};
SvgHolder = connect(mapStateToProps, null)(SvgHolder);
export default SvgHolder;
