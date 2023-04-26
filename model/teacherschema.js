const mongoose = require('mongoose')
const teacherschema = mongoose.Schema({
    userid:{
        type:Number,
        required:true,
        unique:true
    },
    username:{
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
   
     address:{
        type:String,
        required:true

     },  
  
    
   
     phone:{
        type:Number,
        required:true
     },
     image:{
        type:String,
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
     
   
 })
 const teachers = mongoose.model("teachers",teacherschema)
 module.exports=teachers