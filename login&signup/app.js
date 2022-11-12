"use strict";

const express = require('express');
const app = express();
const home = require("./src/routes/home");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(`{__dirname}/src/public`))

app.use("/", home);

module.exports = app;