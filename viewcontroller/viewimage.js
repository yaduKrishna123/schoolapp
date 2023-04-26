const teacherdata=require('../model/teacherschema')

exports.imagedata=async (req,res)=>{
    try{
        const data=await teacherdata.find({},'image username')
        if(data){
            res.status(200).json(data)

        }
        else{
            res.status(401).json('data nnot found')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
    
}