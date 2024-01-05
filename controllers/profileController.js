const Profile=require('../models/profileModel');
const asyncHandler=require('express-async-handler');
const ApiError=require('../utils/apiError');


exports.viewProfile=asyncHandler(async(req,res,next)=>{
    const profile=await Profile.findById(req.params.id).select({name:1,email:1,_id:0});
    if(!profile)
    return next(new ApiError(`No user with this id :${id}`,404));

    res.status(200).json({data:profile});
});
