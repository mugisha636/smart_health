import {contact} from '../models'

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

module.exports={contactUs}