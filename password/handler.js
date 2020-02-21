"use strict";

const generator = require("generate-password");

const getRequest = async (event, context) => {
  const length = 20;
  const password = generator.generate({
    length,
    numbers: true,
    symbols: true,
    excludeSimilarCharacters: true,
    exclude: "#^'\"()[]:@<>%"
  });

  context.status(200).succeed({
    success: true,
    password
  });
};

module.exports = getRequest;

if (require.main === module) {
  // debug
  getRequest(
    {},
    { status: () => ({ succeed: data => console.log("success", data) }) }
  );
}
