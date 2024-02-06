const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const registrationSchema=new Schema({
    phone:{
        type:String,
        required:true
    },
    event:{
        type:Schema.Types.ObjectId,
        ref:"event",
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    registrationTime:{
        type:Date,
        default:Date.now
    }
})

const Registration=mongoose.model("Registration",registrationSchema);
module.exports=Registration;