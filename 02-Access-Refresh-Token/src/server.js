import app from "./app/app.js"
import ConnectDB from "./config/db.js";

await ConnectDB()

app.listen(3000,()=>{
    console.log("Server is running at port 3000");

})