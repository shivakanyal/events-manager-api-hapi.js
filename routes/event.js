const event = require("../controllers/event");

module.exports = [
  {
    method: "GET",
    path: "/api/events",
    handler: event.getAllEvents,
  },
  {
    method: "POST",
    path: "/api/events",
    handler: event.addEvent,
  },
  {
    method: "PUT",
    path: "/api/events/{eventId}",
    handler: event.editEvent,
  },
  {
    method: "DELETE",
    path: "/api/events/{eventId}",
    handler: event.deleteEvent,
  },
];
