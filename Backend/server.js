import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import itemRouter from './routes/itemRoute.js'
import orderRouter from './routes/orderRoute.js'
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import reviewRouter from "./routes/reviewRoute.js"



//app config
const app = express()
const port = process.env.PORT || 4000;
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};
//middleware
app.use(express.json())
app.use(cors(corsOptions))

// DB Connection
connectDB();

// api endpoint
app.use("/user",userRouter)
app.use("/product",itemRouter)
app.use("/cart",cartRouter)
app.use("/images",express.static('uploads'))
app.use("/order",orderRouter)
app.use("/review",reviewRouter)




//mongodb+srv://rs3501194:F8RQqBZnQvwwqICr@cluster0.2ezynrf.mongodb.net/?

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
