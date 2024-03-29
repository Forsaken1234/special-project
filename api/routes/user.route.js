import express from 'express';
import { deleteUser, test, updateUser, getUserTask } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id',verifyToken, deleteUser);
router.get('/tasks/:id', verifyToken, getUserTask)

export default router;