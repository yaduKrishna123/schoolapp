const admindata=require('../model/adminschema')
const jwt=require('jsonwebtoken')

exports.findadmin=async (req,res)=>{
    const {userid,psw}=req.body
    try{
        const data = await admindata.findOne({userid,psw})
    if(data){
        const token=jwt.sign({
            loginacno:data.userid
        },"super")
        res.status(200).json({data:data,token:token})
    }
    else{
        res.status(401).json('data doesnot exist in the database')
    }

    }
    catch(error){
        res.satatus(401).json(error)
    }
    
}