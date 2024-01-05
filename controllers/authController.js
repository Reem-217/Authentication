const Profile=require('../models/profileModel');
const asyncHandler=require('express-async-handler');
const ApiError=require('../utils/apiError');
const bcrypt=require('bcryptjs');
const createToken=require('../utils/createToken');

exports.Signup=asyncHandler(async(req,res,next)=>{
    const user=await Profile.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordConfirm:req.body.passwordConfirm,
        phone:req.body.phone
    });

    const token=createToken(user._id);
    res.status(200).json({data:user,token});
});

exports.Login=asyncHandler(async(req,res,next)=>{
    const user=await Profile.findOne({email:req.body.email});
    if(!user|| !(await bcrypt.compare(req.body.password,user.password)))
    return next(new ApiError(`Incorrect email or password`));

    const token=createToken(user._id);
    delete user._doc.password;

    res.status(200).json({data:user,token});
})