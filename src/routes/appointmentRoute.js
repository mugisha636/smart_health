import express from 'express'
const pointment=express.Router()
import {createAppointment,scheduleavailability,allAvailability} from '../controllers/appointmentController'

pointment.post('/doctorAvailability',scheduleavailability)
pointment.post('/appointment',createAppointment)
pointment.get('/AvailabilityList',allAvailability)




module.exports={pointment}
