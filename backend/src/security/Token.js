const verifyToken = (req, res, next) => {
    const bearer = req.headers['authorization'];
    if (typeof bearer !== 'undefined') {
        const token = bearer.split(" ")[1];
        req.token = token;
        next();
    } else {
        return res.status(403).send({ mensaje: "Es necesario un token para utilizar el recurso" });
    }
}
module.exports = verifyToken;