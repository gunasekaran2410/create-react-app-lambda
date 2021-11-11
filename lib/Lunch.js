"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactBootstrap = require("react-bootstrap");

require("./App.css");

function Lunch() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reactBootstrap.Container, {
    className: "launching"
  }, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "launching_content"
  }, "LAUNCHING"), /*#__PURE__*/React.createElement("div", {
    className: "launching_month"
  }, "NOVEMBER 2021"), /*#__PURE__*/React.createElement("hr", null)));
}

var _default = Lunch;
exports.default = _default;