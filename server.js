import express from'express'
const app=express()
import authRoute from'./routes/authRoutes'
import swaggerUI from'swagger-ui-express'
import swaggerDocs from'./documentation'

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var bodyParser = require('body-parser')
require('dotenv/config');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')



app.use('/api',authRoute)


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));







const PORT=process.env.PORT||4000




app.listen(PORT,()=>{
    console.log(`server connected on ${PORT}` );
})