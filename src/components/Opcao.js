import React from 'react';

const Opcao = (props) => (
        <div>
            {props.MyOption && 
                <div className="option">
                <p className="option__text">{props.count}. {props.MyOption}</p>
                <button 
                onClick={() => {
                    props.handleDeleteOption(props.MyOption);
                }}
                className="button button__link"
            >
                Remover
            </button>
            </div>}
            
        </div>
    );


export default Opcao;