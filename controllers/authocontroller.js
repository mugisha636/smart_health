
  const {User,VericationToken}=require("../models")
  const assignToken =require( '../helpers/assignToken');
  const verifyToken =require( '../helpers/verifyToken');
  const nodemailer=require('nodemailer')
  const{v4:uuidv4}=require('uuid')
  require('dotenv').config();
  const jwt=require('jsonwebtoken')

  console.log(process.env.EMAIL);


  const { phoneExist, userExist,createUser } =require('../service/userServices');
  const bcrypt=require( 'bcrypt');



  // signup

  const signUp=async(req,res)=>{
      const{firstName,lastName,email,telephone,password,role}=req.body
      try{ 
          const exist = await userExist(email)
      if(exist){
        return res.json({success: false, statusCode: 409, message: 'email already exists'})
      }
      const puser= await phoneExist(telephone)
      if(puser){
        return res.json({success: false, statusCode: 409, message: 'phone already exist'})
      }
      const newUser = await createUser(req.body)

      if(newUser){
          const userToken = assignToken(newUser)
      
    
          
          
          return res.status(201).json({success: true, statusCode: 201, regToken: userToken, data: newUser})
        }
    
        } catch (error) {
          return res.json({success: false, statusCode: 500, error: error.message, message:'Internal server error'})
        }
        
      }
    

  //   login
    const login = async (req, res) => {
      const {email} = req.body
      try {
        const user = await userExist(email)
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
        
        
        return res.status(200).json({
          loginToken,
      
        }); 
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };

    const getUser = async(req,res)=>{
      try{
          const users=await User.findAll()
              return res.json(users)
          }

          catch(err){
              console.log(err)
              return res.status(500).json({error:err.message})
          }
  }
 
  


  module.exports={signUp,login,getUser}