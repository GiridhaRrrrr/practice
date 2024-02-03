if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
 

const express=require("express");
const app=express();
const mongoose=require("mongoose");



const PORT=8080;
const db_Url=process.env.DB_URL;

async function main() {
    await mongoose.connect(db_Url);
  }
  
  
main()
    .then((res)=>{
        console.log("Connected to database");
    }).catch((err)=>{
        console.log(err);
    });


app.listen(PORT,()=>{
    console.log(`Server is listing on ${PORT}`);
})