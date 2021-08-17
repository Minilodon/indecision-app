"use strict";

console.log("App.js is running");
const APP_IP = document.getElementById("app");
const TITLES = {
  MAIN: "Indecision App",
  SUB: "Put your life in the hands of a computer",
  OPTIONS: []
};

const OnFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    TITLES.OPTIONS.push(option);
    e.target.elements.option.value = '';
  }

  RENDERIZAR();
};

const RemoveAll = () => {
  TITLES.OPTIONS = [];
  RENDERIZAR();
};

const DECIDIDO = () => {
  const VALOR_ALEATORIO = Math.floor(Math.random() * TITLES.OPTIONS.length);
  const OPCAO_SELECIONADA = TITLES.OPTIONS[VALOR_ALEATORIO];
  alert(OPCAO_SELECIONADA);
};

const RENDERIZAR = () => {
  const TEMPLATE = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, TITLES.MAIN), /*#__PURE__*/React.createElement("p", null, TITLES.SUB && TITLES.SUB), /*#__PURE__*/React.createElement("p", null, TITLES.OPTIONS.length > 0 ? "Here are your options" : "No options available"), /*#__PURE__*/React.createElement("button", {
    disabled: TITLES.OPTIONS.length === 0,
    onClick: DECIDIDO
  }, "What Should I Do?"), /*#__PURE__*/React.createElement("button", {
    onClick: RemoveAll
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, TITLES.OPTIONS.map(opcoes => {
    return /*#__PURE__*/React.createElement("li", {
      key: opcoes
    }, "Op\xE7\xE3o: ", opcoes);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: OnFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(TEMPLATE, APP_IP);
};

RENDERIZAR();