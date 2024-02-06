const Joi=require("joi");
module.exports.eventSchema=Joi.object({
    event:Joi.object({
        eventName:Joi.string().required().trim().max(20),
        description:Joi.string().required().trim().max(200),
        contact:Joi.string().required().trim().max(10),
        typeofEvent:Joi.string().required().trim(),
    }).required()
})