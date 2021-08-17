let STATUS = 0;
const APP_IP = document.getElementById("app");

const MOSTRAR = () => {
    STATUS = 1;
    RENDERIZAR_CONDICIONAL();
};

const ESCONDER = () => {
    STATUS = 0;
    RENDERIZAR_CONDICIONAL();
};

let PROGRAMA;

const RENDERIZAR_CONDICIONAL = () => {
    if (STATUS === 0) {
        PROGRAMA = 
        <div>
        <h1>Visibility App</h1>
        <button onClick={MOSTRAR}>Show details</button>
        </div>
    }
    else {
        PROGRAMA = 
        <div>
        <h1>Visibility App</h1>
        <button onClick={ESCONDER}>Hide details</button>
        <p>Eu estava escondido!</p>
        </div>
    }
    ReactDOM.render(PROGRAMA,APP_IP);
}

RENDERIZAR_CONDICIONAL();