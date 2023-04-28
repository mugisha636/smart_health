import express from 'express'
const pointment=express.Router()
import {createAppointment,scheduleavailability,allAvailability,allAppointment} from '../controllers/appointmentController'

pointment.post('/doctorAvailability',scheduleavailability)
pointment.post('/appointment',createAppointment)
pointment.get('/AvailabilityList',allAvailability)
pointment.get('/appointmentList',allAppointment)





module.exports={pointment}
