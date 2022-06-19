const express = require("express");
const path = require('path');
const routes = require("./routes");
const bodyParser = require("body-parser");
const twig = require("twig");
const PORT = process.env.PORT || 3000;

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "twig");
//Serves resources from public folder
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use("/api", routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;
