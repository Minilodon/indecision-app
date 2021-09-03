import React from 'react';

const Opcao = (props) => (
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


export default Opcao;