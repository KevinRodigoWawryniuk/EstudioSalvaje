const multer = require('multer');
const paht = require('path');
const storageUser = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, 'src/image/usuarios');
    },
    filename: function (req, file, cd) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cd(null, uniqueSuffix + paht.extname(file.originalname));
    }
});
const storageProduct = multer.diskStorage({
    destination: function (req, file, cd) {
            cd(null, 'src/image/productos');
    },
    filename: function (req, file, cd) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cd(null, uniqueSuffix + paht.extname(file.originalname));
    }
});
function thisImageIsValid(file) {
    if (!file || !file.mimetype) return false;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    return allowedTypes.includes(file.mimetype);
}

const uploaduser = multer({ storage: storageUser });
const uploadproduct = multer({ storage: storageProduct });
module.exports = { uploaduser, uploadproduct, thisImageIsValid }; 