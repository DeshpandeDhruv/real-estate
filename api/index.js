import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongo db");
}).catch((err)=>{
    console.log("error"+err);
})
const app=express();
app.use(express.json());


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });

});
const PORT=5000 ;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







