class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options : [] 
            }
        })
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
            this.setState((prevState) => {
                return {
                    options : prevState.options.concat([OPCAO_NOVA])
                };
            });
        }
    }
    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of the computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Opcoes 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <Maisopcoes 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
            <button 
                onClick={this.props.handlePick} 
                disabled={!this.props.hasOptions}
            >
            What should I do?
            </button>
            </div>
        );
    }
}

class Opcoes extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                {
                    this.props.options.map(element => <Opcao key={element} MyOption={element}/>)
                }
                <Opcao />
            </div>
        )
    }
}

class Maisopcoes extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    };
    handleAddOption(e) {
        e.preventDefault();

        const OPCAO_NOVA = e.target.elements.option.value;
        const error = this.props.handleAddOption(OPCAO_NOVA);

        this.setState(() => {
            return {error : error};
        });
    };

    render() {
        return (
            <div>
                {this.state.error && (
                    <p>{this.state.error}</p>
                )}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
                </form>
            </div>
        )
    }
}

class Opcao extends React.Component {
    render() {
        return (
            <div>
                {this.props.MyOption}
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));