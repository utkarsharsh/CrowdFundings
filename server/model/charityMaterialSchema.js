const mongoose = require("mongoose");

const charityMaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  title: {
    //
    type: String,

    trim: true,
  },
  description: {
    //
    type: String,

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
  image: {
    type: String,

    trim: true,
  },
  raisedAmount: {
    type: Number,
    default: 0,
  },
  target: {
    //
    type: Number,
  },
  donated: {
    type: Number,
    default: 0,
  },
  types: {
    //
    type: String,

    enum: ["Education", "Health", "Disaster", , "Hunger", "Other"],
  },
  deadline: {
    //
    type: Date,
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
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "CharityMsg" }],
});
module.exports = mongoose.model("CharityMaterial", charityMaterialSchema);
