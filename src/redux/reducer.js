import { default_state } from "./default_state";
import {
	SET_TEXT,
	SET_FONT_FAMILY,
	SET_FONT_VARIANT,
	SET_TIMING_FUNCTION,
	SET_SIZE,
	SET_DELAY,
	SET_DURATION,
	SET_STROKE_WIDTH,
	SET_FILL_COLOR,
	SET_STROKE_COLOR,
	SET_REPEAT,
	// output
	SET_SVG,
	SET_CSS,
	SET_JS,
	SET_PATH_LENGTH,
	SET_CHAR_COUNT,
	SET_WIDTH,
	SET_HEIGHT,
	// meta
	SET_INITIALIZED,
} from "./actions";

function reducer(state = default_state, action) {
	let { settings, output, meta } = { ...state };
	let value = action.value;
	var new_state = null;
	switch (action.type) {
		case SET_TEXT:
			settings.text = value;
			new_state = { ...state, settings };
			return new_state;
		case SET_FONT_FAMILY:
			settings.fontFamily = value;
			new_state = { ...state, settings };
			return new_state;
		case SET_FONT_VARIANT:
			settings.fontVariant = value;
			new_state = { ...state, settings };
			return new_state;
		case SET_SIZE:
			settings.size = value ?? 0;
			new_state = { ...state, settings };
			return new_state;

		case SET_DELAY:
			settings.delay = isNaN(value) ? "" : value;
			new_state = { ...state, settings };
			return new_state;
		case SET_TIMING_FUNCTION:
			settings.timingFunction = value;
			new_state = { ...state, settings };
			return new_state;

		case SET_DURATION:
			settings.duration = isNaN(value) ? "" : value;
			new_state = { ...state, settings };
			return new_state;

		case SET_STROKE_WIDTH:
			settings.strokeWidth = isNaN(value) ? "" : value;
			new_state = { ...state, settings };
			return new_state;
		case SET_REPEAT:
			settings.repeat = isNaN(value) ? "" : value;
			new_state = { ...state, settings };
			return new_state;

		case SET_FILL_COLOR:
			settings.fillColor = value;
			new_state = { ...state, settings };
			return new_state;
		case SET_STROKE_COLOR:
			settings.strokeColor = value;
			new_state = { ...state, settings };
			return new_state;

		case SET_CSS:
			output.css = value;
			return { ...state, output };

		case SET_JS:
			output.js = value;
			return { ...state, output };

		case SET_SVG:
			output.svg = value;
			const x = document.createElement("div");
			x.innerHTML = value;
			const paths = x.querySelectorAll("path");
			let totalLength = 0;
			for (let i = 0; i < paths.length; i++) {
				const path = paths[i];
				const length = path.getTotalLength();
				totalLength += length;
			}
			const svgDom = x.querySelector("svg");
			const width = parseFloat(svgDom.getAttribute("width"));
			const height = parseFloat(svgDom.getAttribute("height"));
			output.pathLength = totalLength;
			output.width = width;
			output.height = height;
			output.charCount = state.settings.text.replace(/ /g, "").length;
			return { ...state, output };
		case SET_PATH_LENGTH:
			output.pathLength = value;
			return { ...state, output };
		case SET_CHAR_COUNT:
			output.charCount = value;
			return { ...state, output };
		case SET_WIDTH:
			output.width = value;
			return { ...state, output };
		case SET_HEIGHT:
			output.height = value;
			return { ...state, output };

		case SET_INITIALIZED:
			meta.initialized = value;
			return { ...state, meta };

		default:
			return state;
	}
}

export default reducer;
