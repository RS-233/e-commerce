

import reviewModel from "../models/reviewesModel.js";

const addReview = async (req,res) => {


  const review = new reviewModel({
      name:req.body.name,
      rating:req.body.rating,
      comment:req.body.comment
  })
  try{
      await review.save();
      res.json({success:true,message:"Review Added Successfully"})
  } catch (error){
      console.log(error)
      res.json({success:false,message:"something wen wrong"})
  }
}

const reviewList = async(req,res) => {
    try{
        const review = await reviewModel.find({});
        res.json({success:true,data:review})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export {addReview,reviewList}