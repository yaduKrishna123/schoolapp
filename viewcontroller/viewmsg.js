const viewdata=require('../model/dataschema')


exports.viewmessage=async (req,res)=>{
    try{
        const data=await viewdata.find({})
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(401).json('No new notifications')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}