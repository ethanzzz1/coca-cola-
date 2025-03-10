//array de funciones del CRUD

const productsController = {};

import productsModel from "../models/Products.js";

//Select 

productsController.getProducts = async (req, res)=>{
const products = await productsModel.find()
res.json(products)
}

// Insert

productsController.insertProducts = async (req, res) =>{
    const {name, description, price , stock } = req.body
    const newProduct = new productsModel({ name, description, price , stock  })
    await newProduct.save()
        res.json({message:"product saved"})
    
}

//delete
productsController.deleteProduct = async (req, res) =>{
    await products.findByIdAndDelete(req.params.id)
    res.json({message:"product delete"})
}

//update
productsController.updateProducts = async (req, res) =>{
    const {name, description, price , stock} = req.body;
    const updateProducts = await productsModel.findByIdAndUpdate(
        req.params.id, {name, description, price , stock} , {new: true}
    )
    res.json ({message: "product update"})
}

export default productsController;