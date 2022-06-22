const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const taskMiddleware = require('../middlewares/taskMiddleware');
const {getTasks, insertTask, putTask} = require('../controllers/taskController');
const {bodyMiddleware, ownerMiddleware} = require('../middlewares/putTaskMiddleware')

const router = express.Router();


router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, taskMiddleware, insertTask);
router.put('/:id', authMiddleware, bodyMiddleware,ownerMiddleware, putTask)


module.exports = router;