import {User, UserSession} from '../models';
import bcrypt from 'bcrypt';


  const userExist = async(email)=>{
    const user = await User.findOne({
      where: {email}
    })
    if(user){
      return user
    }
    return false
  }

  const phoneExist= async(telephone)=>{
    const userPhone=await User.findOne({
      where:{telephone}
    })
    if (userPhone){
      return true
    }
    return false
  }

  const createUser = async (userData)=>{
    userData.password = await bcrypt.hash(userData.password, 10)
    const user = await User.create(userData)
    return user;
  }

  
  
 

  
export{userExist, createUser, phoneExist}