const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const { connectDB } = require('./config/database');
dotenv.config({path :'config.env'});
const authRoute=require('./routes/authRouter');
const ProfileRoute=require('./routes/profileRouter');
const ApiError=require('./utils/apiError');

const app=express();
const PORT=process.env.PORT;

app.listen(PORT,()=>{
console.log(`App listening on port ${PORT}`);
});
connectDB();

app.use(express.json())
app.use(cors());

app.use('/api/auth',authRoute);
app.use('/api/profiles',ProfileRoute);

app.all('*', (req, res, next) => {
    next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
  });
  


