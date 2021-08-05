"use strict";

console.log("App.js is running");
var TEMPLATE = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Eu sou um belo de um modelo"), /*#__PURE__*/React.createElement("p", null, "Eu sou um texto qualquer"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item um"), /*#__PURE__*/React.createElement("li", null, "Item dois")));
var APP_IP = document.getElementById("app");
var MODELO = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Pedro Soares"), /*#__PURE__*/React.createElement("p", null, "Age: 22"), /*#__PURE__*/React.createElement("p", null, "Location: Salvador"));
ReactDOM.render(MODELO, APP_IP);