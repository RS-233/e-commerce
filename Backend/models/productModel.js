import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    originalprice: {type:Number,required:true},
    
    offerprice: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
},{
    timestamps: true,  
  })

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel;