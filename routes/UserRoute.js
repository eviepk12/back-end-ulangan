import express from 'express'
import {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/Users.js'

const router = express.Router()

router.get('/user', getUser)
router.get('/user/:uuid', getUserById)
router.post('/user', createUser)
router.patch('/user/uuid', updateUser)
router.delete('/user/uuid', deleteUser)

export default router;
