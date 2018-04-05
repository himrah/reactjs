module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/layout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/Volumes/Xtra/pre/project/react/frontend/component/layout.jsx',
    _this = this;



//export default({children})=>
/*
class Layout extends React.Component{
render(){
    var token=true
    return(*/
var token = true;
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'nav',
            { className: 'nav', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navdiv', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    },
                    __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'brand', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        },
                        __self: _this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'header_font', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            },
                            __self: _this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { href: '/', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                },
                                __self: _this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { style: { color: 'black' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 16
                                    },
                                    __self: _this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'b',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 16
                                        },
                                        __self: _this
                                    },
                                    'Fasigner'
                                )
                            ),
                            ' '
                        )
                    )
                ),
                token ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'profile_info', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        },
                        __self: _this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'top_p', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            },
                            __self: _this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { href: '/user/ajay', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                },
                                __self: _this
                            },
                            'Profile '
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'top_p', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            },
                            __self: _this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { herf: '/message', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                },
                                __self: _this
                            },
                            'Message'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'top_p', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            },
                            __self: _this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { href: '/notify/', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                },
                                __self: _this
                            },
                            'Notify'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'top_p', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            },
                            __self: _this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { href: '#', onClick: _this.logout, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                },
                                __self: _this
                            },
                            'Logout '
                        )
                    )
                ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'profile_info', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        },
                        __self: _this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'top_p', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            },
                            __self: _this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { to: '/login', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 28
                                },
                                __self: _this
                            },
                            'Login'
                        )
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'main',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                },
                __self: _this
            },
            children
        )
    );
});
/*    )
    }
}*/
//export default ({children})=>Layout

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_layout__ = __webpack_require__("./component/layout.jsx");
var _jsxFileName = '/Volumes/Xtra/pre/project/react/frontend/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/*
export default () =>
  <div>
    <Link href="/about">
      <a>here</a>
    </Link>
    to read more
  </div>
*/



var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__component_layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        },
                        __self: this
                    },
                    'Home Page'
                )
            )
            /*            <div>
                            <Link href="/about">
                            <a>here</a>
                            </Link>
                            to read more
                        </div>*/
            ;
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map