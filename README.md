# SVG GENERATOR V2


> ## Libraries used
>   - Redux (to maintain global state) check state => [./src/redux/default_state.js](./src/redux/default_state.js)
>   - Maker.js (to create SVG files) used in   [.\src\pages\logic\svgGenerator.js](.\src\pages\logic\svgGenerator.js)
>   - Opentype.js (for google fonts) used in  [.\src\pages\logic\svgGenerator.js](.\src\pages\logic\svgGenerator.js)
>   - react-draggable (for making SVG draggable) used in [.\src\pages\components\Holders\SvgHolder.js](.\src\pages\components\Holders\SvgHolder.js) 


> ## Available Scripts

In the project directory, you can run:
### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


>   ## Project Structure
        |-- README.md
        |-- package.json
        |-- public              // Basic html template
        |-- src
        |   |-- App.js          //Main App wrapped in redux state
        |   |-- customHooks     // Custom **useDebounce** hook to delay the input
        |   |   `-- index.js
        |   |-- img             //images folder
        |   |-- index.js        //entry point of React
        |   |-- pages
        |   |   |-- MainPage.js     //Main page that has all the components
        |   |   |-- components
        |   |   |   |-- Extras
        |   |   |   |   `-- MetaData.js  // Component that shows meta data on Top left 
        |   |   |   |                    // Data is taken from Redux store               
        |   |   |   |-- Holders
        |   |   |   |   |-- SettingsHolder.js   // Compoent that contains all the Settings shown on Right
        |   |   |   |   `-- SvgHolder.js        // Component that contains final SVG
        |   |   |   `-- Snippets
        |   |   |       |-- SvgSnippet.js        // SVG Download button
        |   |   |-- logic
        |   |   |   |-- index.js
        |   |   |   |-- keyFramesGenerator.js // logic to generate basic CSS keyframe animation 
        |   |   |   |-- setAnimation.js //logic to some advanced CSS animation
        |   |   |   `-- svgGenerator.js //  **MAIN FILE THAT GENERATES SVG AND HANDLES FONT CHANGES ETC...**
        |   |   `-- utils
        |   |       `-- index.js // some helper functions
        |   |-- redux
        |   |   |-- actions.js  //redux actions
        |   |   |-- default_state.js //redux initial state
        |   |   |-- reducer.js //reducer... **Logic to caclulate pathlength and width, height is in this**
        |   |   `-- store.js // actual redux store
        |   `-- styles //styles

