/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from "react";
import CssSnippet from "./components/Snippets/CssSnippet";
import SettingsHolder from "./components/Holders/SettingsHolder";
import SvgHolder from "./components/Holders/SvgHolder";
import Header from "./components/Extras/Header";
import CodeHolder from "./components/Holders/CodeHolder";
import JsSnippet from "./components/Snippets/JsSnippet";
import SvgSnippet from "./components/Snippets/SvgSnippet";
import { svgGenerator } from "./logic";
import Footer from "./components/Extras/Footer";
import DownloadBundle from "./components/Extras/DownloadBundle";
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
			{/* <Header /> */}
			<div className='row'>
				<div className='col-8'>
					<div className='img-bg'>
						<img src={BgImage} alt='Background' />
					</div>
					{/* <DownloadBundle /> */}
					<MetaData />
					<SvgHolder />
				</div>
				<div className='col-4'>
					<SettingsHolder />
					<CodeHolder>
						<SvgSnippet />
						{/* <CssSnippet /> */}
						{/* <JsSnippet /> */}
					</CodeHolder>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
