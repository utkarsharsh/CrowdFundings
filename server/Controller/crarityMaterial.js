const charityMaterialSchema = require("../model/charityMaterialSchema");

const createCharityMaterial = async (req, res) => {
  try {
    const {
      address,
      images,
      identity,
    } = req.body;
    const data = await charityMaterialSchema.create({
      address,
      images,
      identity,
    });
    res.status(200).json({
      success: true,
      data,
      message: "Successfully Created",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in create Charity",
      error: err,
    });
  }
};
const getAllCharityMaterial = async (req, res) => {
  try {
    const {identity} = req.body;
    const data = await charityMaterialSchema.findOne({identity}).populate("message")
    res.status(200).json({
      success: true,
      data,
      message: "Successfully Created",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in create Charity",
      error: err,
    });
  }
};
module.exports = { createCharityMaterial,getAllCharityMaterial };
