const mongoose = require("mongoose");

const charityMaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  premium:{
    type:Boolean,
    default:false,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  identity: {
    type: Number,
    trim: true,
  },
  thumbnail: {
    type: String,
    required: true,
    trim: true,
  },
  raisedAmount: {
    type: Number,
    default: 0,
  },
  requiredAmount: {
    type: Number,
    required: true,
  },
  donated: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ["Education", "Health", "Disaster", , "Hunger", "Other"],
  },
  endDate: {
    type: Date,
    required: true,
  },
  images: {
    type: [String],
    validate: {
      validator: function (array) {
        return array.length === 3; // Check if the array has exactly 3 images
      },
      message: "You must provide exactly 3 image URLs.",
    },
  },
  messages: [{ type: mongoose.Schema.Types.ObjectId, 
    ref:"CharityMsg"
   }],
});
module.exports = mongoose.model("CharityMaterial", charityMaterialSchema);
