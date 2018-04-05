webpackHotUpdate(0,{

/***/ "./component/layout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/Volumes/Xtra/pre/project/react/frontend/component/layout.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _default = function _default(_ref) {
    var children = _ref.children;
    return function (_React$Component) {
        _inherits(Layout, _React$Component);

        function Layout() {
            _classCallCheck(this, Layout);

            return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
        }

        _createClass(Layout, [{
            key: 'render',
            value: function render() {
                var token = true;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'nav',
                        { className: 'nav', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'navdiv', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 11
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'brand', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 12
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'header_font', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 13
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                        { href: '/', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 14
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            { style: { color: 'black' }, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 14
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'b',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 14
                                                    },
                                                    __self: this
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
                                        lineNumber: 18
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'top_p', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 19
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                        { href: '/user/ajay', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 19
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'logo', style: style, src: profile, alt: 'sdf', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 19
                                            },
                                            __self: this
                                        }),
                                        ' '
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'top_p', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 20
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                        { herf: '/message', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 20
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: msg, alt: 'sdf', className: 'logo', style: style, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 20
                                            },
                                            __self: this
                                        }),
                                        ' '
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'top_p', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 21
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                        { href: '/notify/', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 21
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: notify, alt: 'sdf', className: 'logo', style: style, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 21
                                            },
                                            __self: this
                                        }),
                                        ' '
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'top_p', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 22
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                        { href: '#', onClick: this.logout, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 22
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: logout, alt: 'sdf', className: 'logo', style: style, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 22
                                            },
                                            __self: this
                                        }),
                                        ' '
                                    )
                                )
                            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'profile_info', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 25
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'top_p', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 26
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                        { to: '/login', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 26
                                            },
                                            __self: this
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
                                lineNumber: 37
                            },
                            __self: this
                        },
                        children
                    )
                );
            }
        }, {
            key: '__reactstandin__regenerateByEval',
            value: function __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code);
            }
        }]);

        return Layout;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', '/Volumes/Xtra/pre/project/react/frontend/component/layout.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=0.c471bff67bc942b580fa.hot-update.js.map