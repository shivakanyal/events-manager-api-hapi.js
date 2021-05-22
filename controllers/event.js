const { Boom } = require("@hapi/boom");
const Event = require("../models/event");

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    return res.response(events).code(200);
  } catch (error) {
    return Boom.badImplementation("terrible implementation");
  }
};
exports.addEvent = async (req, res) => {
  try {
    const event = await Event.create(req.payload);
    return res.response(event).code(200);
  } catch (error) {
    console.log(error);
    return res.response({ message: "some internal error occured!" }).code(500);
  }
};
exports.editEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    console.log("eventId", eventId);
    await Event.update(req.payload, { where: { eventId } });
    return res.response({ message: "event is updated successfully" });
  } catch (error) {
    console.log(error);
    return res.response({ message: "some internal error occured!" }).code(500);
  }
};
exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    console.log("evntId", eventId);
    const event = await Event.findOne({ where: { eventId } });
    await event.destroy();
    return res.response({ message: "event is deleted successfully", event });
  } catch (error) {
    console.log(err);
  }
};
