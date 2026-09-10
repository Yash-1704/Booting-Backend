const createNotesController = require("../controllers/notes.controller")
const express = require('express')

const router = express.Router()

router.post('/create',createNotesController)

module.exports = router