class FileController {
    // definition of statics methods
    static uploadFile (req, res) {
        res.status(201).json({message: "ok"})
    }
}

module.exports = FileController