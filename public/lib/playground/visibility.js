"use strict";

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState(actualState => {
      return {
        visibility: !actualState.visibility
      };
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility Toggle"), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleToggleVisibility
    }, this.state.visibility ? "Hide details" : "Show details"), this.state.visibility && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Eu estava escondido!")));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(VisibilityToggle, null), document.getElementById("app"));