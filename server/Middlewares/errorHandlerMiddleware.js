
const CustomAPIError=require('../Errors/CustomError')

const errorHandlerMiddleware=(err,req,res,next)=>{
    
    if(err instanceof CustomAPIError)
    {
        console.log(err)
        return res.status(err.statusCode).json({msg:err.message})

    }

    
    return res.status(500).json({msg: err.message});
}

module.exports=errorHandlerMiddleware;