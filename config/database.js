const mongoose=require('mongoose');

exports.connectDB=()=>{
    mongoose.connect(process.env.URL).then((conn)=>{
        console.log(`Database connected ${conn.connection.host}`)
    })
}