import express from 'express'
import getQuizes from '../Controller/quizes.js';
const router= express.Router();

router.get('/quiz',getQuizes)

export default router