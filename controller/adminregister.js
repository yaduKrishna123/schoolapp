const adminregister = require('../model/adminschema')
exports.addadmin=async(req,res)=>{
    const {userid,username,psw}=req.body
    try{
        const data=await adminregister.findOne({userid})
        if(data){
            res.status(401).json('user already exists')
        }
        else{
            const newdata=new adminregister({
                userid,username,psw
            })
            await newdata.save()
            res.status(200).json('admin created successfully')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}