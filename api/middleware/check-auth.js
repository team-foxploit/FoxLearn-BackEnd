const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded);
        next();        
    } catch(err) {
        // err
        return res.status(401).json({
            message: "Auth failed.",
            error: err
        });
    }
}