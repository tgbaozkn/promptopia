"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"245e63b08e46\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz9kZTFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMjQ1ZTYzYjA4ZTQ2XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Nav = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [toggleDropdown, setToggleDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n            console.log((0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)());\n        })();\n    }, [\n        providers\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex-between w-full mb-16 pt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"flex gap-2 flex-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/assets/images/logo.svg\",\n                        alt: \"logo\",\n                        width: 30,\n                        height: 30,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"logo_text\",\n                        children: \"Promptopia\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:flex hidden\",\n                children: (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-3 md:gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/create-prompt\",\n                            className: \"black_btn\",\n                            children: \"Create Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut,\n                            className: \"outline_btn\",\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: session === null || session === void 0 ? void 0 : session.user.image,\n                                width: 37,\n                                height: 37,\n                                className: \"rounded-full\",\n                                alt: \"profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \" asjdsdk\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined),\n                        providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: ()=>{\n                                    (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                                },\n                                className: \"black_btn\",\n                                children: \"Sign in\"\n                            }, provider.name, false, {\n                                fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined))\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:hidden flex relative\",\n                children: (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: session === null || session === void 0 ? void 0 : session.user.image,\n                            width: 37,\n                            height: 37,\n                            className: \"rounded-full\",\n                            alt: \"profile\",\n                            onClick: ()=>setToggleDropdown(!toggleDropdown)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined),\n                        toggleDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/profile\",\n                                    className: \"dropdown_link\",\n                                    onClick: ()=>setToggleDropdown(false),\n                                    children: \"My Profile\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/create-prompt\",\n                                    className: \"dropdown_link\",\n                                    onClick: ()=>setToggleDropdown(false),\n                                    children: \"Create Prompt\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>{\n                                        setToggleDropdown(false);\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                                    },\n                                    className: \"mt-5 w-full black_btn\",\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>{\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                            },\n                            className: \"black_btn\",\n                            children: \"Sign in\"\n                        }, provider.name, false, {\n                            fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\components\\\\Nav.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"pQwkQD6kx3e0MFe+jjOLDX1MoSg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNkI7QUFDRTtBQUNhO0FBQ2dDO0FBRTVFLE1BQU1RLE1BQU07O0lBQ1YsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR0osMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXJERCxnREFBU0EsQ0FBQztRQUNQO1lBQ0MsTUFBTWEsTUFBTSxNQUFNUiw2REFBWUE7WUFDOUJLLGFBQWFHO1lBQ2JDLFFBQVFDLEdBQUcsQ0FBQ1YsNkRBQVlBO1FBQzFCO0lBQ0YsR0FBRztRQUFDSTtLQUFVO0lBRWQscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDbkIsa0RBQUlBO2dCQUFDb0IsTUFBSztnQkFBSUQsV0FBVTs7a0NBQ3ZCLDhEQUFDbEIsbURBQUtBO3dCQUNKb0IsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkwsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDTTt3QkFBRU4sV0FBVTtrQ0FBWTs7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQ087Z0JBQUlQLFdBQVU7MEJBQ1pULENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU2lCLElBQUksa0JBQ1osOERBQUNEO29CQUFJUCxXQUFVOztzQ0FDYiw4REFBQ25CLGtEQUFJQTs0QkFBQ29CLE1BQUs7NEJBQWlCRCxXQUFVO3NDQUFZOzs7Ozs7c0NBSWxELDhEQUFDUzs0QkFBT0MsTUFBSzs0QkFBU0MsU0FBU3pCLG9EQUFPQTs0QkFBRWMsV0FBVTtzQ0FBYzs7Ozs7O3NDQUloRSw4REFBQ25CLGtEQUFJQTs0QkFBQ29CLE1BQUs7c0NBQ1QsNEVBQUNuQixtREFBS0E7Z0NBQ0pvQixHQUFHLEVBQUVYLG9CQUFBQSw4QkFBQUEsUUFBU2lCLElBQUksQ0FBQ0ksS0FBSztnQ0FDeEJSLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JMLFdBQVU7Z0NBQ1ZHLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS1Y7O3NDQUNFLDhEQUFDRztzQ0FBRTs7Ozs7O3dCQUNGZCxhQUNDcUIsT0FBT0MsTUFBTSxDQUFDdEIsV0FBV3VCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDNUIsOERBQUNQO2dDQUNDQyxNQUFLO2dDQUVMQyxTQUFTO29DQUNQMUIsdURBQU1BLENBQUMrQixTQUFTQyxFQUFFO2dDQUNwQjtnQ0FDQWpCLFdBQVU7MENBQVk7K0JBSmpCZ0IsU0FBU0UsSUFBSTs7Ozs7Ozs7Ozs7OzBCQWE5Qiw4REFBQ1g7Z0JBQUlQLFdBQVU7MEJBQ1pULENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU2lCLElBQUksa0JBQ1osOERBQUNEO29CQUFJUCxXQUFVOztzQ0FDYiw4REFBQ2xCLG1EQUFLQTs0QkFDSm9CLEdBQUcsRUFBRVgsb0JBQUFBLDhCQUFBQSxRQUFTaUIsSUFBSSxDQUFDSSxLQUFLOzRCQUN4QlIsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkwsV0FBVTs0QkFDVkcsS0FBSTs0QkFDSlEsU0FBUyxJQUFNaEIsa0JBQWtCLENBQUNEOzs7Ozs7d0JBR25DQSxnQ0FDQyw4REFBQ2E7NEJBQUlQLFdBQVU7OzhDQUNiLDhEQUFDbkIsa0RBQUlBO29DQUNIb0IsTUFBSztvQ0FDTEQsV0FBVTtvQ0FDVlcsU0FBUyxJQUFNaEIsa0JBQWtCOzhDQUFROzs7Ozs7OENBRzNDLDhEQUFDZCxrREFBSUE7b0NBQ0hvQixNQUFLO29DQUNMRCxXQUFVO29DQUNWVyxTQUFTLElBQU1oQixrQkFBa0I7OENBQVE7Ozs7Ozs4Q0FHM0MsOERBQUNjO29DQUNDQyxNQUFLO29DQUNMQyxTQUFTO3dDQUNQaEIsa0JBQWtCO3dDQUNsQlQsd0RBQU9BO29DQUNUO29DQUNBYyxXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBTzFDOzhCQUNHUixhQUNDcUIsT0FBT0MsTUFBTSxDQUFDdEIsV0FBV3VCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDNUIsOERBQUNQOzRCQUNDQyxNQUFLOzRCQUVMQyxTQUFTO2dDQUNQMUIsdURBQU1BLENBQUMrQixTQUFTQyxFQUFFOzRCQUNwQjs0QkFDQWpCLFdBQVU7c0NBQVk7MkJBSmpCZ0IsU0FBU0UsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhcEM7R0E5SE03Qjs7UUFDc0JGLHVEQUFVQTs7O0tBRGhDRTtBQWdJTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qc3g/OTg5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uLCBnZXRQcm92aWRlcnMgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIGNvbnN0IFtwcm92aWRlcnMsIHNldFByb3ZpZGVyc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdG9nZ2xlRHJvcGRvd24sIHNldFRvZ2dsZURyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xyXG4gICAgICBzZXRQcm92aWRlcnMocmVzKTtcclxuICAgICAgY29uc29sZS5sb2coZ2V0UHJvdmlkZXJzKCkpO1xyXG4gICAgfSkoKTtcclxuICB9LCBbcHJvdmlkZXJzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgtYmV0d2VlbiB3LWZ1bGwgbWItMTYgcHQtM1wiPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgZmxleC1jZW50ZXJcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCJcclxuICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29fdGV4dFwiPlByb21wdG9waWE8L3A+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206ZmxleCBoaWRkZW5cIj5cclxuICAgICAgICB7c2Vzc2lvbj8udXNlciA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBtZDpnYXAtNVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZS1wcm9tcHRcIiBjbGFzc05hbWU9XCJibGFja19idG5cIj5cclxuICAgICAgICAgICAgICBDcmVhdGUgUG9zdFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaWduT3V0fSBjbGFzc05hbWU9XCJvdXRsaW5lX2J0blwiPlxyXG4gICAgICAgICAgICAgIFNpZ24gT3V0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Nlc3Npb24/LnVzZXIuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17Mzd9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezM3fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD4gYXNqZHNkazwvcD5cclxuICAgICAgICAgICAge3Byb3ZpZGVycyAmJlxyXG4gICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduSW4ocHJvdmlkZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFja19idG5cIj5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gZmxleCByZWxhdGl2ZVwiPlxyXG4gICAgICAgIHtzZXNzaW9uPy51c2VyID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17c2Vzc2lvbj8udXNlci5pbWFnZX1cclxuICAgICAgICAgICAgICB3aWR0aD17Mzd9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXszN31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZURyb3Bkb3duKCF0b2dnbGVEcm9wZG93bil9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7dG9nZ2xlRHJvcGRvd24gJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duX2xpbmtcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVEcm9wZG93bihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2NyZWF0ZS1wcm9tcHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bl9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlRHJvcGRvd24oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgQ3JlYXRlIFByb21wdFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZURyb3Bkb3duKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTUgdy1mdWxsIGJsYWNrX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIE91dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb3ZpZGVycyAmJlxyXG4gICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduSW4ocHJvdmlkZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFja19idG5cIj5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiZ2V0UHJvdmlkZXJzIiwiTmF2IiwiZGF0YSIsInNlc3Npb24iLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJ0b2dnbGVEcm9wZG93biIsInNldFRvZ2dsZURyb3Bkb3duIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJkaXYiLCJ1c2VyIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJpbWFnZSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiaWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.jsx\n"));

/***/ })

});