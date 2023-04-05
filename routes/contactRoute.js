import {contactUs,consultation}from '../controllers/contactUsController'
import  express  from 'express'
const router=express.Router()

router.post('/contact',contactUs)
router.post('/consultation',consultation)

export default router
