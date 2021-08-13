"use strict";

console.log("App.js is running");
const TITLES = {
  MAIN: "Grandão e sem medo",
  SUB: "Vem tranquilo",
  OPTIONS: ["Um", "Dois"]
};
const TEMPLATE = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, TITLES.MAIN), /*#__PURE__*/React.createElement("p", null, TITLES.SUB && TITLES.SUB), /*#__PURE__*/React.createElement("p", null, TITLES.OPTIONS.length > 0 ? "Here are your options" : "No options available"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item um"), /*#__PURE__*/React.createElement("li", null, "Item dois")));

function GET_LOCATION(LOCATION) {
  if (LOCATION) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", USER.LOCATION);
  }
}

const USER = {
  NAME: "Pedro Soares",
  AGE: 22,
  LOCATION: "Pituba"
};
const MODELO = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, USER.NAME ? USER.NAME : "Desconhecido"), USER.AGE >= 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", USER.AGE), GET_LOCATION(USER.LOCATION));
const APP_IP = document.getElementById("app");
ReactDOM.render(TEMPLATE, APP_IP);