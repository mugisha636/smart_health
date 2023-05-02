import express from 'express'
const pointment=express.Router()
import isAuthenticated from '../middlewares/Authorization'
import doctorAuthenticated from '../middlewares/doctorAuthorization'


import {createAppointment,scheduleavailability,allAvailability,allAppointment} from '../controllers/appointmentController'

pointment.post('/doctorAvailability',doctorAuthenticated,scheduleavailability)
pointment.post('/appointment',isAuthenticated,createAppointment)
pointment.get('/AvailabilityList',allAvailability)
pointment.get('/appointmentList',allAppointment)
 




module.exports={pointment}
