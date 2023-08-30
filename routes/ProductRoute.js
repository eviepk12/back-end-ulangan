import express from 'express'
import {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/Product.js'

const router = express.Router()

router.get('/product', getProduct)
router.get('/product/:uuid', getProductById)
router.post('/product', createProduct)
router.patch('/product/:uuid', updateProduct)
router.delete('/product/:uuid', deleteProduct)

export default router;
