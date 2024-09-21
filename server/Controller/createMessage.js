const CharityMsg = require("../model/charityMessageSchema");
const CharityMaterial = require("../model/charityMaterialSchema")

const createMessageAndUpdateCharityMaterial = async (req, res) => {
  try {
    const { address, description,identity } = req.body;
    console.log("0")
    if(!description || !identity){
        res.status(400).json({
            success: false,
            message: "Incomplete Details",
            error: err,
          });
    }
    console.log("1")
    const message = await CharityMsg.create({
      address,
      description,
      image:`https://api.dicebear.com/5.x/initials/svg?seed=${description}`,
    });
    console.log("2")
    const data = await CharityMaterial.findOneAndUpdate(identity,{$push:{messages:message._id}},{new:true}).populate("messages")

    res.status(200).json({
        success: true,
        message,
        data,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in Adding Comment",
      error: err,
    });
  }
};
module.exports = {createMessageAndUpdateCharityMaterial}