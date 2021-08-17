"use strict";

let count = 0;

const CLICADO = () => {
  count++;
  RENDER();
};

const minusOne = () => {
  count--;
  RENDER();
};

const reset = () => {
  count = 0;
  RENDER();
};

const APP_IP = document.getElementById("app");

const RENDER = () => {
  const TEMPLATE2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
    onClick: CLICADO
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: minusOne
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    onClick: reset
  }, "reset"));
  ReactDOM.render(TEMPLATE2, APP_IP);
};

RENDER();