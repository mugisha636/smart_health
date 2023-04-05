import { log } from 'handlebars'
import {contact,medical_consultation,doctors} from '../models'

const contactUs=async(req,res)=>{
    const{ name,email,phone,message}=req.body
    try{
        
            const contacting= await contact.create({name,email,phone,message})
            return res.json(contacting)
        
        
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
    
}
const consultation=async(req,res)=>{
    const{ category,health_issue,description,medical_advice,doctorId}=req.body
    try{
          const doctor=await doctors.findOne({where:{id:doctorId}})
          
            const medical= await medical_consultation.create({category,health_issue,description,medical_advice,doctorId:doctor.id})
            return res.json(medical)
        
        
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
    
}

module.exports={contactUs,consultation}