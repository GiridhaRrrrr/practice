const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const eventSchema=new Schema({
    eventName:{
        type:String,
        requrired:true,
    },
    description:{
        type:String,
        requrired:true,
    },
    typeofEvent:{
        type:String,
        required:true,
    },
    image:{
        url:{
            type:String,
        },
        path:{
            type:String,
        }
    },
    date:{
        type:Date,
        required:true
    },
    contact:{
        type:String,
        required:true,
    },
    organizer:{
        type:Schema.Types.ObjectId,
        ref:"Organizer",
    }
})

const Event=mongoose.model("Event",eventSchema);
module.exports=Event;