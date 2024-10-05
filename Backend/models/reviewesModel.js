import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name: { type: String },
    rating: { type: Number},
    comment: { type: String}

})

const reviewModel = mongoose.models.review || mongoose.model("review",reviewSchema);

export default reviewModel;