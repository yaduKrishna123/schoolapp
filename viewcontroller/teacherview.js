const teacherdata=require('../model/teacherschema')


exports.viewstaff=async (req,res)=>{
    try{

        const data = await teacherdata.find({})

        if(data){
            res.status(200).json(data)

        }
        else{
            res.status(401).json('data does not exists')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}