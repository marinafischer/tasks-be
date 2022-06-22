const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {getTasks} = require('../controllers/taskController');

const router = express.Router();


router.get('/', authMiddleware, getTasks);


module.exports = router;