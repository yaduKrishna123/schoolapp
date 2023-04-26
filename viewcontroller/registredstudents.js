const student=require('../model/studentschema')

exports.viewregisterstudents=async (req,res)=>{
    try{
        const data = await student.find({})
        if(data){
            res.status(200).json(data)

        }
        else{
            res.status(401).json('data not found in database')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}