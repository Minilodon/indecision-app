import React from 'react';
import Opcao from './Opcao';

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

export default Opcoes;