const express = require("express");

const Firstmodel = require("../Models/firstModel");
const firstModel = require("../Models/firstModel");


const Testing = async (req,res) => {
    console.log("hai itjhjhkh is working");
    return res.status(200).json("working fine finally");
}
exports.dsp = Testing;

const Data = async(req,res) => {
    return res.status(201).json({"message" : "I am working"})
}
exports.data = Data;

const MoreData = async(req,res) => {
    var data1 = req.body;
    Firstmodel.insertMany(data1)
    .then(result => {
    return res.status(201).json("all recordeds are recorded")
    })
    .catch(error =>{
        return res.status(500).json("error")
    })
}
exports.moredata = MoreData;


const Details1 = async(req,res) => {
    // Firstmodel.find()
    // Firstmodel.find({"username" : "naruto" , "password" : "12345"})
    // Firstmodel.findById("66ff8b37a1bb554c83665683")
    // Firstmodel.findByIdAndDelete("66ff8b37a1bb554c83665683")
    // Firstmodel.findByIdAndUpdate("66ff8b37a1bb554c83665684" , {"username" : "boruto"})
    // Firstmodel.insertMany({"username":"itachi","password":"sasuke"})
    // Firstmodel.deleteOne({"username" : "sasuke"})
    Firstmodel.deleteMany({"username" : "itachi"})
    .then(result => {
        return res.status(200).json(result)
    })
    .catch(error => {
        return res.status(500).json(error)
    })
}
exports.Details1 = Details1;
