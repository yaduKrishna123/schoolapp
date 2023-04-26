const mongoose = require('mongoose')
DB = process.env.DATABASE


mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log("student database is connected successfully");
}).catch((error)=>{
    console.log(error);
})