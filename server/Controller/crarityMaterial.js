const charityMaterialSchema = require("../model/charityMaterialSchema");

const createCharityMaterial = async (req, res) => {
  try {
    const {
      name,
      title,
      description,
      address,
      thumbnail,
      requiredAmount,
      endDate,
      category,
      images,
    } = req.body;
    const data = await charityMaterialSchema.create({
      name,
      title,
      description,
      address,
      thumbnail,
      requiredAmount,
      endDate,
      category,
      images,
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
    const data = await charityMaterialSchema.find({}).populate("messages");
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
