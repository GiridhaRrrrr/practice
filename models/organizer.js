const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose")

const organizerSchema=new Schema({
    gender:{
        type:String,
        enum:["Male","Female","Others"],
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    code:{
        type:String,
        requried:true
    },
    phone:{
        type:String,
        required:true,
    }
})

organizerSchema.plugin(passportLocalMongoose);
const Organizer=mongoose.model("Organizer",organizerSchema);
module.exports=Organizer;