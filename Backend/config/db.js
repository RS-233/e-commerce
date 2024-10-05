import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rachitgour567:Snapkart123@snapkart.5pbqe.mongodb.net/Snapkart').then(() => console.log("Database Connected"));
}