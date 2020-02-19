"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Navbar = require("./Navbar");

var _jsxFileName = "/srv/src/components/Layout.tsx";
var _ref = {
  name: "1sndqv7-Layout",
  styles: "label:Layout;"
};

const Layout = ({
  children
}) => (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)(_Navbar.Navbar, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: void 0
}, (0, _core.jsx)("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}, children)), (0, _core.jsx)(_core.Global, {
  styles: _ref,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: void 0
}));

exports.Layout = Layout;