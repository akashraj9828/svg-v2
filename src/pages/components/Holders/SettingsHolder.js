/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { SET_TEXT, SET_SIZE, setSettings, SET_FILL_COLOR, SET_FONT_FAMILY, SET_FONT_VARIANT, SET_STROKE_COLOR } from "./../../../redux/actions";

import { svgGenerator } from "./../../logic/";
import { useDebounce } from "../../../customHooks";

let SettingsHolder = (props) => {
	let { dispatch, pathLength, charCount } = props;

	// eslint-disable-next-line no-unused-vars
	let { fontFamily, fontVariant, text, size, strokeWidth, fillColor, timingFunction, strokeColor, repeat, initialized } = props;
	const [inputText, setInputText] = useState(text);
	const [inputSize, setInputSize] = useState(size);

	const debouncedText = useDebounce(inputText, 500);
	const debouncedSize = useDebounce(inputSize, 500);

	useEffect(() => {
		update(SET_TEXT, debouncedText);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedText]);

	useEffect(() => {
		update(SET_SIZE, debouncedSize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSize]);

	useEffect(() => {
		if (initialized) {
			svgGenerator.renderCurrent();
		}
	}, [debouncedText, debouncedSize, strokeWidth, fillColor, fontVariant, timingFunction, strokeColor, repeat, initialized]);

	useEffect(() => {
		if (initialized) {
			svgGenerator.loadVariants();
		}
	}, [fontFamily, initialized]);

	const update = (key, val) => {
		dispatch(setSettings(key, val));
	};

	return (
		<div className='settings'>
			<div className='tuners-holder'>
				<div className='row'>
					<div className='input-group'>
						<label>Text:</label>
						<br />
						<textarea rows={3} className='input-text text-center ' type='text' id='input-text' value={inputText} placeholder='Input Text Here' onChange={(e) => setInputText(e.target.value)} />
					</div>
					<div className='input-group'>
						<label>Typeface: </label>
						<select id='font-select' value={fontFamily} onChange={(e) => update(SET_FONT_FAMILY, e.target.value)}></select>
					</div>
					<div className='input-group'>
						<label>Variant:</label>
						<select id='font-variant' value={fontVariant} onChange={(e) => update(SET_FONT_VARIANT, e.target.value)}></select>
					</div>
				</div>

				<div className='row'>
					<div className='input-group'>
						<label>Size:</label>
						<input type='range' min={50} max={120} id='input-size' value={size} placeholder={100} onChange={(e) => setInputSize(e.target.value)} />
					</div>
				</div>

				<div className='row'>
					<div className='input-group'>
						<label>Fill Color:</label>
						<input type='color' id='input-color' value={fillColor} onChange={(e) => update(SET_FILL_COLOR, e.target.value)} />
					</div>
					<div className='input-group'>
						<label>Stroke Color:</label>
						<input type='color' id='input-color' value={strokeColor} onChange={(e) => update(SET_STROKE_COLOR, e.target.value)} />
					</div>
				</div>

				<div className='row'>
					<div className='input-group'>
						<label>
							Price: <span className='h4 text-warning'> € {parseInt(pathLength * 0.15 + charCount * 10)} </span>
						</label>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

const mapStateToProps = (state) => {
	let { settings, meta } = state;
	let { pathLength, charCount, width, height } = state.output;
	return { ...settings, ...meta, ...{ pathLength, charCount, width, height } };
};

SettingsHolder = connect(mapStateToProps, null)(SettingsHolder);
// SettingsHolder = connect(null, null)(SettingsHolder)
export default SettingsHolder;
