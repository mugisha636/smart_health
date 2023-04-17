import express from 'express'
const pointment=express.Router()
import {createAppointment} from '../controllers/appointmentController'

pointment.post('/appointment',createAppointment)


module.exports={pointment}
