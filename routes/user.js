const express=require("express");
const router=express.Router()
const {renderUserSignup, renderUserLogin, signupUser, loginUser}=require("../controllers/user");
const  WrapAsync=require("../util/wrapAsync");
const wrapAsync = require("../util/wrapAsync");
const passport = require("passport");

router
    .get("/userSignup",renderUserSignup)
    .post("/userSignup",WrapAsync(signupUser))



router
    .get("/userLogin",renderUserLogin)
    .post("/userLogin",passport.authenticate('local',{failureFlash:true,failureRedirect:"/user/userLogin"}),wrapAsync(loginUser))