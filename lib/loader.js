const express = require("express");
const bodyParser = require('body-parser');

const config = require('../config/app.js');
const routes = require('../routes/main');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ "extended": false }));

//set the router
routes.init(app);

app.listen(config.PORT, config.APP_URL, function () {
	console.log("server", "Server is running at port " + config.PORT);
});

module.exports = app;