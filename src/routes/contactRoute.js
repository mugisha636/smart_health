import {contactUs,consultation,getAllAdvice,getAllContact}from '../controllers/contactUsController'
import  express  from 'express'
import doctorAuthenticated from '../middlewares/doctorAuthorization'

const router=express.Router()

router.post('/contact',contactUs)
router.post('/advice',doctorAuthenticated,consultation)
router.get('/All', getAllAdvice)
router.get('/Allcontact', getAllContact)



export default router
