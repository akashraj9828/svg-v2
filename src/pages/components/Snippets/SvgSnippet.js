import React from "react";
import { connect } from "react-redux";
import { format, download } from "./../../utils";

let SvgSnippet = ({ svg }) => {
	return (
		<div id='output-svg'>
			<div className='context'>
				<button
					className='download-btn'
					onClick={() => {
						download("text.svg", format(svg));
					}}>
					Download SVG
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	let svg = state.output.svg;
	return { svg };
};

SvgSnippet = connect(mapStateToProps, null)(SvgSnippet);
export default SvgSnippet;
