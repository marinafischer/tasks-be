const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const taskMiddleware = require('../middlewares/taskMiddleware');
const {bodyMiddleware, ownerMiddleware} = require('../middlewares/putTaskMiddleware')
const {getTasks, insertTask, putTask, delTask} = require('../controllers/taskController');

const router = express.Router();


router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, taskMiddleware, insertTask);
router.put('/:id', authMiddleware, bodyMiddleware,ownerMiddleware, putTask);
router.delete('/:id', authMiddleware, ownerMiddleware, delTask);


module.exports = router;