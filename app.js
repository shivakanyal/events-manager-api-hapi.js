const Hapi = require("@hapi/hapi");
const Joi = require("joi");

const server = new Hapi.Server({
  host: "localhost",
  port: 3000,
});

server.start((err) => {
  console.log("hey ");
  if (err) {
    console.log(err);
  } else {
    console.log("Listeing at : ", server.info.uri);
  }
});

server.route({
  method: "GET",
  path: "/",
  handler: (req, res) => {
    return "hello";
  },
});
