//importar el archivo app.js
import app from "./app.js"
import "./database.js"

//creo una funcion que se encarga de ejecuta el servidor 
async function main(){
    const port = 4000
    app.listen(port);

    console.log("Server is running ");
}

//ejecutar todo 
main()