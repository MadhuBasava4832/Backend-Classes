const express = require("express");
const Router = express.Router();
const test_api = require("../Controllers/firstController");
// const { route, router } = require("");
Router.get("/testing_api",test_api.dsp);
Router.post("/data",test_api.data);
Router.post("/moredata",test_api.moredata);
Router.post("/modifyDetails",test_api.Details1);

Router.post("/FileUpload",test_api.FileUpload);
Router.post("/send-mail",test_api.Sendmail);

module.exports = Router;
