"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Ctugba%5Cpromptopia%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ctugba%5Cpromptopia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Ctugba%5Cpromptopia%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ctugba%5Cpromptopia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_tugba_promptopia_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\tugba\\\\promptopia\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_tugba_promptopia_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN0dWdiYSU1Q3Byb21wdG9waWElNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3R1Z2JhJTVDcHJvbXB0b3BpYSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUMwRjtBQUMzQjtBQUMvRDtBQUNrRztBQUNsRyw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb21wdG9waWEvPzg1YmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFx0dWdiYVxcXFxwcm9tcHRvcGlhXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG5jb25zdCBBcHBSb3V0ZVJvdXRlTW9kdWxlID0gbW9kdWxlLkFwcFJvdXRlUm91dGVNb2R1bGU7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHR1Z2JhXFxcXHByb21wdG9waWFcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Ctugba%5Cpromptopia%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ctugba%5Cpromptopia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session }) {\n            // store the user id from MongoDB to session\n            const sessionUser = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                email: session.user.email\n            });\n            session.user.id = sessionUser._id.toString();\n            return session;\n        },\n        async signIn ({ account, profile, user, credentials }) {\n            try {\n                await (0,_utils_database__WEBPACK_IMPORTED_MODULE_3__.connectToDB)();\n                // check if user already exists\n                const userExists = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: profile.email\n                });\n                // if not, create a new document and save user in MongoDB\n                if (!userExists) {\n                    await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n                        email: profile.email,\n                        username: profile.name.replace(\" \", \"\").toLowerCase(),\n                        image: profile.picture\n                    });\n                }\n                return true;\n            } catch (error) {\n                console.log(\"Error checking if user exists: \", error.message);\n                return false;\n            }\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBRXhCO0FBQ2M7QUFFOUMsTUFBTUksVUFBVUosZ0RBQVFBLENBQUM7SUFDdkJLLFdBQVc7UUFDVEosc0VBQWNBLENBQUM7WUFDYkssVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRTtZQUN2Qiw0Q0FBNEM7WUFDNUMsTUFBTUMsY0FBYyxNQUFNWixvREFBSUEsQ0FBQ2EsT0FBTyxDQUFDO2dCQUFFQyxPQUFPSCxRQUFRSSxJQUFJLENBQUNELEtBQUs7WUFBQztZQUNuRUgsUUFBUUksSUFBSSxDQUFDQyxFQUFFLEdBQUdKLFlBQVlLLEdBQUcsQ0FBQ0MsUUFBUTtZQUUxQyxPQUFPUDtRQUNUO1FBQ0EsTUFBTVEsUUFBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRU4sSUFBSSxFQUFFTyxXQUFXLEVBQUU7WUFDbEQsSUFBSTtnQkFDRixNQUFNckIsNERBQVdBO2dCQUVqQiwrQkFBK0I7Z0JBQy9CLE1BQU1zQixhQUFhLE1BQU12QixvREFBSUEsQ0FBQ2EsT0FBTyxDQUFDO29CQUFFQyxPQUFPTyxRQUFRUCxLQUFLO2dCQUFDO2dCQUU3RCx5REFBeUQ7Z0JBQ3pELElBQUksQ0FBQ1MsWUFBWTtvQkFDZixNQUFNdkIsb0RBQUlBLENBQUN3QixNQUFNLENBQUM7d0JBQ2hCVixPQUFPTyxRQUFRUCxLQUFLO3dCQUNwQlcsVUFBVUosUUFBUUssSUFBSSxDQUFDQyxPQUFPLENBQUMsS0FBSyxJQUFJQyxXQUFXO3dCQUNuREMsT0FBT1IsUUFBUVMsT0FBTztvQkFDeEI7Z0JBQ0Y7Z0JBRUEsT0FBTztZQUNULEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDLG1DQUFtQ0YsTUFBTUcsT0FBTztnQkFDNUQsT0FBTztZQUNUO1FBQ0Y7SUFDRjtBQUNGO0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbXB0b3BpYS8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5cclxuaW1wb3J0IFVzZXIgZnJvbSBcIkBtb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EQiB9IGZyb20gXCJAdXRpbHMvZGF0YWJhc2VcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xyXG4gICAgICAvLyBzdG9yZSB0aGUgdXNlciBpZCBmcm9tIE1vbmdvREIgdG8gc2Vzc2lvblxyXG4gICAgICBjb25zdCBzZXNzaW9uVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSk7XHJcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHNlc3Npb25Vc2VyLl9pZC50b1N0cmluZygpO1xyXG5cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2lnbkluKHsgYWNjb3VudCwgcHJvZmlsZSwgdXNlciwgY3JlZGVudGlhbHMgfSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHVzZXIgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHByb2ZpbGUuZW1haWwgfSk7XHJcblxyXG4gICAgICAgIC8vIGlmIG5vdCwgY3JlYXRlIGEgbmV3IGRvY3VtZW50IGFuZCBzYXZlIHVzZXIgaW4gTW9uZ29EQlxyXG4gICAgICAgIGlmICghdXNlckV4aXN0cykge1xyXG4gICAgICAgICAgYXdhaXQgVXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUubmFtZS5yZXBsYWNlKFwiIFwiLCBcIlwiKS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNoZWNraW5nIGlmIHVzZXIgZXhpc3RzOiBcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIlVzZXIiLCJjb25uZWN0VG9EQiIsImhhbmRsZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJzZXNzaW9uVXNlciIsImZpbmRPbmUiLCJlbWFpbCIsInVzZXIiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJjcmVkZW50aWFscyIsInVzZXJFeGlzdHMiLCJjcmVhdGUiLCJ1c2VybmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpbWFnZSIsInBpY3R1cmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exists!\"\n        ],\n        required: [\n            true,\n            \"Email is required!\"\n        ]\n    },\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required!\"\n        ],\n        match: [\n            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,\n            \"Username invalid, it should contain 8-20 alphanumeric letters and be unique!\"\n        ]\n    },\n    image: {\n        type: String\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUM1QkksT0FBTztRQUNMQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF3QjtRQUN2Q0MsVUFBVTtZQUFDO1lBQU07U0FBcUI7SUFDeEM7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNORSxVQUFVO1lBQUM7WUFBTTtTQUF3QjtRQUN6Q0UsT0FBTztZQUNMO1lBQ0E7U0FDRDtJQUNIO0lBQ0FDLE9BQU87UUFDTE4sTUFBTUM7SUFDUjtBQUNGO0FBRUEsTUFBTU0sT0FBT1YsNENBQU1BLENBQUNVLElBQUksSUFBSVgsK0NBQUtBLENBQUMsUUFBUUU7QUFFMUMsaUVBQWVTLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9tcHRvcGlhLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgdW5pcXVlOiBbdHJ1ZSwgXCJFbWFpbCBhbHJlYWR5IGV4aXN0cyFcIl0sXHJcbiAgICByZXF1aXJlZDogW3RydWUsIFwiRW1haWwgaXMgcmVxdWlyZWQhXCJdLFxyXG4gIH0sXHJcbiAgdXNlcm5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJVc2VybmFtZSBpcyByZXF1aXJlZCFcIl0sXHJcbiAgICBtYXRjaDogW1xyXG4gICAgICAvXig/PS57OCwyMH0kKSg/IVtfLl0pKD8hLipbXy5dezJ9KVthLXpBLVowLTkuX10rKD88IVtfLl0pJC8sXHJcbiAgICAgIFwiVXNlcm5hbWUgaW52YWxpZCwgaXQgc2hvdWxkIGNvbnRhaW4gOC0yMCBhbHBoYW51bWVyaWMgbGV0dGVycyBhbmQgYmUgdW5pcXVlIVwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBVc2VyID0gbW9kZWxzLlVzZXIgfHwgbW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiVXNlclNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsInJlcXVpcmVkIiwidXNlcm5hbWUiLCJtYXRjaCIsImltYWdlIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // track the connection\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"share_prompt\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBYyxPQUFPLHVCQUF1QjtBQUV6QyxNQUFNQyxjQUFjO0lBQ3pCRixtREFBWSxDQUFDLGVBQWU7SUFFNUIsSUFBSUMsYUFBYTtRQUNmRyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBRUEsSUFBSTtRQUNGLE1BQU1MLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtZQUM5Q0MsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUVBWCxjQUFjO1FBRWRHLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT1EsT0FBTztRQUNkVCxRQUFRQyxHQUFHLENBQUNRO0lBQ2Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbXB0b3BpYS8uL3V0aWxzL2RhdGFiYXNlLmpzPzJiOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7IC8vIHRyYWNrIHRoZSBjb25uZWN0aW9uXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdFRvREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgbW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgdHJ1ZSk7XHJcblxyXG4gIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNb25nb0RCIGlzIGFscmVhZHkgY29ubmVjdGVkXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcclxuICAgICAgZGJOYW1lOiBcInNoYXJlX3Byb21wdFwiLFxyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgY29ubmVjdGVkXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJpc0Nvbm5lY3RlZCIsImNvbm5lY3RUb0RCIiwic2V0IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJkYk5hbWUiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Ctugba%5Cpromptopia%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ctugba%5Cpromptopia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();