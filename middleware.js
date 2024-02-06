const {eventSchema}=require("./schema");


module.exports.validateEvent=(req,res,next)=>{
    let {error}= eventSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg); 
    }else{
        next();
    }
}

