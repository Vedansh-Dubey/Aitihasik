import express from 'express'
import getQuizes from '../Controller/quizes.js';
import { loginUser,registerUser,currentUser } from '../Controller/auth.js';
const router= express.Router();

router.get('/quiz',getQuizes)
router.post('/login',loginUser)
router.post('/register',registerUser)
router.get('/current',currentUser)

export default router