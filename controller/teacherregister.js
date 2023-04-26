const teacher=require('../model/teacherschema')

exports.addteacher= async (req,res)=>{
    const {userid,username,psw,cpsw,address,phone,image,value,course} = req.body
    try{
        const data = await teacher.findOne({userid})
        if(data){
            res.status(401).json('teacher already exists')
        }
        else{
            const newdata=await new teacher({
                userid,username,psw,cpsw,address,phone,image,value,course

            })
            await newdata.save()
            res.status(200).json('teacher added successfully')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.removeteacher=async (req,res)=>{
    const id=req.params.id
    try{
        const deletedata=await teacher.deleteOne({userid:id})
        if(deletedata){
            const alldata=await teacher.find({})
            res.status(200).json(alldata)
            console.log(alldata);

        }
        else{
            res.status(401).json('data not found')
        }

    }
    catch(error){
        res.status(401).json(error)
        console.log(error);
    }
    
}