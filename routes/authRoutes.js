const express=require('express')
const router=express.Router()
const usercont=require('../controllers/authocontroller')
import AuthValidation from '../validationSchema/validation';
const passwd=require('../controllers/forgotPassword')



router.post('/signup',AuthValidation.verifySignup,usercont.signUp)
router.post('/login',usercont.login)
router.get('/users',usercont.getUser)
import isAuthenticated from '../middlewares/Authorization';

router.get('/verify/:token',usercont.verifyUser)

router.post('/forgot-password',passwd.requestResetPassword)
router.post('/reset-password/:token', passwd.resetPassword)
router.get('/reset-password/:token', passwd.getResetPassword)




module.exports=router
