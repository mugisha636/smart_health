import { User,  } from "../models";
import verifyToken from "../helpers/verifyToken";
import { getUserSessions } from "../service/userServices";

const checkVerify = async (req, res, next) => {
    const {email} = req.body
    const user = await User.findOne({
        where: {email}
        
      })
      if(!user) return res.status(401).json({message:'user not found'})
      if(!user.isVerified) return res.status(401).json({message:'user not verified'})

      return next()
};

export default checkVerify;
