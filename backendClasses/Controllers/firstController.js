const express = require("express");
const Firstmodel = require("../Models/firstModel");
const multer = require('multer');
const path = require('path');
const nodemailer = require("nodemailer");



// Basics

const Testing = async (req,res) => {
    console.log("hai itjhjhkh is working");
    return res.status(201).json("working fine finally");
}
exports.dsp = Testing;

const Data = async(req,res) => {
    return res.status(201).json({"message" : "I am working"})
}
exports.data = Data;

const MoreData = async(req,res) => {
    var data1 = req.body;
    console.log(data1);
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
var data =req.body;
Firstmodel.insertMany(data)
    .then(result => {
    
        return res.status(200).json(result)
    })
    .catch(error => {
        return res.status(500).json(error)
    })
}
exports.Details1 = Details1;



//Uploading image to back end

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,"public")
    },
    filename : function(req, file, cb){
        cb(null,file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    const fileType = /jpg|png|jpeg|svg/
    const result = fileType.test(path.extname(file.originalname))
    if(result)
    {
        cb(null,true)
    }
    else{
        cb("Plz upload correct format")
    }
}
const upload = multer({
   storage : storage,
   fileFilter :  fileFilter,
   limits : {
    fileSize : 1000000
   } 
}).single('file')
const FileUpload = async(req,res) => {
    upload(req,res,(err) => {
        if(err){
            return res.status(500).json(err);
        }
        else{
            return res.status(201).json("Image is uploaded")
        }
    })
    // return res.status(200).json("sdfsd")
}

exports.FileUpload = FileUpload;



// Sending mail

const Sendmail = (req,res) => {
    const Transport = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'madhubasava32@gmail.com',
            pass : ''
        }
    })
    const mailoptions = {
        from : 'madhubasava32@gmail.com',
        to : 'madhubasava32@gmail.com',
        subject : 'it is subject',
        text : 'Yep ! this mail is received in my mail',
    }
    Transport.sendMail(mailoptions,(err,info) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json('Mail sucessfully sent')
    })
}
exports.Sendmail = Sendmail;