require("dotenv").config()
const express = require('express')
const cors = require("cors")

// routers
const fileRouter = require("./routes/fileRouter.js")

// declaration of some variables
const PORT = process.env.PORT

const app = express()

// set engine
app.set("view engine", "ejs")

// using middelwares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("upload/file"))

// root
app.get("/", (req, res) => {
    res.render("index")
})

// use router
app.use("/file", fileRouter)

// open the server
app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`))