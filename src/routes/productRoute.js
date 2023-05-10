import express from 'express'
const  product=express()
import {registerProduct,allProduct,buyProduct}from '../controllers/productController'
import doctorAuthenticated from '../middlewares/doctorAuthorization'
import isAuthenticated from '../middlewares/Authorization'




product.post('/product',doctorAuthenticated,registerProduct)
product.get('/products',allProduct)
product.post('/buy',isAuthenticated, buyProduct)

module.exports={product}