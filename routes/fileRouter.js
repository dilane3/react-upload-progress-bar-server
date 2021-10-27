const express = require('express')
const router = express.Router()

const {uploadFile} = require("../controllers/fileController.js")
const uploader = require("../utils/uploaderFile.js")

// definition of some routes
router.post("/upload", uploader, uploadFile)

router.get("/test", (req, res) => {
    res.send("bonjour le monde")
})

module.exports = router