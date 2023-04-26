const jwt=require('jsonwebtoken')

exports.jwtmiddleware=(req,res,next)=>{
    const token = req.headers['verify']
    console.log(token);
    try{
        const data=jwt.verify(token,"super")
       
        console.log(data);
        next()
    }
    catch{
        res.status(401).json('please login')

    }

}