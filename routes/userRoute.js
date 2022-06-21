const express = require('express');
const {create} = require('../controllers/userController');
const {userMiddleware, verifyUser} = require('../middlewares/userMiddleware');

const router = express.Router();


router.post('/', userMiddleware, verifyUser ,create);


module.exports = router;