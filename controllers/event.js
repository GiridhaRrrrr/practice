

module.exports.renderNewEventForm=(req,res)=>{
    res.render("home/createEvent.ejs");
}

module.exports.renderAllEvents=async (req,res)=>{
    const events=await Event.find();
    res.render("home/events.ejs",{events});
}
