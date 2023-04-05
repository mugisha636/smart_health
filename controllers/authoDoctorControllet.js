
  const assignToken =require( '../helpers/assignToken');
  require('dotenv').config();
  import {doctors} from '../models'
  import multer from 'multer'
  import path from 'path'

  const { phoneExist,doctorsExist, createDoctor,createDoctorSession } =require('../service/doctorService');

 const signUp=async(req,res)=>{
      const{firstName,profile_image,lastName,email,telephone,password,specialized_in,availability,from,to}=req.body
     
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
      const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
           cb(null,'images')
        },
        filename:(req,file,cb)=>{
            cb(null, Date.now()+path.extname(file.originalname))
        }
      })
const upload=multer({
    storage:storage,
    limits:{fileSize:'1000000'},
    fileFilter:(req,file,cb)=>{
        const filetypes=/jpeg|jpeg|png|gif/
        const mimeType=filetypes.test(file.mimetype)
        const extName=filetypes.test(path.extname(file.originalname))
        if (mimeType && extName) {
            return cb(null,true)
            
        }
        cb('give proper filesformat to upload')
    }
}).single('profile_image')
      module.exports={signUp,upload}