const express=require("express");
const { renderNewEventForm } = require("../controllers/event");
const route=express.Router();


route.get("/newEvent",renderNewEventForm);