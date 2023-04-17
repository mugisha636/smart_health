import {appointment,User,doctors} from'../models'
const createAppointment=async(req,res)=>{
    const{ userId,description,date,doctorId}=req.body
    try{
          const user=await User.findOne({where:{id:userId}})
          if (!user) {
            res.status(500).json({message:'user not exist'})
          }
          const doctor=await doctors.findOne({where:{id:doctorId}})
          if (!doctor) {
            res.status(500).json({message:'doctor not exist'})
          }
          if (description && userId){
            res.status(500).json({message:'check to the list of appointment you have requested'})
          }
            const appoint= await appointment.create({
                userId,description,date,doctorId
            })


            return res.json(appoint)
        
        
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
    
}

module.exports={createAppointment}