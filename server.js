import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
connectDB();

const app = express()
app.use(express.json())
app.use("/api/auth", userRoutes)

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("server is running");
    
})