import React from 'react';
import Opcao from './Opcao';

const Opcoes = (props) => (
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">Suas opções</h3>
            <button 
                onClick={props.handleDeleteOptions}
                className="button__link"
            >
                Remover tudo
            </button>
            </div>
            {props.options.length === 0 && <p className="widget-message">Adicione uma opção para começar!</p>}
            {
                props.options.map((element, index) => (
                    <Opcao 
                        key={element} 
                        MyOption={element}
                        count={index + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            <Opcao />
        </div>
    );

export default Opcoes;