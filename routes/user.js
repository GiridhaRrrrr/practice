const express=require("express");
const router=express.Router()
const userController=require("../controllers/user");
const WrapAsync=require("../util/wrapAsync");

const passportUser = require("passport");

router
    .route("/userSignup")
    .get(userController.renderUserSignup)
    .post(WrapAsync(userController.signupUser))



router
    .get("/userLogin",userController.renderUserLogin)
    .post("/userLogin",passportUser.authenticate('local',{failureFlash:true,failureRedirect:"/user/userLogin"}),WrapAsync(userController.loginUser))


router
    .get("userLogout",)
module.exports=router;