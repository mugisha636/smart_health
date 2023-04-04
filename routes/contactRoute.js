import {contactUs}from '../controllers/contactUsController'
import  express  from 'express'
const router=express.Router()

router.post('/contact',contactUs)

export default router
