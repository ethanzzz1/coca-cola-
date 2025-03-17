/*  

Campos:
comment 
rating
idCliente

*/

import {Schema, model} from "mongoose";

const reviewsSchema = new Schema (
    {
        comment:{
            type: String,
            require: true
        },
        rating:{
            type:Number,
            require: true,
            min: 0,
            max: 5
        },
        idCliente:{
            type: Schema.Types.ObjectId,
            ref: "Products",
            require: true

        }
    },{
        timestamps: true,
        strict: false
    }
)
export default model("Reviews", reviewsSchema);