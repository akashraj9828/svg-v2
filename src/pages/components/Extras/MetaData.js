import React, { Fragment } from "react";
import { connect } from "react-redux";

let MetaData = ({ pathLength, charCount, width, height }) => {
	let meta = { pathLength, charCount, width, height };
	let label = { pathLength: "Total Path Length ", charCount: "Number Of alphabet", width: "Width is ", height: "Height is " };
	return (
		<div id='meta-data' className='bg-dark d-inline'>
			<h2 className='meta-data-heading d-inline bg-dark text-white'>Meta</h2>
			<br />
			<br />
			{Object.entries(meta).map(([key, value], i) => (
				<Fragment>
					<span key={i} className='meta-data-text font-weight-bold text-light'>
						{label[key]}: <span className='text-white'>{value}</span>
					</span>
					<br />
				</Fragment>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	let { pathLength, charCount, width, height } = state.output;
	return { pathLength, charCount, width, height };
};

MetaData = connect(mapStateToProps, null)(MetaData);
export default MetaData;
