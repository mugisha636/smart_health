
  const assignToken =require( '../helpers/assignToken');
  const verifyToken =require( '../helpers/verifyToken');

  require('dotenv').config();
  import {doctors} from '../models'
  import multer from 'multer'
  import path from 'path'
  import sendVerificationEmail from '../helpers/sendEmail/doctorVerificationEmail';
  const bcrypt=require( 'bcrypt');
  

  const { phoneExist,doctorsExist, createDoctor,createDoctorSession,verifyDoctorAccount,deleteSession } =require('../service/doctorService');

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
      const newDoctor = await createDoctor(req.body)

      if(newDoctor){
          const loginToken = assignToken(user)
      sendVerificationEmail(loginToken, newDoctor)
          
    
          return res.status(200).json({
            loginToken,
            newDoctor
          });
          
        }
    
        } catch (error) {
          return res.json({success: false, statusCode: 500, error: error.message, message:'Internal server error'})
        }
        
      }
      // verify user
      const verifyDoctor = async(req, res)=> {
        let data = {};
        
        try {
          data = await verifyToken(req.params.token);
        } catch (err) {
          return res.status(400).json(err.message);
        }
        try {
          const verified = await verifyDoctorAccount(data.user.email);
          if(verified){      
            return res.status(200).json({status: 200, message: "User verfied"});
          }
        } catch (error) {
          return res.status(500).json({message: `Ooops! Unable to verify User ${error.message}`});
        }
      }

      // login
      const loginDoc = async (req, res) => {
        const {email} = req.body
        try {
          const user = await doctorsExist(email)
          if (!user) {
            return res.status(404).json({ message: "User Not found." });
          }
          
          const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
          );
          if (!passwordIsValid) {
            return res.status(401).send({
              message: "Invalid Password!",
            });
          }
          const loginToken = assignToken(user)
          const ssn = await createDoctorSession({
            userId: user.id,
            token:loginToken,
            deviceType: req.headers["user-agent"],
            loginIp: req.ip,
            lastActivity: new Date().toJSON(),
          });
          
          return res.status(200).json({
            loginToken,
            ssn
          }); 
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      };

      // logout
    const  doctorSignout = async(req, res)=> {
      try {
        if (!req.user || !req.headers["authorization"]) {
          return res.status(403).json({ message: 'user not logged in' });
        }
    
        const token = req.headers["authorization"].split(" ")[1];
        await deleteSession(null, req.user.id, token);
        return res.status(200).json({ message: 'logged out successfully' });
      } catch (error) {
        return res.status(500).json({ message: 'unable to logout' });
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
      module.exports={signUp,loginDoc,allDoctor,verifyDoctor,doctorSignout}