"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _app = _interopRequireWildcard(require("next/app"));

var _head = _interopRequireDefault(require("next/head"));

var React = _interopRequireWildcard(require("react"));

var _Layout = require("../components/Layout");

var _jsxFileName = "/srv/src/pages/_app.tsx";

class App extends _app.default {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return (0, _core.jsx)(_app.Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, (0, _core.jsx)(_head.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, (0, _core.jsx)("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Next js"), (0, _core.jsx)("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), (0, _core.jsx)(_Layout.Layout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, (0, _core.jsx)(Component, (0, _extends2.default)({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }))));
  }

}

var _default = App;
exports.default = _default;