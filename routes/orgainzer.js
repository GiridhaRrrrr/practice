const express=require("express");
const { renderOrganizerLogin, renderOrganizerSignup } = require("../controllers/organizer");
const router=express.Router();


router
    .get("/organizerLogin",renderOrganizerLogin)
    .post("/organizerLogin",)


router.get("/organizerSignup",renderOrganizerSignup);

module.exports=router;