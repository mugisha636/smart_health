import {appointment,User,doctors,scheduleAppointment} from'../models'

// doctor schedule appointment

const scheduleavailability = async (req, res) => {
  const { date, time } = req.body;
  const docId = req.user.id
  // Check if docId, date, and time exist
  if (!docId || !date || !time) {
    return res.status(400).json({ message: 'docId, date, and time are required' });
  }
  try {
    const docteur = await doctors.findOne({ where: { id: docId } });
    if (!docteur) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    // Check if the appointment already exists
    const existingAppointment = await scheduleAppointment.findOne({
      where: { docId, date, time },
    });
    if (existingAppointment) {
      return res.status(409).json({ message: 'Appointment already exists' });
    }
    const availability = await scheduleAppointment.create({
      date,
      time,
    });
    return res.status(201).json(availability);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const allAvailability=async(req,res)=>{
  try {
    const schedured=await scheduleAppointment.findAll()
    return res.status(200).json(schedured)
    
  } catch (error) {
    
    return res.status(500).json(error)
  }
 }





// request apointment
const createAppointment = async (req, res) => {
  const {description, date, time,scheduleId } = req.body;
  const userId = req.user.id

  try {
    // Check if user with given ID exists
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    // check if appointment created
    const apoint=await scheduleAppointment.findOne({where:{id:scheduleId}});
    if(!apoint){
      return res.status(400).json({message:'appointment not exist'})
    }

    // Check if description and userId are provided
    if (!description || !userId) {
      return res.status(400).json({ message: 'Please provide description and user ID' });
    }

    // Create new appointment
    const appointments = await appointment.create({description, date, time,scheduleId});

    // Send response with newly created appointment
    return res.json(appointments);
  } catch (error) {
    // Log error and send error response
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
const allAppointment=async(req,res)=>{
  try {
    const availability=await appointment.findAll()
    return res.status(200).json(availability)
    
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
 }


module.exports={createAppointment,scheduleavailability,allAvailability,allAppointment}