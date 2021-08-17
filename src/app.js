console.log("App.js is running")

const APP_IP = document.getElementById("app");

const TITLES = {
    MAIN: "Indecision App",
    SUB: "Put your life in the hands of a computer",
    OPTIONS: []
}

const OnFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        TITLES.OPTIONS.push(option);
        e.target.elements.option.value = '';
    }
    RENDERIZAR();
};

const RemoveAll = () => {
    TITLES.OPTIONS = [];
    RENDERIZAR();
}

const DECIDIDO = () => {
    const VALOR_ALEATORIO = Math.floor(Math.random() * TITLES.OPTIONS.length);
    const OPCAO_SELECIONADA = TITLES.OPTIONS[VALOR_ALEATORIO];
    alert(OPCAO_SELECIONADA);
};

const RENDERIZAR = () => {
    const TEMPLATE = (
        <div>
            <h1>{TITLES.MAIN}</h1> 
            <p>{TITLES.SUB && TITLES.SUB}</p>
            <p>{TITLES.OPTIONS.length > 0 ? "Here are your options" : "No options available"}</p>
            <button disabled={TITLES.OPTIONS.length === 0} onClick={DECIDIDO}>What Should I Do?</button>
            <button onClick={RemoveAll}>Remove All</button>
            <ol>
                {TITLES.OPTIONS.map((opcoes) => {
                    return <li key={opcoes}>Opção: {opcoes}</li>
                })}
            </ol>
            <form onSubmit={OnFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(TEMPLATE,APP_IP);
};

RENDERIZAR();