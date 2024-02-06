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

module.exports.isLoggedIn=async (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error","you must login/signup before do anything");
        return req.redirect("/user/userLogin");
    }else{
        next();
    }
}

