//importar el archivo app.js
import app from "./app.js"
import "./database.js"
import {config} from "./src/config.js";

//creo una funcion que se encarga de ejecuta el servidor 
async function main(){
    app.listen(config.server.port);
    console.log("Server on port " + config.server.port);
}

//ejecutar todo 
main()