import {contactUs,consultation,getAllAdvice}from '../controllers/contactUsController'
import  express  from 'express'
const router=express.Router()

router.post('/contact',contactUs)
router.post('/advice',consultation)
router.get('/All', getAllAdvice)


export default router
