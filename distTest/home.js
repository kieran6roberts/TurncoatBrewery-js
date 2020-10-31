/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/ageVerification.js":
/*!**************************************!*\
  !*** ./public/js/ageVerification.js ***!
  \**************************************/
/*! namespace exports */
/*! export ageVerification [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getResultfromStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export popupModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupModal": () => /* binding */ popup,
/* harmony export */   "ageVerification": () => /* binding */ ageVerification,
/* harmony export */   "getResultfromStorage": () => /* binding */ getResultfromStorage
/* harmony export */ });
var acceptBtn = document.querySelector(".btn--accept-js");
var rejectBtn = document.querySelector(".btn--reject-js");
var popup = document.querySelector(".popup-js");

var ageVerification = function ageVerification(e) {
  if (e.target === acceptBtn) {
    popup.classList.remove("show");
    popup.firstElementChild.classList.remove("show");
    document.body.classList.remove("overflow");
    storeResultinStorage("showModal", "yes", 36e5);
  }

  if (e.target === rejectBtn) {
    acceptBtn.classList.add("hide");
    rejectBtn.classList.add("hide");
  }
};

var storeResultinStorage = function storeResultinStorage(key, value, lifetime) {
  var time = new Date().getTime();
  var result = {
    value: value,
    expiry: time + lifetime
  };
  localStorage.setItem(key, JSON.stringify(result));
};

var getResultfromStorage = function getResultfromStorage(key) {
  var result = JSON.parse(localStorage.getItem(key));

  if (result == null) {
    popup.classList.add("show");
    popup.firstElementChild.classList.add("show");
    document.body.classList.add("overflow");
    return null;
  }

  var time = new Date().getTime();

  if (time > result.expiry) {
    localStorage.removeItem(key);
    popup.classList.add("show");
    popup.firstElementChild.classList.add("show");
    document.body.classList.add("overflow");
    return;
  }
};



/***/ }),

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ageVerification_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ageVerification.js */ "./public/js/ageVerification.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.js */ "./public/js/burger.js");
/* harmony import */ var _footerObserver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerObserver.js */ "./public/js/footerObserver.js");
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/home.css */ "./public/styles/home.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ "./public/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_media_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/media.css */ "./public/styles/media.css");







var init = function init() {
  (0,_ageVerification_js__WEBPACK_IMPORTED_MODULE_0__.getResultfromStorage)("showModal");
  (0,_footerObserver_js__WEBPACK_IMPORTED_MODULE_2__.createObserver)();
  document.addEventListener("click", _burger_js__WEBPACK_IMPORTED_MODULE_1__.default);
  _ageVerification_js__WEBPACK_IMPORTED_MODULE_0__.popupModal.addEventListener("click", _ageVerification_js__WEBPACK_IMPORTED_MODULE_0__.ageVerification);
};

document.addEventListener("DOMContentLoaded", init);

/***/ }),

/***/ "./public/js/burger.js":
/*!*****************************!*\
  !*** ./public/js/burger.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ageVerification_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ageVerification.js */ "./public/js/ageVerification.js");

var burgerNav = document.querySelector(".nav__burger-js");
var sidebarNav = document.querySelector(".sidebar-nav__list-js");
var sidebarLinks = document.querySelectorAll(".sidebar-nav__link-js");
var dropdownLinks = document.querySelectorAll(".sidebar-nav__dropdown-link-js");
var socialLinks = document.querySelectorAll(".sidebar-nav__social-link-js");
var beerLink = sidebarNav.querySelector(".beer-link-js");
var contactLink = sidebarNav.querySelector(".contact-link-js");

var toggleBurgerNav = function toggleBurgerNav(e) {
  // spread each li of element array like object sidebarNav into array
  if (e.target === sidebarNav) return;

  if (e.target === burgerNav) {
    sidebarNav.classList.toggle("open");
    burgerNav.firstElementChild.classList.toggle("active");
    document.body.classList.toggle("overflow");
    contactLink.classList.toggle("open");
    beerLink.classList.toggle("open"); //check if popup modal exists for that page

    if (_ageVerification_js__WEBPACK_IMPORTED_MODULE_0__.popupModal) _ageVerification_js__WEBPACK_IMPORTED_MODULE_0__.popupModal.classList.toggle("show");
    dropdownLinks.forEach(function (link) {
      link.classList.toggle("open");
    });
    socialLinks.forEach(function (link) {
      link.classList.toggle("open");
    });
  } else {
    if (!sidebarNav.classList.contains("open")) return;

    if (sidebarNav.classList.contains("open")) {
      contactLink.classList.remove("open");
      beerLink.classList.remove("open");
      sidebarNav.classList.remove("open");
      burgerNav.firstElementChild.classList.remove("active");
      document.body.classList.remove("overflow");
      if (_ageVerification_js__WEBPACK_IMPORTED_MODULE_0__.popupModal) _ageVerification_js__WEBPACK_IMPORTED_MODULE_0__.popupModal.classList.remove("show");
      dropdownLinks.forEach(function (link) {
        link.classList.remove("open");
      });
      socialLinks.forEach(function (link) {
        link.classList.remove("open");
      });
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleBurgerNav);

/***/ }),

/***/ "./public/js/footerObserver.js":
/*!*************************************!*\
  !*** ./public/js/footerObserver.js ***!
  \*************************************/
/*! namespace exports */
/*! export createObserver [provided] [no usage info] [missing usage info prevents renaming] */
/*! export footer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => /* binding */ footer,
/* harmony export */   "createObserver": () => /* binding */ createObserver
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var footer = document.querySelector(".footer");
var abstractedNav = document.querySelector(".mobile-nav__list");

var intersectionHandler = function intersectionHandler(entry, observer) {
  var navChildEls = _toConsumableArray(abstractedNav.children);

  if (entry[0].isIntersecting) {
    abstractedNav.classList.add("hide");
    navChildEls.forEach(function (item) {
      item.classList.add("hide");
    });
  }

  if (!entry[0].isIntersecting && abstractedNav.classList.contains("hide")) {
    abstractedNav.classList.remove("hide");
    navChildEls.forEach(function (item) {
      item.classList.remove("hide");
    });
  }
};

var createObserver = function createObserver() {
  var observer = new IntersectionObserver(intersectionHandler, {});
  observer.observe(footer);
};



/***/ }),

/***/ "./public/styles/global.css":
/*!**********************************!*\
  !*** ./public/styles/global.css ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleParseError: Module parse failed: Unexpected character '\u0000' (1:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)\n    at handleParseError (C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\webpack\\lib\\NormalModule.js:787:19)\n    at C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\webpack\\lib\\NormalModule.js:850:5\n    at processResult (C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\webpack\\lib\\NormalModule.js:624:11)\n    at C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\webpack\\lib\\NormalModule.js:675:5\n    at C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\loader-runner\\lib\\LoaderRunner.js:404:3\n    at iterateNormalLoaders (C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:10)\n    at Array.<anonymous> (C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\loader-runner\\lib\\LoaderRunner.js:224:4)\n    at runCallbacks (C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:24:49)\n    at C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:194:4\n    at C:\\Users\\Helena\\Desktop\\KieranDev\\projects\\brewery\\node_modules\\graceful-fs\\graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)");

/***/ }),

/***/ "./public/styles/home.css":
/*!********************************!*\
  !*** ./public/styles/home.css ***!
  \********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/styles/media.css":
/*!*********************************!*\
  !*** ./public/styles/media.css ***!
  \*********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./public/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=home.js.map