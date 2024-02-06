const express=require("express");
const { renderOrganizerLogin, renderOrganizerSignup } = require("../controllers/organizer");
const route=express.Router();


route.get("/organizerLogin",renderOrganizerLogin);


route.get("/organizerSignup",renderOrganizerSignup);