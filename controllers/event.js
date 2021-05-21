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
    return Boom.badImplementation("terrible implementation");
  }
};
exports.editEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.update(req.payload, { where: { eventId } });
    return res.response({ message: "event is updated successfully" });
  } catch (error) {
    return Boom.badImplementation("terrible implementation");
  }
};
exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findOne({ where: { eventId } });
    await event.destroy();
    return res.response({ message: "event is deleted successfully", event });
  } catch (error) {}
};
