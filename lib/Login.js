"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactBootstrap = require("react-bootstrap");

require("./login.css");

var _reactRouterDom = require("react-router-dom");

// import { Link } from 'react-router-dom'
function Login() {
  var history = (0, _reactRouterDom.BrowserRouter)();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reactBootstrap.Container, null, /*#__PURE__*/React.createElement(_reactBootstrap.Row, null, /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    md: 4
  }), /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    md: 4
  }, /*#__PURE__*/React.createElement("div", {
    id: "parent"
  }, /*#__PURE__*/React.createElement("form", {
    id: "form_login"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Form, null, /*#__PURE__*/React.createElement("h1", null, " Guest Area"), /*#__PURE__*/React.createElement("p", null, " Please enter the password below."), /*#__PURE__*/React.createElement(_reactBootstrap.Form.Group, {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Form.Control, {
    type: "password",
    placeholder: "Password"
  })), /*#__PURE__*/React.createElement(_reactBootstrap.Button, {
    variant: "primary",
    type: "submit",
    onClick: history.replace("/Main")
  }, "Go")), "                            "))), /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    md: 4
  }))));
}

var _default = Login;
exports.default = _default;