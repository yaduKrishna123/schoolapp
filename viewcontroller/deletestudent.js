const data=require('../model/studentschema')

    exports.deletestudent= async (req,res)=>{
        
    
        try{
            const id = req.params.id
            console.log(id);
            
        const deleteitem=await data.findOneAndDelete({userid:id})
        if(deleteitem){
            const alldata=await data.find({})
            res.status(200).json(alldata)
    
        }
        else{
            res.status(401).json('student not found')
        }
    
        }
        catch(error){
            res.status(401).json(error)
        }
    }
