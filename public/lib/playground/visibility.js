"use strict";

let STATUS = 0;
const APP_IP = document.getElementById("app");

const MOSTRAR = () => {
  STATUS = 1;
  RENDERIZAR_CONDICIONAL();
};

const ESCONDER = () => {
  STATUS = 0;
  RENDERIZAR_CONDICIONAL();
};

let PROGRAMA;

const RENDERIZAR_CONDICIONAL = () => {
  if (STATUS === 0) {
    PROGRAMA = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility App"), /*#__PURE__*/React.createElement("button", {
      onClick: MOSTRAR
    }, "Show details"));
  } else {
    PROGRAMA = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility App"), /*#__PURE__*/React.createElement("button", {
      onClick: ESCONDER
    }, "Hide details"), /*#__PURE__*/React.createElement("p", null, "Eu estava escondido!"));
  }

  ReactDOM.render(PROGRAMA, APP_IP);
};

RENDERIZAR_CONDICIONAL();