const NotesModel = require("../models/notes.model");

const createNotesController  = async (req,res)=>{
    try {
        let {title,description}= req.body

        let newNote =await NotesModel.create({
            title,description
        })

        return res.status(201).json({
            message:"Note created Successfully",
            data:newNote
        })

    } catch (error) {
        console.log("error in creation ",error);
    }
}

module.exports = createNotesController