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

  const createUserSession = async({ userId, token, deviceType, loginIp, lastActivity })=> {
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

  const verifyUserAccount = async(email)=>{
    const user = await User.findOne({where: {email}})
    if(user.isVerified){
      return false
    }
    const data = await User.update(
      {
        isVerified: true,
      },
      {
        where: { email },
      }
    );
    return true;
  }
  const getUserSessions = async(token) =>{
    const sessions = await UserSession.findAll({
      where:{
        token
      }
    })
    return sessions
  }
 

  
export{userExist, createUser, phoneExist,verifyUserAccount,createUserSession,deleteSession,getUserSessions}