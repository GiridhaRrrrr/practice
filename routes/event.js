const express=require("express");
const { renderNewEventForm } = require("../controllers/event");
const router=express.Router();


router.get("/newEvent",renderNewEventForm);

module.exports=router;