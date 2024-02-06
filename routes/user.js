const express=require("express");
const router=express.Router()
const userController=require("../controllers/user");
const WrapAsync=require("../util/wrapAsync");

const passport = require("passport");

router
    .route("/userSignup")
    .get(userController.renderUserSignup)
    .post(WrapAsync(userController.signupUser))



router
    .get("/userLogin",userController.renderUserLogin)
    .post("/userLogin",passport.authenticate('local',{failureFlash:true,failureRedirect:"/user/userLogin"}),WrapAsync(userController.loginUser))

module.exports=router;