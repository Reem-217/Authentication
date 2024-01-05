const express=require('express');
const {viewProfile}=require('../controllers/profileController');
const {viewProfileValidator}=require('../utils/validators/profileValidator');
const router=express.Router();

router.get('/viewProfile/:id',viewProfileValidator,viewProfile);

module.exports=router;