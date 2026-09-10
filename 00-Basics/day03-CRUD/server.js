let express = require('express')
const { log } = require('node:console')

let app = express()
//middleware for accepting json data
app.use(express.json())

let port = 3000

let users = []

//Create - Post
app.post('/create',(req,res)=>{
    let body = req.body

    users.push(body)

    res.send("Users Saved successfully ")
})

// Read - Get
app.get('/',(req,res)=>{
    res.send(users)
})

app.put('/update/:id',(req,res)=>{

    let {id} = req.params
    let {name} = req.body

    let updateUsers = users.map((val)=> id === val.id ? {...val, name} : val)

    res.send(updateUsers)
})

// Delete - delete
app.delete('/delete/:id',(req,res)=>{
    let {id} = req.params
    let userData = users.filter((val)=> val.id !== id)
    users = userData
    res.send(users)
})

app.listen(port,()=>{
    log(`server is runnig at port ${port}`)
})