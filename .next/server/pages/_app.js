(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/common/CustomImage.tsx":
/*!*******************************************!*\
  !*** ./components/common/CustomImage.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_utils_handleBrokenImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/utils/handleBrokenImage */ "./lib/utils/handleBrokenImage.ts");

var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\components\\common\\CustomImage.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CustomImage = ({
  src,
  alt,
  className
}) => {
  const props = {};

  if (className) {
    props.className = className;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", _objectSpread({
    src: src,
    alt: alt,
    onError: lib_utils_handleBrokenImage__WEBPACK_IMPORTED_MODULE_1__.default
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomImage);

/***/ }),

/***/ "./components/common/CustomLink.tsx":
/*!******************************************!*\
  !*** ./components/common/CustomLink.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\components\\common\\CustomLink.tsx";

/* Helper for a link that accepts parameters such as className */



const CustomLink = ({
  className,
  href,
  onClick,
  children,
  shallow
}) => {
  if (shallow === undefined) {
    shallow = false;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    passHref: true,
    shallow: shallow,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: onClick,
      className: className || "",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 11
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomLink);

/***/ }),

/***/ "./components/common/Footer.tsx":
/*!**************************************!*\
  !*** ./components/common/Footer.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");

var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\components\\common\\Footer.tsx";



const Footer = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "/",
      className: "logo-font",
      children: lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__.APP_NAME.toLowerCase()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "attribution",
      children: [" ", "\xA9 2021. An interactive learning project from", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://thinkster.io",
        children: "Thinkster"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), ". Code licensed under MIT."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/common/Maybe.tsx":
/*!*************************************!*\
  !*** ./components/common/Maybe.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const Maybe = ({
  test,
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: test && children
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (Maybe);

/***/ }),

/***/ "./components/common/NavLink.tsx":
/*!***************************************!*\
  !*** ./components/common/NavLink.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\components\\common\\NavLink.tsx";



const NavLink = ({
  href,
  onClick,
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    asPath
  } = router;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: onClick,
      className: `${encodeURIComponent(asPath) === encodeURIComponent(href) && 'active ' || ''}nav-link`,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./components/common/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/common/Navbar.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_CustomImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/CustomImage */ "./components/common/CustomImage.tsx");
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Maybe */ "./components/common/Maybe.tsx");
/* harmony import */ var components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/NavLink */ "./components/common/NavLink.tsx");
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");
/* harmony import */ var lib_context_PageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/context/PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/utils/getLoggedInUser */ "./lib/utils/getLoggedInUser.ts");

var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\components\\common\\Navbar.tsx";









const NavbarItem = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
  className: "nav-item",
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 3
}, undefined);

const Navbar = () => {
  const setPage = (0,lib_context_PageContext__WEBPACK_IMPORTED_MODULE_7__.usePageDispatch)();
  const loggedInUser = (0,lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_8__.default)();
  const handleClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => setPage(0), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-light",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: "/",
        onClick: handleClick,
        className: "navbar-brand",
        children: lib_utils_constant__WEBPACK_IMPORTED_MODULE_6__.APP_NAME.toLowerCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "nav navbar-nav pull-xs-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
            href: "/",
            onClick: handleClick,
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__.default, {
          test: loggedInUser,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/editor",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "ion-compose"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, undefined), "\xA0New Article"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/settings",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "ion-gear-a"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined), "\xA0Settings"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: `/profile/${loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username}`,
              onClick: handleClick,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomImage__WEBPACK_IMPORTED_MODULE_2__.default, {
                className: "user-pic",
                src: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.effectiveImage,
                alt: "your profile image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined), loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__.default, {
          test: !loggedInUser,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/user/login",
              children: "Sign in"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/user/register",
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(module) {

let isProduction;

if (process.env.NODE_ENV_OVERRIDE === undefined) {
  isProduction = false;
} else {
  isProduction = process.env.NODE_ENV_OVERRIDE === 'production';
}

module.exports = {
  apiPath: '/api',
  databaseUrl: process.env.DATABASE_URL || '',
  googleAnalyticsId: 'UA-47867706-3',
  isDemo: process.env.CIROSANTILLI_DEMO === 'true',
  isProduction: isProduction,
  isProductionNext: process.env.NODE_ENV_NEXT === undefined ? isProduction : process.env.NODE_ENV_NEXT === 'production',
  port: process.env.PORT || 3000,
  // Makes deployment impossibly slow if there are lots of pages
  // like in a real-world production public website.
  prerenderAll: false,
  revalidate: 10,
  secret: isProduction ? process.env.SECRET : 'secret',
  verbose: process.env.VERBOSE,
  blacklistTags: new Set(['cypress'])
};

/***/ }),

/***/ "./lib/context/PageContext.tsx":
/*!*************************************!*\
  !*** ./lib/context/PageContext.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageState": function() { return /* binding */ usePageState; },
/* harmony export */   "usePageDispatch": function() { return /* binding */ usePageDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/hooks/useSessionStorage */ "./lib/hooks/useSessionStorage.ts");

var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\lib\\context\\PageContext.tsx";


const PageStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const PageDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);

const PageContextProvider = ({
  children
}) => {
  const [page, setPage] = (0,lib_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_2__.default)("offset", 0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageDispatchContext.Provider, {
    value: setPage,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageStateContext.Provider, {
      value: page,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

const usePageState = () => {
  const state = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageStateContext);
  return state;
};
const usePageDispatch = () => {
  const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageDispatchContext);
  return dispatch;
};
/* harmony default export */ __webpack_exports__["default"] = (PageContextProvider);

/***/ }),

/***/ "./lib/context/PageCountContext.tsx":
/*!******************************************!*\
  !*** ./lib/context/PageCountContext.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageCountState": function() { return /* binding */ usePageCountState; },
/* harmony export */   "usePageCountDispatch": function() { return /* binding */ usePageCountDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\lib\\context\\PageCountContext.tsx";

const PageCountStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const PageCountDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);

const PageCountContextProvider = ({
  children
}) => {
  const [pageCount, setPageCount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageCountDispatchContext.Provider, {
    value: setPageCount,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageCountStateContext.Provider, {
      value: pageCount,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

const usePageCountState = () => {
  const state = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageCountStateContext);
  return state;
};
const usePageCountDispatch = () => {
  const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageCountDispatchContext);
  return dispatch;
};
/* harmony default export */ __webpack_exports__["default"] = (PageCountContextProvider);

/***/ }),

/***/ "./lib/context/index.tsx":
/*!*******************************!*\
  !*** ./lib/context/index.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var _PageCountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageCountContext */ "./lib/context/PageCountContext.tsx");

var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\lib\\context\\index.tsx";




const ContextProvider = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PageContext__WEBPACK_IMPORTED_MODULE_2__.default, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PageCountContext__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ContextProvider);

/***/ }),

/***/ "./lib/hooks/useSessionStorage.ts":
/*!****************************************!*\
  !*** ./lib/hooks/useSessionStorage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(() => {
    if (false) {} else {
      return initialValue;
    }
  });

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);

    if (false) {}
  };

  return [storedValue, setValue];
};

/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);

/***/ }),

/***/ "./lib/utils/checkLogin.ts":
/*!*********************************!*\
  !*** ./lib/utils/checkLogin.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkLogin = loggedInUser => !!loggedInUser && (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.constructor) === Object && Object.keys(loggedInUser).length !== 0;

/* harmony default export */ __webpack_exports__["default"] = (checkLogin);

/***/ }),

/***/ "./lib/utils/constant.ts":
/*!*******************************!*\
  !*** ./lib/utils/constant.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVER_BASE_URL": function() { return /* binding */ SERVER_BASE_URL; },
/* harmony export */   "APP_NAME": function() { return /* binding */ APP_NAME; },
/* harmony export */   "ARTICLE_QUERY_MAP": function() { return /* binding */ ARTICLE_QUERY_MAP; },
/* harmony export */   "DEFAULT_PROFILE_IMAGE": function() { return /* binding */ DEFAULT_PROFILE_IMAGE; },
/* harmony export */   "DEFAULT_LIMIT": function() { return /* binding */ DEFAULT_LIMIT; },
/* harmony export */   "DEFAULT_IMAGE_SOURCE": function() { return /* binding */ DEFAULT_IMAGE_SOURCE; }
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "./config.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);

const SERVER_BASE_URL = config__WEBPACK_IMPORTED_MODULE_0__.apiPath;
const APP_NAME = `Conduit`;
const ARTICLE_QUERY_MAP = {
  "tab=feed": `${SERVER_BASE_URL}/articles/feed`,
  "tab=tag": `${SERVER_BASE_URL}/articles/tag`
};
const DEFAULT_PROFILE_IMAGE = `https://static.productionready.io/images/smiley-cyrus.jpg`;
const DEFAULT_LIMIT = 10;
const DEFAULT_IMAGE_SOURCE = `data:image/png;base64,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`;

/***/ }),

/***/ "./lib/utils/getLoggedInUser.ts":
/*!**************************************!*\
  !*** ./lib/utils/getLoggedInUser.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getLoggedInUser; }
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_utils_checkLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/utils/checkLogin */ "./lib/utils/checkLogin.ts");
/* harmony import */ var lib_utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/utils/storage */ "./lib/utils/storage.ts");



function getLoggedInUser() {
  const {
    data: loggedInUser
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()("user", lib_utils_storage__WEBPACK_IMPORTED_MODULE_2__.default);
  const isLoggedIn = (0,lib_utils_checkLogin__WEBPACK_IMPORTED_MODULE_1__.default)(loggedInUser);

  if (isLoggedIn) {
    return loggedInUser;
  } else {
    return undefined;
  }
}

/***/ }),

/***/ "./lib/utils/handleBrokenImage.ts":
/*!****************************************!*\
  !*** ./lib/utils/handleBrokenImage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./lib/utils/constant.ts");


const handleBrokenImage = e => {
  e.target.src = _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PROFILE_IMAGE;
  e.target.onerror = null;
};

/* harmony default export */ __webpack_exports__["default"] = (handleBrokenImage);

/***/ }),

/***/ "./lib/utils/storage.ts":
/*!******************************!*\
  !*** ./lib/utils/storage.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const storage = async key => {
  const value = localStorage.getItem(key);
  return !!value ? JSON.parse(value) : undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (storage);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_common_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Footer */ "./components/common/Footer.tsx");
/* harmony import */ var components_common_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/Navbar */ "./components/common/Navbar.tsx");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! config */ "./config.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lib_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/context */ "./lib/context/index.tsx");
/* harmony import */ var ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionicons/css/ionicons.min.css */ "./node_modules/ionicons/css/ionicons.min.css");
/* harmony import */ var ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! style.scss */ "./style.scss");
/* harmony import */ var style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(style_scss__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "D:\\DialexaProjects\\node-express-sequelize-nextjs-realworld-example-app\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const MyApp = ({
  Component,
  pageProps
}) => {
  if (config__WEBPACK_IMPORTED_MODULE_6__.isProduction) {
    // Google Analytics page switches:
    // https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app/62552263#62552263
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

    const handleRouteChange = url => {
      window.gtag('config', config__WEBPACK_IMPORTED_MODULE_6__.googleAnalyticsId, {
        page_path: url
      });
    };

    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, [router.events]);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lib_context__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_ionicons_css_ionicons_min_css-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb21wb25lbnRzL2NvbW1vbi9DdXN0b21JbWFnZS50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vY29tcG9uZW50cy9jb21tb24vQ3VzdG9tTGluay50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vY29tcG9uZW50cy9jb21tb24vRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb21wb25lbnRzL2NvbW1vbi9NYXliZS50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vY29tcG9uZW50cy9jb21tb24vTmF2TGluay50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vY29tcG9uZW50cy9jb21tb24vTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vbGliL2NvbnRleHQvUGFnZUNvbnRleHQudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi9jb250ZXh0L1BhZ2VDb3VudENvbnRleHQudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi9jb250ZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9saWIvaG9va3MvdXNlU2Vzc2lvblN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vbGliL3V0aWxzL2NoZWNrTG9naW4udHMiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vbGliL3V0aWxzL2NvbnN0YW50LnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi91dGlscy9nZXRMb2dnZWRJblVzZXIudHMiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vbGliL3V0aWxzL2hhbmRsZUJyb2tlbkltYWdlLnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi91dGlscy9zdG9yYWdlLnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2lnbm9yZWR8RDpcXERpYWxleGFQcm9qZWN0c1xcbm9kZS1leHByZXNzLXNlcXVlbGl6ZS1uZXh0anMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ3VzdG9tSW1hZ2UiLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJwcm9wcyIsImhhbmRsZUJyb2tlbkltYWdlIiwiQ3VzdG9tTGluayIsImhyZWYiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzaGFsbG93IiwidW5kZWZpbmVkIiwiRm9vdGVyIiwiQVBQX05BTUUiLCJNYXliZSIsInRlc3QiLCJOYXZMaW5rIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXNQYXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTmF2YmFySXRlbSIsIk5hdmJhciIsInNldFBhZ2UiLCJ1c2VQYWdlRGlzcGF0Y2giLCJsb2dnZWRJblVzZXIiLCJnZXRMb2dnZWRJblVzZXIiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwidXNlcm5hbWUiLCJlZmZlY3RpdmVJbWFnZSIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOVl9PVkVSUklERSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcGlQYXRoIiwiZGF0YWJhc2VVcmwiLCJEQVRBQkFTRV9VUkwiLCJnb29nbGVBbmFseXRpY3NJZCIsImlzRGVtbyIsIkNJUk9TQU5USUxMSV9ERU1PIiwiaXNQcm9kdWN0aW9uTmV4dCIsIk5PREVfRU5WX05FWFQiLCJwb3J0IiwiUE9SVCIsInByZXJlbmRlckFsbCIsInJldmFsaWRhdGUiLCJzZWNyZXQiLCJTRUNSRVQiLCJ2ZXJib3NlIiwiVkVSQk9TRSIsImJsYWNrbGlzdFRhZ3MiLCJTZXQiLCJQYWdlU3RhdGVDb250ZXh0IiwiUGFnZURpc3BhdGNoQ29udGV4dCIsIlBhZ2VDb250ZXh0UHJvdmlkZXIiLCJwYWdlIiwidXNlU2Vzc2lvblN0b3JhZ2UiLCJ1c2VQYWdlU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwiUGFnZUNvdW50U3RhdGVDb250ZXh0IiwiUGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0IiwiUGFnZUNvdW50Q29udGV4dFByb3ZpZGVyIiwicGFnZUNvdW50Iiwic2V0UGFnZUNvdW50IiwidXNlUGFnZUNvdW50U3RhdGUiLCJ1c2VQYWdlQ291bnREaXNwYXRjaCIsIkNvbnRleHRQcm92aWRlciIsImtleSIsImluaXRpYWxWYWx1ZSIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJzZXRWYWx1ZSIsInZhbHVlIiwidmFsdWVUb1N0b3JlIiwiRnVuY3Rpb24iLCJjaGVja0xvZ2luIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiU0VSVkVSX0JBU0VfVVJMIiwiQVJUSUNMRV9RVUVSWV9NQVAiLCJERUZBVUxUX1BST0ZJTEVfSU1BR0UiLCJERUZBVUxUX0xJTUlUIiwiREVGQVVMVF9JTUFHRV9TT1VSQ0UiLCJkYXRhIiwidXNlU1dSIiwic3RvcmFnZSIsImlzTG9nZ2VkSW4iLCJlIiwidGFyZ2V0Iiwib25lcnJvciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsInVzZUVmZmVjdCIsImV2ZW50cyIsIm9uIiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQVFBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUVDLEtBQUY7QUFBT0MsS0FBUDtBQUFZQztBQUFaLENBQUQsS0FBK0M7QUFDakUsUUFBTUMsS0FBVSxHQUFHLEVBQW5COztBQUNBLE1BQUlELFNBQUosRUFBZTtBQUNiQyxTQUFLLENBQUNELFNBQU4sR0FBa0JBLFNBQWxCO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFDRSxPQUFHLEVBQUVGLEdBRFA7QUFFRSxPQUFHLEVBQUVDLEdBRlA7QUFHRSxXQUFPLEVBQUVHLGdFQUFpQkE7QUFINUIsS0FJTUQsS0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQWJEOztBQWVBLCtEQUFlSixXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7O0FBVUEsTUFBTU0sVUFBVSxHQUFHLENBQUM7QUFDbEJILFdBRGtCO0FBRWxCSSxNQUZrQjtBQUdsQkMsU0FIa0I7QUFJbEJDLFVBSmtCO0FBS2xCQztBQUxrQixDQUFELEtBTUk7QUFDckIsTUFBSUEsT0FBTyxLQUFLQyxTQUFoQixFQUEyQjtBQUN6QkQsV0FBTyxHQUFHLEtBQVY7QUFDRDs7QUFDRCxzQkFBUSw4REFBQyxrREFBRDtBQUFN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ZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0EseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERUZBVUxUX0lNQUdFX1NPVVJDRSB9IGZyb20gXCJsaWIvdXRpbHMvY29uc3RhbnRcIjtcclxuaW1wb3J0IGhhbmRsZUJyb2tlbkltYWdlIGZyb20gXCJsaWIvdXRpbHMvaGFuZGxlQnJva2VuSW1hZ2VcIjtcclxuXHJcbmludGVyZmFjZSBDdXN0b21JbWFnZVByb3BzIHtcclxuICBzcmM6IHN0cmluZztcclxuICBhbHQ6IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEN1c3RvbUltYWdlID0gKHsgc3JjLCBhbHQsIGNsYXNzTmFtZSB9OiBDdXN0b21JbWFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgcHJvcHM6IGFueSA9IHt9XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgcHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17c3JjfVxyXG4gICAgICBhbHQ9e2FsdH1cclxuICAgICAgb25FcnJvcj17aGFuZGxlQnJva2VuSW1hZ2V9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JbWFnZTtcclxuIiwiLyogSGVscGVyIGZvciBhIGxpbmsgdGhhdCBhY2NlcHRzIHBhcmFtZXRlcnMgc3VjaCBhcyBjbGFzc05hbWUgKi9cclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEN1c3RvbUxpbmtQcm9wcyB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHNoYWxsb3c/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBDdXN0b21MaW5rID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgaHJlZixcclxuICBvbkNsaWNrLFxyXG4gIGNoaWxkcmVuLFxyXG4gIHNoYWxsb3csXHJcbn06IEN1c3RvbUxpbmtQcm9wcykgPT4ge1xyXG4gIGlmIChzaGFsbG93ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHNoYWxsb3cgPSBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuICg8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZiBzaGFsbG93PXtzaGFsbG93fT5cclxuICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8IFwiXCJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tTGluaztcclxuIiwiaW1wb3J0IEN1c3RvbUxpbmsgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0N1c3RvbUxpbmtcIjtcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwibGliL3V0aWxzL2NvbnN0YW50XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPGZvb3Rlcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nby1mb250XCI+XHJcbiAgICAgICAge0FQUF9OQU1FLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgIDwvQ3VzdG9tTGluaz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cclxuICAgICAgICB7XCIgXCJ9wqkgMjAyMS4gQW4gaW50ZXJhY3RpdmUgbGVhcm5pbmcgcHJvamVjdCBmcm9te1wiIFwifVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoaW5rc3Rlci5pb1wiPlRoaW5rc3RlcjwvYT4uIENvZGUgbGljZW5zZWQgdW5kZXIgTUlULlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvb3Rlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWF5YmUgPSAoeyB0ZXN0LCBjaGlsZHJlbiB9KSA9PiA8Pnt0ZXN0ICYmIGNoaWxkcmVufTwvPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1heWJlO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW50ZXJmYWNlIE5hdkxpbmtQcm9wcyB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IE5hdkxpbmsgPSAoeyBocmVmLCBvbkNsaWNrLCBjaGlsZHJlbiB9OiBOYXZMaW5rUHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gcm91dGVyO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cclxuICAgICAgPGFcclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoYXNQYXRoKSA9PT0gZW5jb2RlVVJJQ29tcG9uZW50KGhyZWYpICYmICdhY3RpdmUgJyB8fCAnJ1xyXG4gICAgICAgIH1uYXYtbGlua2B9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGluaztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0N1c3RvbUltYWdlXCI7XHJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9DdXN0b21MaW5rXCI7XHJcbmltcG9ydCBNYXliZSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vTWF5YmVcIjtcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL05hdkxpbmtcIjtcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwibGliL3V0aWxzL2NvbnN0YW50XCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VEaXNwYXRjaCB9IGZyb20gXCJsaWIvY29udGV4dC9QYWdlQ29udGV4dFwiO1xyXG5pbXBvcnQgZ2V0TG9nZ2VkSW5Vc2VyIGZyb20gXCJsaWIvdXRpbHMvZ2V0TG9nZ2VkSW5Vc2VyXCI7XHJcblxyXG5jb25zdCBOYXZiYXJJdGVtID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPntjaGlsZHJlbn08L2xpPlxyXG4pXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2V0UGFnZSA9IHVzZVBhZ2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGxvZ2dlZEluVXNlciA9IGdldExvZ2dlZEluVXNlcigpXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBzZXRQYWdlKDApLCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAge0FQUF9OQU1FLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgPC9DdXN0b21MaW5rPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBwdWxsLXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8TmF2YmFySXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICA8TWF5YmUgdGVzdD17bG9nZ2VkSW5Vc2VyfT5cclxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9lZGl0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1jb21wb3NlXCIgLz5cclxuICAgICAgICAgICAgICAgICZuYnNwO05ldyBBcnRpY2xlXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1nZWFyLWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7U2V0dGluZ3NcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZmlsZS8ke2xvZ2dlZEluVXNlcj8udXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLXBpY1wiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nZ2VkSW5Vc2VyPy5lZmZlY3RpdmVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwieW91ciBwcm9maWxlIGltYWdlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7bG9nZ2VkSW5Vc2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgIDwvTWF5YmU+XHJcbiAgICAgICAgICA8TWF5YmUgdGVzdD17IWxvZ2dlZEluVXNlcn0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvdXNlci9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICA8TmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3VzZXIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgIDwvTWF5YmU+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJsZXQgaXNQcm9kdWN0aW9uO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlZfT1ZFUlJJREUgPT09IHVuZGVmaW5lZCkge1xyXG4gIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxufSBlbHNlIHtcclxuICBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOVl9PVkVSUklERSA9PT0gJ3Byb2R1Y3Rpb24nXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYXBpUGF0aDogJy9hcGknLFxyXG4gIGRhdGFiYXNlVXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfHwgJycsXHJcbiAgZ29vZ2xlQW5hbHl0aWNzSWQ6ICdVQS00Nzg2NzcwNi0zJyxcclxuICBpc0RlbW86IHByb2Nlc3MuZW52LkNJUk9TQU5USUxMSV9ERU1PID09PSAndHJ1ZScsXHJcbiAgaXNQcm9kdWN0aW9uOiBpc1Byb2R1Y3Rpb24sXHJcbiAgaXNQcm9kdWN0aW9uTmV4dDogcHJvY2Vzcy5lbnYuTk9ERV9FTlZfTkVYVCA9PT0gdW5kZWZpbmVkID9cclxuICAgIChpc1Byb2R1Y3Rpb24pIDpcclxuICAgIChwcm9jZXNzLmVudi5OT0RFX0VOVl9ORVhUID09PSAncHJvZHVjdGlvbicpLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCxcclxuICAvLyBNYWtlcyBkZXBsb3ltZW50IGltcG9zc2libHkgc2xvdyBpZiB0aGVyZSBhcmUgbG90cyBvZiBwYWdlc1xyXG4gIC8vIGxpa2UgaW4gYSByZWFsLXdvcmxkIHByb2R1Y3Rpb24gcHVibGljIHdlYnNpdGUuXHJcbiAgcHJlcmVuZGVyQWxsOiBmYWxzZSxcclxuICByZXZhbGlkYXRlOiAxMCxcclxuICBzZWNyZXQ6IGlzUHJvZHVjdGlvbiA/IHByb2Nlc3MuZW52LlNFQ1JFVCA6ICdzZWNyZXQnLFxyXG4gIHZlcmJvc2U6IHByb2Nlc3MuZW52LlZFUkJPU0UsXHJcbiAgYmxhY2tsaXN0VGFnczogbmV3IFNldChbXHJcbiAgICAnY3lwcmVzcycsXHJcbiAgXSlcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgdXNlU2Vzc2lvblN0b3JhZ2UgZnJvbSBcImxpYi9ob29rcy91c2VTZXNzaW9uU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgUGFnZURpc3BhdGNoID0gUmVhY3QuRGlzcGF0Y2g8YW55PjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgUGFnZVN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8bnVtYmVyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgUGFnZURpc3BhdGNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8UGFnZURpc3BhdGNoIHwgdW5kZWZpbmVkPihcclxuICB1bmRlZmluZWRcclxuKTtcclxuXHJcbmNvbnN0IFBhZ2VDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVNlc3Npb25TdG9yYWdlKFwib2Zmc2V0XCIsIDApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UGFnZX0+XHJcbiAgICAgIDxQYWdlU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwYWdlfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUGFnZVN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvUGFnZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VTdGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUGFnZVN0YXRlQ29udGV4dCk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VEaXNwYXRjaCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IFJlYWN0LnVzZUNvbnRleHQoUGFnZURpc3BhdGNoQ29udGV4dCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgUGFnZUNvdW50RGlzcGF0Y2ggPSBSZWFjdC5EaXNwYXRjaDxhbnk+O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBQYWdlQ291bnRTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PG51bWJlciB8IHVuZGVmaW5lZD4oXHJcbiAgdW5kZWZpbmVkXHJcbik7XHJcblxyXG5jb25zdCBQYWdlQ291bnREaXNwYXRjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxyXG4gIFBhZ2VDb3VudERpc3BhdGNoIHwgdW5kZWZpbmVkXHJcbj4odW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IFBhZ2VDb3VudENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2VDb3VudCwgc2V0UGFnZUNvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRQYWdlQ291bnR9PlxyXG4gICAgICA8UGFnZUNvdW50U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwYWdlQ291bnR9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9QYWdlQ291bnRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1BhZ2VDb3VudERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VDb3VudFN0YXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChQYWdlQ291bnRTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYWdlQ291bnREaXNwYXRjaCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IFJlYWN0LnVzZUNvbnRleHQoUGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0KTtcclxuICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlQ291bnRDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBQYWdlQ29udGV4dCBmcm9tIFwiLi9QYWdlQ29udGV4dFwiO1xyXG5pbXBvcnQgUGFnZUNvdW50Q29udGV4dCBmcm9tIFwiLi9QYWdlQ291bnRDb250ZXh0XCI7XHJcblxyXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPFBhZ2VDb250ZXh0PlxyXG4gICAgPFBhZ2VDb3VudENvbnRleHQ+e2NoaWxkcmVufTwvUGFnZUNvdW50Q29udGV4dD5cclxuICA8L1BhZ2VDb250ZXh0PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTZXNzaW9uU3RvcmFnZSA9IChrZXksIGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgIHJldHVybiAhIWl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZTtcclxuICAgIHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xyXG4iLCJjb25zdCBjaGVja0xvZ2luID0gKGxvZ2dlZEluVXNlcikgPT5cclxuICAhIWxvZ2dlZEluVXNlciAmJlxyXG4gIGxvZ2dlZEluVXNlcj8uY29uc3RydWN0b3IgPT09IE9iamVjdCAmJlxyXG4gIE9iamVjdC5rZXlzKGxvZ2dlZEluVXNlcikubGVuZ3RoICE9PSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tMb2dpbjtcclxuIiwiaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJ2NvbmZpZydcclxuXHJcbmV4cG9ydCBjb25zdCBTRVJWRVJfQkFTRV9VUkwgPSBhcGlQYXRoO1xyXG5leHBvcnQgY29uc3QgQVBQX05BTUUgPSBgQ29uZHVpdGA7XHJcbmV4cG9ydCBjb25zdCBBUlRJQ0xFX1FVRVJZX01BUCA9IHtcclxuICBcInRhYj1mZWVkXCI6IGAke1NFUlZFUl9CQVNFX1VSTH0vYXJ0aWNsZXMvZmVlZGAsXHJcbiAgXCJ0YWI9dGFnXCI6IGAke1NFUlZFUl9CQVNFX1VSTH0vYXJ0aWNsZXMvdGFnYFxyXG59O1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9GSUxFX0lNQUdFID0gYGh0dHBzOi8vc3RhdGljLnByb2R1Y3Rpb25yZWFkeS5pby9pbWFnZXMvc21pbGV5LWN5cnVzLmpwZ2A7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xJTUlUID0gMTA7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lNQUdFX1NPVVJDRSA9IGBkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQVlBQUFDdFdLNmVBQUFQblVsRVFWUjRYdTJkeTVManVBNUVXLy8vby8xKzcvdUdOV0ZmU2FiSUl4R0NBQkN6bVVXRjBjaE1KRkswemFycHo1OC8vNlpwK3ZEdjM3OFBwZjkvQVA5ZCtmcG5YNkNOWXY5YlhCcDFhbndrbnZLY1dlUGxPU2ZUMzc5Ly94MFpvbWppdjRpNGNFbFlGYisyTEtMcGZCYlAxRW9RS1hFMU5qY1pkaWs4cE01WlViWmNXYWxqcFE5Tm5Zc0pNcUw0aFBSb0pvK0c1NHE1blJPRURBZjV4MG1kRk9XYXM1NlVQcVRPU0VsU1RaQWt5Lzh3NTlJcXIyUnE4bFdDRURLSmFVaWRUQkwvNXFORDF0TGFjcDJYUVhxYjdIMDlNWldVT2FYcXRJUi8vTndUTDlId0VKMmIraXpQSUhlOGU1S2laSkpZWG81dmoxaE5SMDFUZGFaN1gyK1pyS3MrVENXYlRwT1hYRnFMcFZWTGtCU2xQaXE5eTZEMzlacjZFQk5Id3pNL0l1OFpwQmRzNyt1dGlVLzZpYlo1bytFNVpmTGZ2My9QMzhVaS8ya012WlUrQ0puRU5LU09CcStrajhUelBuMjdDWkprblgrOGltYnlhSGpJc25ndHJXZUNrQmRKbVliVUdWcVVJRitjakpDTXpRUWh3MHpNRllHc2ttbEgrcXIva0V0cm15QmsyS1ZNUStvTUtVb2xRYXpwUS9yeHZCem5CQ0VneVRDVE9wN0pxcGsxazJUTlRoU2RwNzBFSWNNdVpScFNKNU1rUDNFbmN5STl0NnNFa1M1K2R1TnE5cUZKZWpTVFI4TlRtcnRtZ2xnYjFoRkUyV0tNOHJpaXVZeWs1cmFZSUZMRlNaMW80cE1oaUdieWFIaVdjenNuQ0JHVkRMdG1uY2lpN0dHTHRrdzg0S2ttaUtZcFBKQzEvVFp2cjBsN1g2K3BEMWwrMGZETS9DNFRoSkNRb3R6L2U1MmlMUlBMZUY0R3NkS2tsVDQwbDBXMHpSc0tUeWxCTklkREtwRkNpYkw0Skgya3Q4b3RMc2UzUnl3clRWcnBRM05aUkRONUNEeTFCTkVjamt5UzgyZWJhTXZFRXA3aUlmMWhEQ3ROV3VsRGMxbUUyTHp3TVZHVDExTkwrTmV2WDZadUZKNENVZmoyYTdRaEk3eEVXeVlXOE93bWlEVm5XeUJyYVRxTmZxS1ozQ1dlWjRLUURXWE5OS1FmbDZKMDNnZlJNSy9tdk55SnA1a2daQWhISWF0a05nM3hvcG5jRTU1cG15Q2F3NjVwUGsraVNQR2lZVjdOZWJrRHo1d2dtaUJUL0xwVjgyYmltcDg3VExFNmErNGxpRWZURVBObGt1VE5SREluei9sZkpZaEhVOXk5WWJhRzArZ25tc2t0NDVuUElNUlJsa0hzOVRiUzR3cFpiaHJtSlgyUWVTTjFOUEFVRTRRMEp3VlNxbzRHV2RaNHlhVjEvZVBpS2tISXNLWW8xNHZTNHJoM0dmUytuc3lKNWpLNUVrODFRVFJCU3BGK0pWblNOd3FsK0cwWjZ2RnpUN3lZd3JNOGd4dzVjSm9DSWZEYjZhUGhJZWJ6WkpxNzhMd2VzWktzc2tVODhSTE41Q2J3MUJLRVBQYVlBQ0g0MWVwb2VPN2F2TnZIVWRJSG1UZFNSM0twdlIzU0pZdnZrVVJBV2lUTEFoN0NTelNUMzRybjU4K2ZJdmRCYmdWeHdYMlFhSGpJVXNybCtLNTY4VzFlYis5NmpDaCtKb25TbWZHWklHVElVaFFsVVc3K0MxT1pKUC9YZVRkQmlCbWtUS1ZaSjVyNFJLZG9qNHVxZUxZSklqV3NxaUE2YitDTk9HUkU1MmpMNUF5ZVpvS1E0U0ZrVzZ0emhxeVM2VDNWeWFWMS9HdEMwMTZDU0ExOWluSmNsRndtOWFucFhVcEhYajhuaUpRWlBOWTVRbFpOTms5MWNtbnhwZFZNRUttaFQxRzRLRnV1ckpqUFNoOVNDVXZ3ckJKRXlnd2U2eEN5MHVTMlRYNkZQbk9DU0RtUzFMa0N4RjVOamFHUGhvY3NOdzFlU1I5azNraWRHcDVpZ3BDaVVzMVpxeE5OZk1Kdk5KTkw0bGtsQ0NGVHlqeVNJRnExTklhKzFjUGo1eHA5U09sRDZveUE1MldRR3RnVTMvYXpOeGxtc3Z5aTZTeUNaM2tHdWVQZEV4RVFBamNLYzhqeTc1T1Vsc2piSTFZbXlkcXkwUjRqTWtuS0szbFg1MXFDRURKejg0N3grRVYwanJaTUhuaUtoM1NKQTJWRXNyemNLQ1REVEpaZlB2NysrekQ5K1BGRDVFWmhpcEpKUWt3bk5TZGFkWFlUaElDTnRtRUk2ZEdTY1VTZEQ4M3RNMEhJY0JBeXBlb2NBbkh6RFR6Q1N6UThST2NJeTZTWklFVDhVY2hhRG5rRThVdW1IZWxkVExTMHRnbENobDNLTktRT0FxRndvMUNLbDJoNENDK2VsOG1jSUFUa2lNTk1lUEVzZnMyc21TVC9zZk42RjJ2dkxVd3JHODlLSDhRMHVVd09maGduK0pzeHBmUjUxbGtsaUhUeHN4dEtzdzh5ektTZlRCTC9waWlleWZiT0lOdEVzYkxCcmZSQlRFUE1GdzBQNGNYVE1pa21DQUZKeENkMVBKRTFJaDZpY3pTVHI5NnRmQ1FJSVlFTWgyYWR5S0xzWWN0bG92OFlWMDBRVFZPaytQcmlTejlHUjF4YTg3dFlXMkNlaGpXaUtDMU1udlFoUzlZeW5wZEJyRFJwcFErcHg4Vm9lQWd2TFlQUG55OTQrWEMzbENDRUJMSVpOT3VFRXNYUURVbE5uUzJhNXUwUnkwcVRWdnFRTW5rMFBJU1hFRXVybGlDRUJNME5RL29KSVlyaFQ1WTErTFcwVElxSGRFdlBpSmJJa3VBbEdwN3dTK3Y3OSsrbWJoUktKWkxHcGlQRGtYaDgvN2FVM1FUUkZKOE1VYlROR3cwUG1SZVhTK3VaSUdSSUNRblc2cmdVeGNFTlNVMmQ3MXdtelFTeFpvbzd5U3FacmJlZjN0ZGIwNGYwNDJscFRkc0UwZHdNaEV5cGZqeUpRbmlKaG9mb2ZNY3ltUk9FTkVkRTA2eHpCMW0xb2V6dHAvZjExdlFoL1hndytXNkNhQTQ3SVZPcUh3K2liSHNjNmZvcjBWbHptYXdTaERTbk9jeWtIMDJ5Tk13VkRRK1pGdzFlU1IrbGVXc21DQm5Tcy8vNEhqRWFRMkpabERPOFJNTkQ1azVqVG9vSlFwcXpaZ29Oc2pSNWlZYUh6SXRGazg4SlFwclhIQTdOZml5SzB1b3B6eVJyaHE1Y0p0VUU4V2lLSzhtU3ZvRkgrSTJHaHl5LzFvSjQvRnlObDJXQ2tPYUpxQjdybUJKRjRENUlORHhrN3E0d3plc1I2NHJpMjQxTFFFcVpLL0dVTGVLSkZ4TW1MeVdJMUpCNnJHTkNGTUg3SU5Id2tDVXJ1UVJXaDNUVlp6dUJ4d2h0c3ZZU2tmUWh0U3dreGJlQWgvQnlxOG0vZmZ2V3ZBK1NvdVRqaXVZU0lLWWgvVWpNN1Z1Q1NEVm5yWTRFV1pZU05ob2VNaSszSk1relFiUWNhV25JeklweTRYMlFXNGJzUWp4WHorMXVncERoSWMxWnF4TnQ4MGJEUStaRjFlVGJCQ0ZEbjZMa21ZVE1DUmwyelRwbjVyYVpJTlpBU3ZWemhxeVNMYXpVc2RLSGxENmtqa2FTVEhzSlFweWRvbVNTa0RraHc2NVo1OGpjemdtaTJaeG5zbW9iNndqcFY5YXgwb2VtemxjbVNUTkJpSGxTbEV3U01pZWFwaUg5a0xsZEpRZ3BhZzJrVkQrRXJDczMxYloyYnorOXI1ZmlWYlBPRmZyTUNTSUZJa1hKSlBHNFpHdHpXMHdRanlEVDVQN05LVFYza2tteVNwQWNzanExdFUwaktVcXJsa1pTdDNwNC9GeWpEeW5Ua0RvbFBDK0RqQ1QrV2JLMjMzNzFORVRSaHBrc2N4RjlsbWVRUENoT2hOUHE1aVFGUEExck5EeEhsK1BiSTFZbXlYb2tQQTN6VWZIdnZQRkpFb0RnSVhXNlRGNUxFUEtQRXhEUmhvencwaVdLNEkxQ29zK0llQWd2ajdrdEh0SmJCN0JvNGxPeXZOekFHeEhQWlNiLyt2VnI4MFloK2NkVGxQSmZVb3EyVEtMaGFjM3Rib0lRVTR4R1ZpdFpXMlF2K2JMeTJHbWxEekp2VXZ3ZW10dG5na2o5NDZST2lsS1d5Qk12aDRiczVodUZQZVpySmdncFBncFpGaE9BNkpOTHErUHhkNXNnaE13VXBiNFNSbnFyUFBweW5CTkV5aFRSeVNyaDgvUllSSFNPaG9jczg5cmNUbnNKUXNnay96aXBrNkxrbVlUTWlkUzhIYW16U2hDcEpqTkpPcDU1S3dkYUtYMUluVnhhLzAxeE0wRUltVWNjV1kwekk4TWhoWWZVaWJaTW91RXBKb2lVS2FLUlJYaUp0bm1qNFRtNnRPWUVJUzhpd3lGVlozUlI5aGFMSjE2aUxNZHFna2laSWdwWlIrNkRlQnBtb25NMFBHU1p2ODRnMndHMlFvYVZQZ2laWk1oSW5Xakx4RHVlMXlPV3hqQjZKK3ZNL1FrTlhxWE1TZXBFdzlOY1dzc3pTQ1pKLzQxQ01tUk5VWlQrdUJEcFkzUThxMFA2L015bDhGWnJKa2wrVHFKcHppNlQxeExFR2dnTjgzYVJXVmd1dmN1ZzkvV0pwN3lNS0M5dkNhSnBpbWppRTlLam1Ud2FucmY1Ly9MbGk5cU5RaW56aFJmbGdpUWk1cFhTaDlUeHNoeDNFNFNBbENMZEMxbkxQbnROMnZ0NlRYMkl6dEh3dlBoOUpnZ2hJVVdwVzFsalNLSXRFK3Q0bWdtaWFRcnJaSlg2NnpWRjcrczE5U0ZMTkJ5ZWJZSVFFbEtVVEpJalg3c2g4MkoxT2M0SllzMFVWc21xOWRXN09YdGZUNFpRVStjb2VLYTlCTkVrVTByY0tLSnNqWmgzM05lTWFPcThTaEJycHNna3lVL2NwWmJuMlRyTkJMRm1HdEtQNW9heFltSXJmUkI5eUxCYXdWTk1FQ21RVW5Xc2tDV0ZoOVNKWm5LdmVPWUVJWTRtb2xxcjQxV1Uxa0xJTTRuZW1hU2FJTlpNMFJxY3g4K2ptU0x4bEZWWDQyV1pJTllTUUtvZk5USU4zZU9JdGt6dXd2TjZ4UEkwUkhlUmRlWkdZWnI4NWdUb1hWcWxCSkVTMVZvZFQwdEE2dkUyMmpMUnhyTTZwSHQ3aHRjbWF5OUJwSWFaMUlsbWN2TjRhZ2xpTFFHaytqRXZ5Z1gzUWFJdEV5MDhid2tpTllTYWRiVElzcFN3MFV4dUZzL256NS9kM1NpVU1wOVpVUzc4aTB6UmxzblZlSFlUUkdvSU5ldGNUZGF5dmhWeldlbERTbWR6ZUo0SlFnNklVaVJZcTJOT2xQelZTOFZkZDhjM0NKb0pZbTJZU1QrWkpQa3RZREluSkJTbWJZS1FGMG45NDlicVpKSTQvMUN2OTBQQlJYSy9adlB4Tm05VVUyU1NaSkwwTHVIZEJJbHFHb0lya3lTVDVEa244eGxFK2dJK0djSmVaMjhsdk9NQVZ4b2pLK2F5MG9lVXpuZmhtUk9FZ01qSEZmK1BLeVBxM0R1M3hRU3hsZ0JTL2ZTU0pkV0hacDI3TnU4ZTE3Mzk5TDZlTEltbFBxc0VJUy9PSWNza0lYT2l1UVJJUDJmbnRwb2cxa0JLOVhPV0xNOW5OZTNOMitLNHQ1L2UxeE5Uelhvdnp5QjU4SzMvaFNrMVVTNTRQNzgyc0NPOXdkRXk3dVBuU3o1ZUJrbngvYisxU1JJMm1zNlg0NmtsQ0ltaG80Njg4OW9xd1RQaWtCRmVvdWxNOGJ3OVlsM3V5TUxIK1dmam53enppT0lUWHFMcGZCbWVUNTgraWR3SG9ZNjBjRzJWbUdiRUlTTzhSTk81aFdmM2tINlpJeSs0VGtxR2VVVHhDUy9SZEJiSDgwd1FRbVlPMlJnSCtSRjEzdjFnczNWSUYzZmtoZGRKMCtUbi8rUnhOSjNGOEd3VEpJY3NoMnprejhQZXNEOFNoSmhDekpFSzEwa0puaEVmSXdndjBYVHV4VFB0SlFnaGt3d1pxZE1MUXFvUHFUclI4QkJlV3U4R2JUK2h0djU1MkF2ek1rRkdIT1lSeFI5UjU3TkxxNWtnaE13Y3NueDNTMnBPck5XWlB3YzVFM2RuSFhua0FHaU5yR2lQRVlUZmFEb2Z4VE1uQ0VrQVFxWlVuYU1nZHQvRE52S0dRRFE4Uk9jb3k2U2FJTVFVS2Y0WWoxZlJkS1o0VmdsQ05nTXhqVlFkQ3FLMXJhelVzZEtIbEQ2a1Rrc2I2Kzl1dlF6U0sxN3Y2d25abXVZay9YZ1hQOCtlNEc5YUxzOGdWZy9RMGN3WERVL2taZkwyaU5Vclh1L3JDZG1aSk9lL0RpUEZielNkZC9IVUVrU0tUS2s2dzRoaThGS1oxRkx5OWxoYVBLUkxISnlpRFRNeHVUZnhVK2QzeGQ3bTl1UEhqeUkzQ3FVMkRLa1R6WHpSOEVSYUpyc0pRa0NPT015RWwwd1MvNzljNzdXMG5nbENocDBNaDJhZGFKczNHaDR5TDlhWFNUTkJDRWhpaWhRL1AzRW5jeUkxYjFKMXBtMkN1QVJoNUR0WFlxSUV3ME40c1pva2M0Sm9taUtUSkpORWM5NklPV3Y5N0NhSUp4QzlKT1EzQ09xL2sxaVRYMnRKc2tvUVRWTmtrbVNTYU03YldaTTNFOFFEQ0tzSmNGYVU2SGdJTDFhU3BKZ2dtcWJJSk1razBadzNZczVsUDNPQ0hIMVJ5OTFXaHQ1S0gxTDhSc05EZUduTjJ1UG5WL0pTVFJCTloxOEpjbnZ2NFc3U05Ya2xRNmpaanp1ZGx3bGlqVXlwZnR5SjB2Z0xVOUh3RUozdldtcXZSeXdycEZ2cGc0Z210WG52RXYvTWpVSXBYcnpvL0QvQXlHWldzaUVOU3dBQUFBQkpSVTVFcmtKZ2dnPT1gO1xyXG4iLCJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmltcG9ydCBjaGVja0xvZ2luIGZyb20gXCJsaWIvdXRpbHMvY2hlY2tMb2dpblwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwibGliL3V0aWxzL3N0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExvZ2dlZEluVXNlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YTogbG9nZ2VkSW5Vc2VyIH0gPSB1c2VTV1IoXCJ1c2VyXCIsIHN0b3JhZ2UpO1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IGNoZWNrTG9naW4obG9nZ2VkSW5Vc2VyKTtcclxuICAgIGlmIChpc0xvZ2dlZEluKSB7XHJcbiAgICAgIHJldHVybiBsb2dnZWRJblVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERFRkFVTFRfUFJPRklMRV9JTUFHRSB9IGZyb20gXCIuL2NvbnN0YW50XCI7XHJcblxyXG5jb25zdCBoYW5kbGVCcm9rZW5JbWFnZSA9IGUgPT4ge1xyXG4gIGUudGFyZ2V0LnNyYyA9IERFRkFVTFRfUFJPRklMRV9JTUFHRTtcclxuICBlLnRhcmdldC5vbmVycm9yID0gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUJyb2tlbkltYWdlO1xyXG4iLCJjb25zdCBzdG9yYWdlID0gYXN5bmMga2V5ID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgcmV0dXJuICEhdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vRm9vdGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL05hdmJhclwiO1xyXG5pbXBvcnQgeyBnb29nbGVBbmFseXRpY3NJZCwgaXNQcm9kdWN0aW9uIH0gZnJvbSBcImNvbmZpZ1wiO1xyXG5pbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCJsaWIvY29udGV4dFwiO1xyXG5pbXBvcnQgXCJpb25pY29ucy9jc3MvaW9uaWNvbnMubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJzdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBpZiAoaXNQcm9kdWN0aW9uKSB7XHJcbiAgICAvLyBHb29nbGUgQW5hbHl0aWNzIHBhZ2Ugc3dpdGNoZXM6XHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDQxMTM1MS9ob3ctdG8tdXNlLWdvb2dsZS1hbmFseXRpY3Mtd2l0aC1uZXh0LWpzLWFwcC82MjU1MjI2MyM2MjU1MjI2M1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgICAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIGdvb2dsZUFuYWx5dGljc0lkLCB7XHJcbiAgICAgICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbcm91dGVyLmV2ZW50c10pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9