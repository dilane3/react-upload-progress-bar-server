const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/file")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    console.log(file)
    if(
        (file.mimetype).includes('gif')     || 
        (file.mimetype).includes('jpeg')    || 
        (file.mimetype).includes('png')     ||
        (file.mimetype).includes('bmp')     ||
        (file.mimetype).includes('webp')
    ){
        cb(null, true);
    } else{
        cb(null, false);
    }
};

let upload = multer({storage, fileFilter}).single("image")

module.exports = upload