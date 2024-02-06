const User=require("../models/user");

module.exports.renderUserSignup=(req,res)=>{
    res.render("home/userSignup.ejs");
}

module.exports.renderUserLogin=(req,res)=>{
    res.render("home/userLogin.ejs");
}

module.exports.signupUser=async (req,res,next)=>{
    let {user,password}=req.body;
    const newUser=new User(user);
    const registerUser= await User.register(newUser,password);
    req.login(registerUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you successfull registerd");
        res.redirect("/");
    })
}

module.exports.loginUser=async(req,res)=>{
    req.flash("success","you are  successfully loggedin");
    res.redirect("/");
}