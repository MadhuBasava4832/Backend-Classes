const express = require("express");
const Firstmodel = require("../Models/firstModel");
const multer = require('multer');
const path = require('path');
const nodemailer = require("nodemailer");



// Basics           API's

const Testing = async (req, res) => {
    console.log("hai itjhjhkh is working");
    return res.status(201).json("working fine finally");
}
exports.dsp = Testing;

const Data = async (req, res) => {
    return res.status(201).json({ "message": "I am working" })
}
exports.data = Data;

const MoreData = async (req, res) => {
    var data1 = req.body;
    console.log(data1);
    Firstmodel.insertMany(data1)
        .then(result => {
            return res.status(201).json("all recordeds are recorded")
        })
        .catch(error => {
            return res.status(500).json("error -- may be connec to internet")
        })
}
exports.moredata = MoreData;


const Details1 = async (req, res) => {
    // Firstmodel.find()
    // Firstmodel.find({"username" : "naruto" , "password" : "12345"})
    // Firstmodel.findById("66ff8b37a1bb554c83665683")
    // Firstmodel.findByIdAndDelete("66ff8b37a1bb554c83665683")
    // Firstmodel.findByIdAndUpdate("66ff8b37a1bb554c83665684" , {"username" : "boruto"})
    Firstmodel.insertMany({ "username": "itachi", "password": "sasuke" })
    // Firstmodel.deleteOne({"username" : "sasuke"})
    var data = req.body;
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

const mystorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, "myname" + path.extname(file.originalname))
    }
})
const myfilter = (req, file, cb) => {
    const filetype = /pnj|jpg|jpeg/
    const x = filetype.test(path.extname(file.originalname))
    if (x == true) {
        cb(null, true)
    } else {
        cb('select the image with extentions of png or jpg or jpeg')

    }
}
const upload = multer({
    storage: mystorage,
    fileFilter: myfilter,
    limits: {
        fileSize: 1000000
    }
}).single('anyname')
const FileUpload = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.status(200).json('uploaded successfully')
        }
    })
}

exports.FileUpload = FileUpload;



// Sending mail

const Sendmail = (req, res) => {
    const Transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'madhubasava32@gmail.com',
            pass: 'vfuh cbuj tdam jhqv'
        }
    })
    const mailoptions = {
        from: 'madhubasava32@gmail.com',
        to: req.body.email,
        subject: 'it is subject',
        text: 'Yep ! this mail is received in my mail',
    }
    Transport.sendMail(mailoptions, (err, info) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json('Mail sucessfully sent')
    })
}
exports.Sendmail = Sendmail;