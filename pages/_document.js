"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _document = _interopRequireWildcard(require("next/document"));

var React = _interopRequireWildcard(require("react"));

var _jsxFileName = "/srv/src/pages/_document.tsx";

class Document extends _document.default {
  static async getInitialProps(context) {
    return await super.getInitialProps(context);
  }

  render() {
    return (0, _core.jsx)("html", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, (0, _core.jsx)(_document.Head, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, (0, _core.jsx)("meta", {
      charSet: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), (0, _core.jsx)("link", {
      href: "https://use.fontawesome.com/releases/v5.1.1/css/all.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), (0, _core.jsx)("link", {
      href: "https://unpkg.com/bootstrap@4.1.3/dist/css/bootstrap.min.css",
      key: "bootstrap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), (0, _core.jsx)("body", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, (0, _core.jsx)(_document.Main, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), (0, _core.jsx)(_document.NextScript, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })));
  }

}

exports.default = Document;