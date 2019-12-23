"use strict";

var figlet = require("figlet");

module.exports = async (event, context) => {
  figlet("Hello World!!", function(err, data) {
    if (err) {
      return context.status(500).succeed(err);
    }
    return context.status(200).succeed(data);
  });
};
