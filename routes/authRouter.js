const express=require('express');
const {Signup,Login}=require('../controllers/authController');
const {signupValidator,loginValidator}=require('../utils/validators/authValidator');

const router=express.Router();

router.post('/signup',signupValidator,Signup);
router.post('/login',loginValidator,Login);

module.exports=router;