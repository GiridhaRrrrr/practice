const express=require("express");
const { renderOrganizerLogin, renderOrganizerSignup } = require("../controllers/organizer");
const route=express.Router();


route
    .get("/organizerLogin",renderOrganizerLogin)
    .post("/organizerLogin",)


route.get("/organizerSignup",renderOrganizerSignup);