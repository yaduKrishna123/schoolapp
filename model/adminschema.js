const mongoose= require('mongoose')

const adminregister=mongoose.Schema({
    userid:{
        type:Number,
        unique:true,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    psw:{
        type:String,
        required:true
    }
})

const registeradmin=mongoose.model("admins",adminregister)
module.exports=registeradmin