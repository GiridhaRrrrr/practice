const express=require("express");
const { renderNewEventForm, renderAllEvents } = require("../controllers/event");
const router=express.Router();


router.get("/newEvent",renderNewEventForm);

router.get("/allEvents",renderAllEvents);

module.exports=router;