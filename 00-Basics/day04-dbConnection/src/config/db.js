import dotenv from 'dotenv'

dotenv.config()


const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI,
        );
        console.log("MongoDb Connected");
    } catch (error) {
        console.log("error while connecting db", error);
    }
};

module.exports = connectDb