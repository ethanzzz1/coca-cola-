import mongoose from "mongoose";

//guardo en una constante la direccion de mi base de datos
const   URL = "mongodb://localhost:27017/cocacolaDB"

//conectar a la base de datos 
mongoose.connect(URL);

const connection = mongoose.connection;

connection.once("open", () =>{
    console.log("DB is connected");
});

connection.on("disconnected", () =>{
    console.log("DB is disconnected");
});

connection.on("error",(error)=>{
    console.log("Error found" + error)
})