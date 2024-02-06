const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose")

const organizerSchema=new Schema({
    phone:{
        type:String,
        required:true,
    }
})

organizerSchema.plugin(passportLocalMongoose);
const Organizer=mongoose.model("Organizer",organizerSchema);
module.exports=Organizer;