import express from 'express';

const router = express.Router();

import { addUser, getUsers } from '../controllers/userController.js';

router.route('/').post(addUser).get(getUsers);

export default router;
