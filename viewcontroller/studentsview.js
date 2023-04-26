const alldata=require('../model/studentschema')

exports.viewstudent=async (req,res)=>{
    const id=req.params.userid
    try{
        const viewid=await alldata.findOne({id})
        if(viewid){
            const viewdata=await alldata.find({})
            
                res.status(200).json(viewdata)
            
         

        }
      

    }
    catch(error){
        res.status(401).json(error)
    }
}