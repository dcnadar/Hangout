import login from '../controller/auth.js'
import express from 'express'


const router= express.Router()

// router.route('/login').post(login)

// or i can write this like simple way

router.post('/login', login)

export default router;