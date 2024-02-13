const express = require('express')
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser, getProfile} = require('../controllers/authController')
const jwt = require('jsonwebtoken')

//middleware
router.use(
    cors(
        {
            credentials:true,
            origin:'http://localhost:5173'
        }
    )
)

const authenticateToken = (req, res, next) => {
    const {token} = req.cookies

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Token is invalid or expired' });
        }
        req.user = decoded;
        next(); 
    });
};

router.get('/', test)

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticateToken, getProfile);

module.exports = router;