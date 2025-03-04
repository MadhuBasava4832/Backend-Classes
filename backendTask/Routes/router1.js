const express = require("express");
const Router = express.Router();
const task_api = require("../Controllers/controller1");

Router.get("/PaperPresentation", task_api.PaperPresentation);
Router.get("/Technical", task_api.Technical);
Router.get("/College", task_api.College);
Router.get("/Branch", task_api.Branch);
Router.get("/Technical1", task_api.Technical1);


module.exports = Router;


