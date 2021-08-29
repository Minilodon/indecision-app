"use strict";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const VALOR_ALEATORIO = Math.floor(Math.random() * this.state.options.length);
    const VALOR_SELECIONADO = this.state.options[VALOR_ALEATORIO];
    alert(VALOR_SELECIONADO);
  }

  handleAddOption(OPCAO_NOVA) {
    if (!OPCAO_NOVA) {
      return 'Enter a valid value to add item!';
    } else if (this.state.options.indexOf(OPCAO_NOVA) > -1) {
      return 'This option already exists!';
    } else {
      this.setState(prevState => {
        return {
          options: prevState.options.concat([OPCAO_NOVA])
        };
      });
    }
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of the computer";
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
      title: title,
      subtitle: subtitle
    }), /*#__PURE__*/React.createElement(Action, {
      hasOptions: this.state.options.length > 0,
      handlePick: this.handlePick
    }), /*#__PURE__*/React.createElement(Opcoes, {
      options: this.state.options,
      handleDeleteOptions: this.handleDeleteOptions
    }), /*#__PURE__*/React.createElement(Maisopcoes, {
      handleAddOption: this.handleAddOption
    }));
  }

}

class Header extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("h2", null, this.props.subtitle));
  }

}

class Action extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.props.handlePick,
      disabled: !this.props.hasOptions
    }, "What should I do?"));
  }

}

class Opcoes extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.props.handleDeleteOptions
    }, "Remove all"), this.props.options.map(element => /*#__PURE__*/React.createElement(Opcao, {
      key: element,
      MyOption: element
    })), /*#__PURE__*/React.createElement(Opcao, null));
  }

}

class Maisopcoes extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const OPCAO_NOVA = e.target.elements.option.value;
    const error = this.props.handleAddOption(OPCAO_NOVA);
    this.setState(() => {
      return {
        error: error
      };
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleAddOption
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "option"
    }), /*#__PURE__*/React.createElement("button", null, "Add option")));
  }

}

class Opcao extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, this.props.MyOption);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));