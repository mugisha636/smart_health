
  const assignToken =require( '../helpers/assignToken');
  const verifyToken =require( '../helpers/verifyToken');
  require('dotenv').config();
  const { phoneExist,doctorsExist, createDoctor,createDoctorSession } =require('../service/doctorService');
  const bcrypt=require( 'bcrypt');

 const signUp=async(req,res)=>{
      const{firstName,lastName,email,telephone,password,specialized_in,availability,from,to}=req.body
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

      module.exports={signUp}