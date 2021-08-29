class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }

    handleToggleVisibility() {
        this.setState((actualState) => {
            return {
                visibility : !actualState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && (
                    <div>
                        <p>Eu estava escondido!</p>
                    </div>
                )}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
