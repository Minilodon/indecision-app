import React from 'react';
import AddOption from './AddOptions';
import Header from './Header';
import Action from './Action';
import Opcoes from './Opcoes';
import OptionModal from './OptionModal';



export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            options : props.options,
            selectedOption : props.selectedOption
        }
    };
    handleDeleteOptions() {
        this.setState(() => ({ options : [] }))};
        
    handlePick() {
        const VALOR_ALEATORIO = Math.floor(Math.random() * this.state.options.length);
        const VALOR_SELECIONADO = this.state.options[VALOR_ALEATORIO];
        this.setState(() => ({selectedOption : VALOR_SELECIONADO}));
    };
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
    };

    handleClose() {
        this.setState(() => ({selectedOption : undefined}));
    };

    componentDidMount() {
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            
            this.setState(() => ({ options: options }));
            
        }
        catch (e) {

        }
    };

    componentDidUpdate(_,prevState){

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
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClose={this.handleClose}
                />
            </div>
        )
    };
};

IndecisionApp.defaultProps = {
    options : [],
    selectedOption:undefined
};
