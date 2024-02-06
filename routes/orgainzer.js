const express=require("express");
const { renderOrganizerLogin, renderOrganizerSignup, organizerLogin } = require("../controllers/organizer");
const passport = require("passport");
const router=express.Router();
const WrapAsync=require("../util/wrapAsync");

router
    .get("/organizerLogin",renderOrganizerLogin)
    .post("/organizerLogin",)


router
    .route("/organizerSignup")
    .get(renderOrganizerSignup)
    .post(passport.authenticate('local',{failureFlash:true,failureRedirect:"/organizer/organizerLogin"}),WrapAsync(organizerLogin));

module.exports=router;