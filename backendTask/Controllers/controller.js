const express = require('express');
const userdata = require('../Models/model');

const DataApi = async (req, res) => {

    var data = req.body;
    userdata.insertMany(data)
        .then(result => {
            res.status(200).json("uploaded sucessfully");
        })
        .catch(error => {
            res.status(500).json(error);
        });
}
exports.DataApi1 = DataApi;


const GetDataAPI = async(req,res) => {
    const {userRollNumber,userName} = req.body;
    userdata.findOneAndUpdate(
        {userRollNumber: userRollNumber},
        {userName:userName},
        {new:true}    
    )
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json(error);
    });
}
exports.GetDataAPI = GetDataAPI;


