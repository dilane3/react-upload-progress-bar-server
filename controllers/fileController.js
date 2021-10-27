class FileController {
    // definition of statics methods
    static uploadFile (req, res) {
        console.log(req.file)
        if (req.file)
            res.status(201).json({message: "ok"})
        else
            res.sendStatus(500)
    }
}

module.exports = FileController