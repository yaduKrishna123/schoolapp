const mongoose=require('mongoose')
const dataschema=mongoose.Schema({
    message:{
        require:true,
        type:String
    },
    date:{
        require:true,
        
        type:String
       
    }

})

const admindatas=mongoose.model("admindatas",dataschema)
module.exports=admindatas