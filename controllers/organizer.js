const User=require("../models/user");



module.exports.renderOrganizerSignup=(req,res)=>{
    res.render("home/organizerSignup.ejs");
}

module.exports.renderOrganizerLogin=(req,res)=>{
    res.render("home/organizerLogin.ejs");
}

module.exports.organizerSignup=async (req,res,next)=>{
    let {user,password}=req.body;
    const newUser=new User(user);
    const registerUser=User.register(newUser,password);

    req.login(registerUser,(err)=>{
        if(err){
            next(err);
        }
        req.flash("Success","you are successfully signed up as organizer");
        res.redirect("/");
    });
}

module.exports.organizerLogin=async (req,res)=>{
    req.flash("success","you successfully loged in as organizer");
    res.redirect("/");
}