import{product,doctors,purchase,User} from "../models"

const registerProduct=async(req,res)=>{
    const{productName,productDescription,productImage,productPrice}=req.body
    const doctorId = req.user.id
    try {
        const docteur = await doctors.findOne({ where: { id: doctorId } });
        if (!docteur) {
          return res.status(404).json({ message: 'Doctor not found' });
        }
        const addProduct= await product.create({
            productName,
            productDescription,
            productPrice,
            productImage
        })
        return res.status(201).json(addProduct)

}
catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const allProduct=async(req,res)=>{
    try {
      const products=await product.findAll()
      return res.status(200).json(products)
      
    } catch (error) {
      console.log(error);
      return res.status(500).json(error)
    }
   }


   const buyProduct=async(req,res)=>{
    const{quantity,productId}=req.body
    const userId = req.user.id
    try {
        // Check if user with given ID exists
        const products = await product.findOne({ where: { id: productId } });
        if (!products) {
          return res.status(400).json({ message: 'User not found' });
        }
    const buy = await purchase.create({quantity,productId});
    return res.status(201).json(buy)
   } 
   catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports={registerProduct,allProduct,buyProduct}