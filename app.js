if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
 

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate")



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



app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("home/home.ejs");
})
    
app.listen(PORT,()=>{
    console.log(`Server is listing on ${PORT}`);
})