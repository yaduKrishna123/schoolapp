const logindata=require('../model/teacherschema')
const jwt=require('jsonwebtoken')

exports.finduser= async (req,res)=>{
    const {userid,psw}=req.body
    try{
        const data= await logindata.findOne({userid,psw})
        if(data){
         const token=jwt.sign({
            loginacno:userid
                
            },"super")
            res.status(200).json({data:data,token:token})
        }
        else{
            res.status(401).json('login failed user not found')
        }

    }
    catch(error){
        res.status(401).json(error)
    }

  

}