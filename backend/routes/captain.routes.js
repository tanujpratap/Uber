const express=require('express')
const router=express.Router()
const{body}=require('express-validator')
const captainController=require('../controllers/captain.controller')

router.post('/register',[
     body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long'),
      body('vehicle.color').isLength({min:3}).withMessage('Color must be at leat 3 characters long'),
      body('vehicle.plate').isLength({min:3}).withMessage('plate must be at leat 3 characters long'),
      body('vehicle.vehicleType').isIn(['car','auto','bike']).withMessage('invalid vehicle type'),
      body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at leat 1 ')



],captainController.registerCaptain)

router.post('/login',[ body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long')

],captainController.loginCaptain)

module.exports=router;