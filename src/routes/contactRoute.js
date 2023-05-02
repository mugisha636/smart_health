import {contactUs,consultation,getAllAdvice}from '../controllers/contactUsController'
import  express  from 'express'
import doctorAuthenticated from '../middlewares/doctorAuthorization'

const router=express.Router()

router.post('/contact',contactUs)
router.post('/advice',doctorAuthenticated,consultation)
router.get('/All', getAllAdvice)


export default router
