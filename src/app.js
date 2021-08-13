console.log("App.js is running")

const TITLES = {
    MAIN: "Grandão e sem medo",
    SUB: "Vem tranquilo",
    OPTIONS: ["Um", "Dois"]
}

const TEMPLATE = (
    <div>
        <h1>{TITLES.MAIN}</h1> 
        <p>{TITLES.SUB && TITLES.SUB}</p>
        <p>{TITLES.OPTIONS.length > 0 ? "Here are your options" : "No options available"}</p>
        <ol>
            <li>Item um</li>
            <li>Item dois</li>
        </ol>
    </div>
);

function GET_LOCATION(LOCATION) {
    if(LOCATION) {
        return <p>Location: {USER.LOCATION}</p>
    }
}
const USER = {
    NAME: "Pedro Soares",
    AGE: 22,
    LOCATION: "Pituba"
}



const MODELO = (
    <div>
        <h1>{USER.NAME ? USER.NAME : "Desconhecido"}</h1>
        {USER.AGE >= 18 && <p>Age: {USER.AGE}</p>}
        {GET_LOCATION(USER.LOCATION)}
    </div>
);

const APP_IP = document.getElementById("app");
ReactDOM.render(TEMPLATE,APP_IP);