let count = 0;

const CLICADO = () => {
    count++;
    RENDER();
};

const minusOne = () => {
    count--;
    RENDER();
};

const reset = () => {
    count = 0;
    RENDER();
};

const APP_IP = document.getElementById("app");

const RENDER = () => {

    const TEMPLATE2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={CLICADO} >+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )

    ReactDOM.render(TEMPLATE2,APP_IP);
}

RENDER();