"use strict";

const DumDum = require("dumdum");

const getRequest = async (event, context) => {
  const maxLength =
    (event.query &&
      event.query.maxLength &&
      parseInt(event.query.maxLength, 10)) ||
    100;
  const locale = (event.query && event.query.locale) || "en";

  const dumdum = DumDum.create({ locale });
  const text = dumdum.text(maxLength);

  context.status(200).succeed({
    success: true,
    text
  });
};

module.exports = getRequest;

if (require.main === module) {
  // debug
  getRequest(
    {
      query: {
        locale: "fr",
        maxLength: "25"
      }
    },
    { status: () => ({ succeed: data => console.log("success", data) }) }
  );
}
