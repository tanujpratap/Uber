const express=require('express');
const { ExpressValidator } = require('express-validator');
const router=express.Router()
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middleware/auth.middleware')
const {body}=require("express-validator")
router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long')
],
userController.registerUser


)


router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long')
],
userController.loginUser


)

router.get('/profile',authMiddleware.authUser, userController.getUserProfile)
router.get('/logout',authMiddleware.authUser, userController.logoutUser)

module.exports=router;