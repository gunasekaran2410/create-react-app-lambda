"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

var _logo = _interopRequireDefault(require("../src/assets/img/logo.png"));

var _twitter = _interopRequireDefault(require("../src/assets/img/twitter.png"));

var _instagram = _interopRequireDefault(require("../src/assets/img/instagram.png"));

var _pinterest = _interopRequireDefault(require("../src/assets/img/pinterest.png"));

var _Home = _interopRequireDefault(require("./Home"));

var _Faq = _interopRequireDefault(require("./Faq"));

var _Road = _interopRequireDefault(require("./Road"));

var _Lunch = _interopRequireDefault(require("./Lunch"));

var _PupaLabsLogo = _interopRequireDefault(require("../src/assets/img/Pupa Labs Logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { BrowserRouter } from 'react-router-dom';
function Main() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactBootstrap.Container, null, /*#__PURE__*/React.createElement(_reactBootstrap.Row, null, /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    className: "list",
    md: 2,
    sm: 0,
    xs: 0
  }), /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    className: "list text-center",
    md: 2,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/RoadMap"
  }, "ROAD MAP")), /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    className: "list",
    md: 2,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/Home"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Image, {
    className: "logo",
    src: _logo.default,
    alt: "Lucids Logo.png"
  })))), /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    className: "list text-center",
    md: 2,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/Faq"
  }, "FAQs")), /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    className: "list",
    md: 3,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-inline"
  }, /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Image, {
    src: _twitter.default,
    alt: "twitter"
  })), /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Image, {
    src: _instagram.default,
    alt: "instagram"
  })), /*#__PURE__*/React.createElement("li", {
    className: "list-inline-item"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Image, {
    src: _pinterest.default,
    alt: "pinterest"
  })))))), /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/Home",
    element: /*#__PURE__*/React.createElement(_Home.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/RoadMap",
    element: /*#__PURE__*/React.createElement(_Road.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/Faq",
    element: /*#__PURE__*/React.createElement(_Faq.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/Lunch",
    element: /*#__PURE__*/React.createElement(_Lunch.default, null)
  })), /*#__PURE__*/React.createElement(_reactBootstrap.Container, null, /*#__PURE__*/React.createElement(_reactBootstrap.Row, null, /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    className: "footer second_footer",
    sm: 12,
    md: 12,
    xs: 12
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, " Conceptualised and executed by"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_reactBootstrap.Image, {
    src: _PupaLabsLogo.default
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, " Lucids.io 2021"))))));
}

var _default = Main;
exports.default = _default;