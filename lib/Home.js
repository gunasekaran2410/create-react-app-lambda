"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactBootstrap = require("react-bootstrap");

var _video = _interopRequireDefault(require("./video"));

var _toy = _interopRequireDefault(require("../src/assets/img/toy.png"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./App.css");

require("./responsive.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Home() {
  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  function incrementCount() {
    if (count < 10) {
      count = count + 1;
      setCount(count);
    }
  }

  function decrementCount() {
    if (count > 1 && count <= 10) count = count - 1;
    setCount(count);
  } // Connct Modal


  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  var _useState5 = (0, _react.useState)("Nothing"),
      _useState6 = _slicedToArray(_useState5, 2),
      dialog = _useState6[0],
      setDialog = _useState6[1];

  function ConnectedSuccess() {
    setDialog("true");
    setShow(false);
  }

  function ConnectedFailure() {
    setDialog("false");
    setShow(false);
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_video.default, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/Lunch"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "join-btn"
  }, " JOIN WHITELIST"), " ")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "content_section"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: 2
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "story text-right"
  }, " ", /*#__PURE__*/_react.default.createElement("span", null, " THE"), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "inner_padding"
  }), " ", /*#__PURE__*/_react.default.createElement("span", null, "STORY"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: 10
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "padding-top"
  }, "It's the year 2066. Life is as we know it."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "Millennials are in wheelchairs, listening to the backstreet boys in their nursing homes. Gen Z is busy doing Tik-Tok dances - in the middle of their midlife crisis of course. However, this is all happening in a parallel digital universe: the Metaverse. We humans found it easier to slip into virtual reality rather than trying to coexist in peace. Earth - in its physical form, is on the very brink of extinction. And there is nothing humans can do to salvage it. Just when all seems lost, a very bleak glimmer of hope. An extra-terrestrial civilization, willing to give this planet one last chance before going Thanos on it. They use their powers and resurrect 6666 souls from their graves and transport them into the metaverse. Lucids - these supernatural beings can heal the world. But they need a human companion that mirrors their vibe, and only then can they tap into their power source. If you're one among the chosen ones, with the right vibe, your Lucids will find you."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "Will Lucids be able to give this dying planet a chance of survival?"), /*#__PURE__*/_react.default.createElement("p", null, " Will Lucids be able to save humanity?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "padding-bottom"
  }, " Will Lucids be able to save the world?")))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "toys",
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: _toy.default
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form_text"
  }, "LET YOUR LUCID ", /*#__PURE__*/_react.default.createElement("br", null), "FIND YOU"), /*#__PURE__*/_react.default.createElement("div", {
    className: "form_content"
  }, "Connect your ERC-20 Metamask wallet and ", /*#__PURE__*/_react.default.createElement("br", null), "let your Lucids find you."), /*#__PURE__*/_react.default.createElement("div", {
    className: "form_content_right"
  }, "PRICE PER LUCID"), /*#__PURE__*/_react.default.createElement("div", {
    className: "form_content_right2"
  }, "0.066 ETH"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup, {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
    value: count,
    placeholder: "ENTER THE AMOUNT OF LUCIDS YOU WANT TO PURCHASE",
    "aria-label": "ENTER THE AMOUNT OF LUCIDS YOU WANT TO PURCHASE"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup.Text, {
    onClick: decrementCount,
    className: "minus"
  }, "-"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup.Text, {
    onClick: incrementCount,
    className: "minus"
  }, "+")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "connect",
    onClick: handleShow
  }, " Connect wallet"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "error_message"
  }, /*#__PURE__*/_react.default.createElement("div", null, dialog === "false" && /*#__PURE__*/_react.default.createElement("h5", {
    className: "text-danger"
  }, "Not connected")), /*#__PURE__*/_react.default.createElement("div", null, dialog === "true" && /*#__PURE__*/_react.default.createElement("h5", {
    className: "text-success"
  }, "Connected success "))), /*#__PURE__*/_react.default.createElement("small", null, "For NFT newbies, note that only 1 NFT can be minted per transaction. A maximum of 10 NFTs can be minted per wallet. ")))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("hr", null)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, "Are you sure to Connect your Wallet"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "success",
    onClick: ConnectedSuccess
  }, "Yes"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "danger",
    onClick: ConnectedFailure
  }, "No"))));
}

var _default = Home;
exports.default = _default;