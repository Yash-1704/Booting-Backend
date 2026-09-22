import mongoose from "mongoose"
import config from "../config/config.js"

async function connectDb (){
    await mongoose.connect(config.MONGO_URI)
    console.log("Database Connected");
}

export default connectDb
