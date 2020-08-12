/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from "react";
import SettingsHolder from "./components/Holders/SettingsHolder";
import SvgHolder from "./components/Holders/SvgHolder";
import SvgSnippet from "./components/Snippets/SvgSnippet";
import { svgGenerator } from "./logic";
import MetaData from "./components/Extras/MetaData";
import BgImage from "../img/bg.webp";
export default function MainPage() {
	useEffect(() => {
		let test = document.getElementById("font-select");
		if (test) {
			svgGenerator.init();
		}
	}, []);
	return (
		<Fragment>
			<div className='row'>
				<div className='col-8'>
					<div className='img-bg'>
						<img src={BgImage} alt='Background' />
					</div>
					<MetaData />
					<SvgHolder />
				</div>
				<div className='col-4'>
					<SettingsHolder />
					<div className='code-holder'>
						<SvgSnippet />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
