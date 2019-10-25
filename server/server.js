const app = require("./app");

const applicationPort = process.env.WHISKYBOOK_PORT || 8888;

app.listen(applicationPort, function () {
  console.info(`Whiskybook server listening on ${applicationPort}`)
});
