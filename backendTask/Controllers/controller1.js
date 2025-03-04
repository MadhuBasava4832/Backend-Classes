const express = require('express');
const userdata = require('../Models/model1');




//3
const PaperPresentation = async(req,res) => {
    try{
        const x = await userdata.find({
            userEvent:"Paper Presentation"
          })
          res.status(200).json(x);
    }
    catch(error){
        res.status(500).json(error);
    }
}
exports.PaperPresentation = PaperPresentation;




const Technical = async(req,res) => {
    try{
        const x = await userdata.find({
            userYear:"4",
            userDepartment:"CSE"
          })
          res.status(200).json(x);
    }
    catch(error){
        res.status(500).json(error);
    }

}
exports.Technical = Technical;






///4


const College = async (req, res) => {
  try {
    const Dup = await userdata.aggregate([
      {
        $group: {
          _id: "$userCollege",
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({ Dup });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.College = College;






//2

const Branch=async(req,res)=>{

    const counting= await userdata.aggregate([
        {
            $group: {
                _id: "$userEventCategory",
                count: {
                    $sum: 1
                }
            }
        },
        {
            $sort: {
                count: -1 
            }
        }
    ])
    res.status(200).json({counting});
}
exports.Branch=Branch


//5

const Technical1 = async (req, res) => {
    try {
        const accom = await userdata.find({
            userEvent: { $regex: "TECHNICAL", $options: "i" },
            userGender:"Male"
        });
        res.status(200).json(accom);
    } catch (error) {
        res.status(500).json({ error });
    }
}

exports.Technical1 = Technical1;


