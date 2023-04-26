const registers = require('../model/studentschema')
const jwt = require('jsonwebtoken')

exports.finduser=async(req,res)=>{
    const {userid,psw}=req.body
    try{
        const data = await registers.findOne({userid,psw})
        if(data){
            const token =jwt.sign({
                loginAcno:data.userid
            },"super")
            res.status(200).json({data:data,token:token})
         
            

        }
        else{
            res.status(401).json('student does not exists')
        }
        
    }
    catch(error){
        res.status(401).json(error)
    }
}