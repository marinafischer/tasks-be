const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const taskMiddleware = require('../middlewares/taskMiddleware');
const {getTasks, insertTask} = require('../controllers/taskController');

const router = express.Router();


router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, taskMiddleware, insertTask);


module.exports = router;