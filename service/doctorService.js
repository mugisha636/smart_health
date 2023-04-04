import {doctors,UserSession} from '../models';
import bcrypt from 'bcrypt';


  const doctorsExist = async(email)=>{
    const user = await doctors.findOne({
      where: {email}
    })
    if(user){
      return user
    }
    return false
  }

  const phoneExist= async(telephone)=>{
    const userPhone=await doctors.findOne({
      where:{telephone}
    })
    if (userPhone){
      return true
    }
    return false
  }

  const createDoctor = async (userData)=>{
    userData.password = await bcrypt.hash(userData.password, 10)
    const user = await doctors.create(userData)
    return user;
  }

  const createDoctorSession = async({ userId, token, deviceType, loginIp, lastActivity })=> {
    const userSession = await UserSession.create({
      userId,
      token,
      loginIp,
      deviceType,
      lastActivity,
    });
    return userSession;
  }
  const deleteSession = async(sessionId, userId, token)=> {
    const searchQuery = sessionId ? { id: sessionId } : { userId, token };

    const userSession = UserSession.destroy({ where: searchQuery });
    return userSession;
  }

  const verifyUserAccount = async (email) => {
    try {
      const user = await doctors.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      if (user.verified) {
        throw new Error('User already verified');
      }
      user.verified = true;
      await user.save();
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const getUserSessions = async(token) =>{
    const sessions = await UserSession.findAll({
      where:{
        token
      }
    })
    return sessions
  }
 

  
export{doctorsExist, createDoctor, phoneExist,verifyUserAccount,createDoctorSession,deleteSession,getUserSessions}