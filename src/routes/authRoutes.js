const express=require('express')
const router=express.Router()
const usercont=require('../controllers/authocontroller')
const doctorcont=require('../controllers/authoDoctorControllet')

import AuthValidation from '../validationSchema/validation';
const passwd=require('../controllers/forgotPassword')
import checkVerify from '../middlewares/checkverify'
import isAuthenticated from '../middlewares/Authorization'



router.post('/signup',AuthValidation.verifySignup,usercont.signUp)
router.post('/doc-signup',AuthValidation.verifySignup, doctorcont.signUp)
router.get('/Nusers',usercont.countUsers)


router.post('/login', checkVerify, usercont.login)
router.post("/signout", isAuthenticated,usercont.signout);

router.get('/users',usercont.getUser)
router.get('/expert',usercont.getAllDoctors)


router.get('/verify/:token',usercont.verifyUser)

router.post('/forgot-password',passwd.requestResetPassword)
router.post('/reset-password/:token', passwd.resetPassword)
router.get('/reset-password/:token', passwd.getResetPassword)




module.exports=router
