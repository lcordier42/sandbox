"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;

var _core = require("@emotion/core");

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _link = _interopRequireDefault(require("next/link"));

var _react = _interopRequireWildcard(require("react"));

var _useOutsideClick = require("../lib/useOutsideClick");

var _jsxFileName = "/srv/src/components/Navbar.tsx";
const navStyle = {
  name: "66imr8-navStyle",
  styles: "a{color:white;display:block;height:100%;padding:0.5rem 1rem;text-align:center;text-decoration:none;vertical-align:middle;&.active{background-color:red;}:hover{background-color:white;color:black;}}.nav-items a{float:right;}.burger-icon{cursor:pointer;display:none;float:right;height:30px;margin:10px 10px 0;position:relative;transform:rotate(0deg);transition:0.5s ease-in-out;width:30px;span{display:block;position:absolute;height:3px;width:100%;background:#d3531a;border-radius:5px;opacity:1;left:0;transform:rotate(0deg);transition:0.25s ease-in-out;}span:nth-child(1){top:0px;transform-origin:left center;}span:nth-child(2){top:8px;transform-origin:left center;}span:nth-child(3){top:16px;transform-origin:left center;}&.open span:nth-child(1){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);top:-3px;left:8px;}&.open span:nth-child(2){width:0%;opacity:0;}&.open span:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);top:18px;left:8px;}}.custom-navbar{background-color:grey;overflow:hidden;position:sticky;top:0;}.home{float:left;}@media only screen and (max-width:750px){.burger{background-color:red;position:absolute;right:0;top:0;bottom:0;overflow-y:scroll;-webkit-overflow-scrolling:touch;width:200px;transform:translateX(200px);transition-duration:0.3s;a{display:block;height:40px;text-align:center;line-height:40px;border-bottom:1px solid #303f9f;}&.open{transform:translateX(0px);transition-duration:0.3s;}}.burger-icon{display:block;&.open{transform:translateX(-200px);transition-duration:0.25s;}}.content{&.open{background-color:rgba(0,0,0,0.6);transform:translateX(-200px);transition-duration:0.3s;}}.nav-items{display:none;}}label:navStyle;"
};

const Navbar = ({
  children
}) => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const menuRef = (0, _react.useRef)(null);
  (0, _useOutsideClick.useOutsideClick)(menuRef, event => {
    event.stopPropagation();
    setIsOpen(false);
  });
  return (0, _core.jsx)("div", {
    css:
    /*#__PURE__*/
    (0, _css2.default)([navStyle], "label:Navbar;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: void 0
  }, (0, _core.jsx)("div", {
    className: "custom-navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: void 0
  }, (0, _core.jsx)("div", {
    className: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: void 0
  }, (0, _core.jsx)(_link.default, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: void 0
  }, (0, _core.jsx)("a", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: void 0
  }, "Home"))), (0, _core.jsx)("div", {
    className: ["burger-icon", isOpen ? "open" : ""].join(" "),
    onClick: event => {
      event.stopPropagation();
      setIsOpen(!isOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: void 0
  }, (0, _core.jsx)("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: void 0
  }), (0, _core.jsx)("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: void 0
  }), (0, _core.jsx)("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: void 0
  })), (0, _core.jsx)("div", {
    className: "nav-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: void 0
  }, (0, _core.jsx)(_link.default, {
    href: "/page3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: void 0
  }, (0, _core.jsx)("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: void 0
  }, "Page 3")), (0, _core.jsx)(_link.default, {
    href: "/page2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: void 0
  }, (0, _core.jsx)("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: void 0
  }, "Page 2")), (0, _core.jsx)(_link.default, {
    href: "/page1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: void 0
  }, (0, _core.jsx)("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: void 0
  }, "Page 1")))), (0, _core.jsx)("div", {
    className: ["content", isOpen ? "open" : ""].join(" "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: void 0
  }, children), (0, _core.jsx)("div", {
    className: ["burger", isOpen ? "open" : ""].join(" "),
    ref: menuRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: void 0
  }, (0, _core.jsx)(_link.default, {
    href: "/page1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: void 0
  }, (0, _core.jsx)("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: void 0
  }, "Page 1")), (0, _core.jsx)(_link.default, {
    href: "/page2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: void 0
  }, (0, _core.jsx)("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: void 0
  }, "Page 2")), (0, _core.jsx)(_link.default, {
    href: "/page3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: void 0
  }, (0, _core.jsx)("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: void 0
  }, "Page 3"))));
};

exports.Navbar = Navbar;