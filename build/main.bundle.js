/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'node_modules/react'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'node_modules/react-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar MyComponent = function MyComponent() {\n  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'node_modules/react'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"div\", null, \"Hello, world!\");\n};\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'node_modules/react-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'node_modules/react'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(MyComponent, null), document.getElementById('my-plugin-root'));\n\n//# sourceURL=webpack://MyLibrary/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});