webpackHotUpdate(0,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
var _jsxFileName = '/Volumes/Xtra/pre/project/react/frontend/pages/index.js',
    _this = this;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default() {
  return React.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: _this
    },
    'Click',
    ' ',
    React.createElement(
      __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
      { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: _this
      },
      React.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: _this
        },
        'here'
      )
    ),
    ' ',
    'to read more'
  );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Volumes/Xtra/pre/project/react/frontend/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=0.625a0dfd866f9e5c4f25.hot-update.js.map