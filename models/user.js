const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");


const userSchema=new Schema({
    phone:{
        type:String,
        required:true
    },
    registeredEvent:[
        {
            type:Schema.Types.ObjectId,
            ref:"Event"
        }
    ]
})

userSchema.plugin(passportLocalMongoose);
const User=mongoose.model("User",userSchema);
module.exports=User;