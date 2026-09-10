const express = require('express')
const NotesModel = require('./models/notes.model')
const connectDb = require('./config/db')
const createNotesController = require('./controllers/notes.controller')
const notesRoute = require('./routes/notes.routes')

const app = express()
app.use(express.json())

connectDb()

app.get('/',(req,res)=>{
    res.send('ok got it')
})

app.use('/notes', notesRoute)

app.get('/allNotes',async (req,res)=>{
    try {
        const allNotes = await NotesModel.find()
        res.status(200).json({
            message:"All Notes Fetched",
            data:allNotes
        })
    } catch (error) {
        console.log("error in allNotes api",error)
    }
})

module.exports=app
