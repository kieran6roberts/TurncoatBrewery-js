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

/***/ "./public/js/appShop.js":
/*!******************************!*\
  !*** ./public/js/appShop.js ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ageVerification_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ageVerification.js */ "./public/js/ageVerification.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.js */ "./public/js/burger.js");
/* harmony import */ var _footerObserver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerObserver.js */ "./public/js/footerObserver.js");
/* harmony import */ var _shop_shopInit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shopInit.js */ "./public/js/shop/shopInit.js");
/* harmony import */ var _styles_shop_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/shop.css */ "./public/styles/shop.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.css */ "./public/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_media_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/media.css */ "./public/styles/media.css");








var init = function init() {
  (0,_ageVerification_js__WEBPACK_IMPORTED_MODULE_0__.getResultfromStorage)("showModal");
  (0,_footerObserver_js__WEBPACK_IMPORTED_MODULE_2__.createObserver)();
  (0,_shop_shopInit_js__WEBPACK_IMPORTED_MODULE_3__.default)();
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

/***/ "./public/js/shop/addItemToCartHandler.js":
/*!************************************************!*\
  !*** ./public/js/shop/addItemToCartHandler.js ***!
  \************************************************/
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
/* harmony import */ var _appendItemToCart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendItemToCart.js */ "./public/js/shop/appendItemToCart.js");
/* harmony import */ var _createCartItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCartItem.js */ "./public/js/shop/createCartItem.js");
/* harmony import */ var _updatePrice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updatePrice.js */ "./public/js/shop/updatePrice.js");


 // trigger the add to cart event

var addToCartHandler = function addToCartHandler(e) {
  var clickedBtn = e.currentTarget;
  var clickedItem = clickedBtn.parentElement;
  var image = clickedItem.querySelector(".shop__item--img").src;
  var title = clickedItem.querySelector(".shop__item-name").textContent;
  var type = clickedItem.querySelector(".shop__item-type").textContent;
  var info = clickedItem.querySelector(".shop__item-info").textContent;
  var price = clickedItem.querySelector(".shop__item-price").textContent;
  var cartItem = (0,_createCartItem_js__WEBPACK_IMPORTED_MODULE_1__.default)(image, title, type, info, price); //check if cartItem is undefined and if so don't add item to cart

  if (!cartItem) return;

  if (cartItem) {
    var cartContainer = document.querySelector(".shop__cart");
    var overlay = clickedItem.querySelector(".shop__item-overlay");
    overlay.classList.add("added");
    (0,_appendItemToCart_js__WEBPACK_IMPORTED_MODULE_0__.default)(cartItem, cartContainer, ".shop__item-btn", ".shop__item-quantity");
    (0,_updatePrice_js__WEBPACK_IMPORTED_MODULE_2__.default)();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToCartHandler);

/***/ }),

/***/ "./public/js/shop/appendItemToCart.js":
/*!********************************************!*\
  !*** ./public/js/shop/appendItemToCart.js ***!
  \********************************************/
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
/* harmony import */ var _removeCartItemHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeCartItemHandler.js */ "./public/js/shop/removeCartItemHandler.js");
/* harmony import */ var _quantityChangeHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantityChangeHandler.js */ "./public/js/shop/quantityChangeHandler.js");



var appendItemToCart = function appendItemToCart(appendItem, appendTo, queryBtn, queryQuantity) {
  appendTo.append(appendItem);
  appendItem.querySelector(queryBtn).addEventListener("click", _removeCartItemHandler_js__WEBPACK_IMPORTED_MODULE_0__.default);
  appendItem.querySelector(queryQuantity).addEventListener("change", _quantityChangeHandler_js__WEBPACK_IMPORTED_MODULE_1__.default);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendItemToCart);

/***/ }),

/***/ "./public/js/shop/checkoutHandler.js":
/*!*******************************************!*\
  !*** ./public/js/shop/checkoutHandler.js ***!
  \*******************************************/
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
/* harmony import */ var _updatePrice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePrice.js */ "./public/js/shop/updatePrice.js");
/* harmony import */ var _removeItemOverlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeItemOverlay.js */ "./public/js/shop/removeItemOverlay.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // clear cart on ckeckout btn

var checkoutHandler = function checkoutHandler(e) {
  var targetBtn = e.currentTarget;
  (0,_removeItemOverlay_js__WEBPACK_IMPORTED_MODULE_1__.removeItemOverlay)(targetBtn);
  var shopCartEl = document.querySelector(".shop__cart");

  var shopCartElChildren = _toConsumableArray(shopCartEl.children);

  if (!Array.isArray(shopCartElChildren) || !shopCartElChildren.length) {
    alert("Cart is empty! Please add items to cart before checking out");
    return;
  }

  shopCartElChildren.forEach(function (child) {
    return child.remove();
  });
  (0,_updatePrice_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  alert("Thank you for your purchase");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkoutHandler);

/***/ }),

/***/ "./public/js/shop/createCartItem.js":
/*!******************************************!*\
  !*** ./public/js/shop/createCartItem.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//create new item in the cart
var createCartItem = function createCartItem(image, title, type, info, price) {
  if (!image || !title || !type || !info || !price) {
    alert("There was a problem adding item to cart. Please try again");
    return;
  }

  var cartEl = document.createElement("div");
  cartEl.classList.add("shop__cart-item");
  var cartElHTML = "\n      <img src=".concat(image, " alt=\"beer\" class=\"shop__item--img\">\n      <span class=\"shop__item-name\">").concat(title, "</span>\n      <span class=\"shop__item-type\">").concat(type, "</span>\n      <span class=\"shop__item-info\">").concat(info, "</span>\n      <input type=\"number\" value=\"1\" class=\"shop__item-quantity\"></input>\n      <span class=\"shop__item-price price--border\">").concat(price, "</span>\n      <button type=\"button\" class=\"shop__item-btn btn--danger btn--danger-js\">Remove</button>\n  ");
  cartEl.innerHTML = cartElHTML;
  return cartEl;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCartItem);

/***/ }),

/***/ "./public/js/shop/quantityChangeHandler.js":
/*!*************************************************!*\
  !*** ./public/js/shop/quantityChangeHandler.js ***!
  \*************************************************/
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
/* harmony import */ var _updatePrice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePrice.js */ "./public/js/shop/updatePrice.js");
 // update total when quantity of product is changed

var quantityChangeHandler = function quantityChangeHandler(e) {
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0) input.value = 1;
  (0,_updatePrice_js__WEBPACK_IMPORTED_MODULE_0__.default)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quantityChangeHandler);

/***/ }),

/***/ "./public/js/shop/removeCartItemHandler.js":
/*!*************************************************!*\
  !*** ./public/js/shop/removeCartItemHandler.js ***!
  \*************************************************/
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
/* harmony import */ var _removeItemOverlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeItemOverlay.js */ "./public/js/shop/removeItemOverlay.js");
/* harmony import */ var _updatePrice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePrice.js */ "./public/js/shop/updatePrice.js");



var removeCartItemHandler = function removeCartItemHandler(e) {
  var targetBtn = e.currentTarget;
  (0,_removeItemOverlay_js__WEBPACK_IMPORTED_MODULE_0__.removeItemOverlay)(targetBtn);
  targetBtn.parentElement.remove();
  (0,_updatePrice_js__WEBPACK_IMPORTED_MODULE_1__.default)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeCartItemHandler);

/***/ }),

/***/ "./public/js/shop/removeItemOverlay.js":
/*!*********************************************!*\
  !*** ./public/js/shop/removeItemOverlay.js ***!
  \*********************************************/
/*! namespace exports */
/*! export checkoutBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeItemOverlay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeItemOverlay": () => /* binding */ removeItemOverlay,
/* harmony export */   "checkoutBtn": () => /* binding */ checkoutBtn
/* harmony export */ });
var checkoutBtn = document.querySelector(".shop__cart-checkout"); // remove overlay from each item when checking out

var removeItemOverlay = function removeItemOverlay(btn) {
  var parentEl = btn.parentElement;
  var overlayEls = document.querySelectorAll(".added");

  if (btn === checkoutBtn) {
    overlayEls.forEach(function (el) {
      if (el.classList.contains("added")) el.classList.remove("added");
    });
    return;
  }

  var titleContent = parentEl.querySelector(".shop__item-name").innerText;
  overlayEls.forEach(function (el) {
    var overlayParentEl = el.parentElement;
    var elTitleContent = overlayParentEl.querySelector(".shop__item-name").innerText;
    if (titleContent === elTitleContent) el.classList.remove("added");
  });
};



/***/ }),

/***/ "./public/js/shop/shopInit.js":
/*!************************************!*\
  !*** ./public/js/shop/shopInit.js ***!
  \************************************/
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
/* harmony import */ var _updatePrice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePrice.js */ "./public/js/shop/updatePrice.js");
/* harmony import */ var _quantityChangeHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantityChangeHandler.js */ "./public/js/shop/quantityChangeHandler.js");
/* harmony import */ var _addItemToCartHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addItemToCartHandler.js */ "./public/js/shop/addItemToCartHandler.js");
/* harmony import */ var _removeCartItemHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeCartItemHandler.js */ "./public/js/shop/removeCartItemHandler.js");
/* harmony import */ var _checkoutHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkoutHandler.js */ "./public/js/shop/checkoutHandler.js");
/* harmony import */ var _removeItemOverlay_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeItemOverlay.js */ "./public/js/shop/removeItemOverlay.js");






var deleteBtns = document.querySelectorAll(".btn--danger-js");
var addToCartBtns = document.querySelectorAll(".shop__item-btn-js");
var quantityEls = document.querySelectorAll(".shop__item-quantity");

var shopInit = function shopInit() {
  (0,_updatePrice_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  quantityEls.forEach(function (el) {
    el.addEventListener("change", _quantityChangeHandler_js__WEBPACK_IMPORTED_MODULE_1__.default);
  });
  addToCartBtns.forEach(function (btn) {
    btn.addEventListener("click", _addItemToCartHandler_js__WEBPACK_IMPORTED_MODULE_2__.default);
  });
  deleteBtns.forEach(function (btn) {
    btn.addEventListener("click", _removeCartItemHandler_js__WEBPACK_IMPORTED_MODULE_3__.default);
  });
  _removeItemOverlay_js__WEBPACK_IMPORTED_MODULE_5__.checkoutBtn.addEventListener("click", _checkoutHandler_js__WEBPACK_IMPORTED_MODULE_4__.default);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopInit);

/***/ }),

/***/ "./public/js/shop/sumTotal.js":
/*!************************************!*\
  !*** ./public/js/shop/sumTotal.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var sumTotal = function sumTotal(el1, el2) {
  return parseFloat(el1.innerText.replace("$", "")) * el2.value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sumTotal);

/***/ }),

/***/ "./public/js/shop/updatePrice.js":
/*!***************************************!*\
  !*** ./public/js/shop/updatePrice.js ***!
  \***************************************/
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
/* harmony import */ var _sumTotal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sumTotal.js */ "./public/js/shop/sumTotal.js");
 // handle the price calculations

var updatePrice = function updatePrice() {
  var cartItem = document.querySelectorAll(".shop__cart-item");
  var totalEl = document.querySelector(".shop__cart-total");
  var total = 0;
  cartItem.forEach(function (item) {
    var itemPriceEl = item.querySelector(".shop__item-price");
    var quantityEl = item.querySelector(".shop__item-quantity");
    var totalItemPrice = (0,_sumTotal_js__WEBPACK_IMPORTED_MODULE_0__.default)(itemPriceEl, quantityEl);
    total = total + totalItemPrice;
    total = Math.round(total * "1e2") / "1e2";
  });
  totalEl.textContent = "Total: $".concat(total);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatePrice);

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


/***/ }),

/***/ "./public/styles/shop.css":
/*!********************************!*\
  !*** ./public/styles/shop.css ***!
  \********************************/
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
/******/ 	__webpack_require__("./public/js/appShop.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=shop.js.map