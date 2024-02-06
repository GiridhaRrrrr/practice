const express=require("express");
const router=express.Router()
const {renderUserSignup, renderUserLogin}=require("../controllers/user");

router.get("/userSignup",renderUserSignup);

router.get("/userLogin",renderUserLogin);