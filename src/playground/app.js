class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.options
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options : [] }))};
        
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

            } else {this.setState((prevState) => ({ options : prevState.options.concat([OPCAO_NOVA] )}))};
    

    };
    
    handleDeleteOption(OPCAO_PARA_REMOVER) {
        this.setState((prevState) => ({
            options : prevState.options.filter((OPCAO) => {
                return OPCAO_PARA_REMOVER !== OPCAO;
            })
        }))
    }

    componentDidMount() {
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            };
        }
        catch (e) {

        }
    };

    componentDidUpdate(prevState){
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    render() {
        const subtitle = "Put your life in the hands of the computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Opcoes 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <Maisopcoes 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options : []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title : "Indecision"
};

const Action = (props) => {
    return (
        <div>
        <button 
            onClick={props.handlePick} 
            disabled={!props.hasOptions}
        >
        What should I do?
        </button>
        </div>
    );
};




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

        this.setState(() => ( {error : error} ));

        if (!error) {
            e.target.elements.option.value = "";
        }
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
        );
    };
};

const Opcoes = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((element) => (
                    <Opcao 
                        key={element} 
                        MyOption={element}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            <Opcao />
        </div>
    );
};

const Opcao = (props) => {
    return (
        <div>
            {props.MyOption}

            {props.MyOption && <button 
                onClick={() => {
                    props.handleDeleteOption(props.MyOption);
                }}
            >
                remover
            </button>}
            
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));