import { error } from "console";
import productModel from '../models/productModel.js'
import fs from 'fs'


//add product item


const addItem = async (req,res) => {

    
    let image_filename = `${req.file.filename}`;

    const item = new productModel({
        name:req.body.name,
        description:req.body.description,
        originalprice:req.body.originalprice,
        offerprice:req.body.offerprice,
        category:req.body.category,
        image:image_filename
    })
    try{
        await item.save();
        res.json({success:true,message:"Item Added"})
    } catch (error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}


// all product item list
const listItem = async(req,res) => {
    try{
        const product = await productModel.find({});
        res.json({success:true,data:product})
    } catch (erroe) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}


//remove products

const removeItem = async (req,res) => {
     try {
        const item = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${item.image}`,()=> {})

        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"item Removed"})
     } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
     }
}

export {addItem,listItem,removeItem}