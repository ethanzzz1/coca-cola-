//importar todo lo de la libreria express
import express from "express";
import productsRoutes from "./src/routes/products.js";

//creo una constante es igual a la libreria que importe y la ejecuta

const app = express();


app.use(express.json());

//definir ruta
app.use("/api/products", productsRoutes);

//exporto la constante para poder usar express en todos lados 
export default app;

