import express from 'express'
const ai=express.Router()
import{askAi}from '../controllers/AIController'

ai.post('/ai',askAi)

module.exports={ai}