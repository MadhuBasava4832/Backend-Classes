const express = require("express");
const Router = express.Router();
const task_api = require("../Controllers/controller");

Router.get("/updatedata", task_api.GetDataAPI);
Router.post("/Details1", task_api.DataApi1);

module.exports = Router;


