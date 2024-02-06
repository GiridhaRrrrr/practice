const Organizer = require("../models/organizer");

module.exports.renderOrganizerSignup=(req,res)=>{
    res.render("home/organizerSignup.ejs");
}

module.exports.renderOrganizerLogin=(req,res)=>{
    res.render("home/organizerLogin.ejs");
}

module.exports.organizerSignup=async (req,res,next)=>{
    let {organizer,password}=req.body;
    const newOrganizer=new Organizer(organizer);
    const registerOrganizer=await Organizer.register(newOrganizer,password);
    req.login(registerOrganizer,(err)=>{
        if(err){
            next(err);
        }
        req.flash("success","you are Signup successfulle");
        res.redirect("/");
    })
}