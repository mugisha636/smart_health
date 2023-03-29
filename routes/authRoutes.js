const express=require('express')
const router=express.Router()
const usercont=require('../controllers/authocontroller')
import AuthValidation from '../validationSchema/validation';



router.post('/signup',AuthValidation.verifySignup,usercont.signUp)
router.post('/login',usercont.login)
router.get('/users',usercont.getUser)



module.exports=router
