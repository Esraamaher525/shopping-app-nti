const express = require('express')
const router = new express.Router()
const productController = require('../app/controllers/product.controllers')
const auth = require('../app/middleware/auth')
const multer=require('multer')
const upload=multer({dest:'public/images/products'})
router.post('/enter-product',auth,upload.array('products'),productController.enterProduct)


module.exports=router