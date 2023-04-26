const registers = require('../model/studentschema')

exports.addstudent = async (req,res)=>{
    const {userid,username,classname,address,date,psw,cpsw,gname,phone,value,course}=req.body

    try{
        const data =await registers.findOne({userid})
        if(data){
            res.status(401).json('student already exist')
        }
        else{
            const newdata = new registers({
                userid,username,classname,address,date,psw,cpsw,gname,phone,value,course
            })
            await newdata.save()
            res.status(200).json('registred succesfully')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}




exports.results = async (req, res) => {
    const { userid, result } = req.body;
    try {
      const resultdata = await registers.findOne({ userid });
      if (resultdata) {
        // Update the result field of the student document
        resultdata.result = result;
        await resultdata.save();
        res.status(200).json('Result updated successfully');
      } else {
        res.status(401).json('Please enter your current userid');
      }
    } catch (error) {
      res.status(401).json(error);
    }
  };
