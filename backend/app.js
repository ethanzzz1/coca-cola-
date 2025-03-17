//importar todo lo de la libreria express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import reviewsRoutes from "./src/routes/reviews.js";

//creo una constante es igual a la libreria que importe y la ejecuta

const app = express();


app.use(express.json());

//definir ruta
app.use("/api/products", productsRoutes);
app.use("/api/reviews", reviewsRoutes);

//exporto la constante para poder usar express en todos lados 
export default app;

