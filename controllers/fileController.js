class FileController {
    // definition of statics methods
    static uploadFile (req, res) {
        console.log(req.body)
        if (req.file)
            res.status(201).json({...req.file, id: req.body.id})
        else
            res.sendStatus(500)
    }
}

module.exports = FileController