
  const assignToken =require( '../helpers/assignToken');
  require('dotenv').config();
  import {doctors} from '../models'
  import multer from 'multer'
  import path from 'path'

  const { phoneExist,doctorsExist, createDoctor,createDoctorSession } =require('../service/doctorService');

 const signUp=async(req,res)=>{
      const{firstName,lastName,email,telephone,password,specialized_in,availability,image}=req.body
     
      try{ 
          const user = await doctorsExist(email)
      if(user){
        return res.json({success: false, statusCode: 409, message: 'email already exists'})
      }
      const puser= await phoneExist(telephone)
      if(puser){
        return res.json({success: false, statusCode: 409, message: 'phone already exist'})
      }
      const newUser = await createDoctor(req.body)

      if(newUser){
          const loginToken = assignToken(user)
    const ssn = await createDoctorSession({
      userId: newUser.id,
      token:loginToken,
      deviceType: req.headers["user-agent"],
      loginIp: req.ip,
      lastActivity: new Date().toJSON(),
    });
    
          return res.status(200).json({
            loginToken,
            ssn
          });
          
        }
    
        } catch (error) {
          return res.json({success: false, statusCode: 500, error: error.message, message:'Internal server error'})
        }
        
      }

 const allDoctor=async(req,res)=>{
  try {
    const docteur=await doctors.findAll()
    return res.status(200).json(docteur)
    
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
 }     
      module.exports={signUp,allDoctor}