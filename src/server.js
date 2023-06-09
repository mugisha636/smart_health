import express from'express'
const app=express()
import contactRoute from './routes/contactRoute'
import authRoute from'./routes/authRoutes'
import {ai} from './routes/AIRoutes'
import{pointment} from './routes/appointmentRoute'
import{product} from './routes/productRoute'
import swaggerUI from'swagger-ui-express'
import swaggerDocs from'./documentation'
import cors from 'cors'

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

var bodyParser = require('body-parser')
require('dotenv/config');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.use('/api',authRoute)
app.use('/api',contactRoute)
app.use('/api',ai)
app.use('/api',pointment)
app.use('/api',product)





app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const PORT=process.env.PORT||4000

app.listen(PORT,()=>{
    console.log(`server connected on ${PORT}` );
})