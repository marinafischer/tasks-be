const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {getTasks, insertTask} = require('../controllers/taskController');

const router = express.Router();


router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, insertTask);


module.exports = router;