import express from 'express';
import { createUser } from '../controllers/userController';
import { getUser } from '../controllers/userController';
import { loginuser } from '../controllers/userController';

const router=express.Router();

router.get('/',getUser);

router.post('/',createUser);

router.post('/login',loginuser);


export default router;
