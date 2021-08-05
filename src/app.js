console.log("App.js is running")

var TEMPLATE = (
    <div>
        <h1>Eu sou um belo de um modelo</h1> 
        <p>Eu sou um texto qualquer</p>
        <ol>
            <li>Item um</li>
            <li>Item dois</li>
        </ol>
    </div>
);
var APP_IP = document.getElementById("app");

var MODELO = (
    <div>
        <h1>Pedro Soares</h1>
        <p>Age: 22</p>
        <p>Location: Salvador</p>
    </div>
);

ReactDOM.render(MODELO,APP_IP);