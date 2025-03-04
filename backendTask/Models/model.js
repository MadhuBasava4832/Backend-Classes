const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema({
    userTeamCode: String,
    userRollNumber: String,
    userName: String,
    userMobile: String,
    userCollege: String,
    userEmail: String,
    userGender: String,
    userDepartment: String,
    userLocation: String,
    userYear: String,
    userEventCategory: String,
    userEvent: String,
    userTeamsize: String,
    userAccomodation: String,
    otherCollege: String,
});

module.exports = mongoose.model("task_data", DetailsSchema,"task_data");
