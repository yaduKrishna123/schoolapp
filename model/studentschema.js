const mongoose = require('mongoose')
 const studentschema = mongoose.Schema({
    userid:{
        type:Number,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
     classname:{
        type:Number,
        required:true

     },
     address:{
        type:String,
        required:true

     },  
     date:{
        type:String,
        required:true

     },
     psw:{
        type:String,
        required:true

     },
     cpsw:{
        type:String,
        required:true

     },
     gname:{
        type:String,
        required:true
     },
     phone:{
        type:Number,
        required:true
     },
     value:{
        type:String,
        required:true
     },
     course:{
        type:String,
        required:true
     },
     result:{
      type:Number

     }
   
 })
 const registers = mongoose.model("registers",studentschema)

 module.exports=registers
 
