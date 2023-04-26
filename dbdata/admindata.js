const { addadmin } = require('../controller/adminregister')
const admindata=require('../model/dataschema')

exports.adddata=async (req,res)=>{
    const {message,date}=req.body
    try{
        const data= await admindata.findOne({message})
        if(data){
            const newdata= await new admindata({
                message,date
            })
           res.status(200).json('message send')
           
        }
        else{
            const adding=await new admindata({
                message,date
            })
            await adding.save()
            res.status(200).json('message send successfully')
            
        }


    }
    catch(error){
        res.status(401).json(error)
    }
}
exports.deleteddata= async (req,res)=>{
    const _id=req.params.id
    try{
        const deleteid=await admindata.deleteOne({_id})
        if(deleteid){
            const alldata=await admindata.find({})
            res.status(200).json(alldata)

        }
        else{
            res.status(401).json('message not found')
        }



    }catch(error){
        res.status(401).json(error)
    }
}