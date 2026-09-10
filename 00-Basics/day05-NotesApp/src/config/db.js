const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/notes-app')
        console.log("MongoDb Connected");
    } catch (error) {
        console.log("Error occured while connecting DB ", error);
    }
}

module.exports = connectDb