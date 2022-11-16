const mongoose = require("mongoose");


const sectionSchema = new mongoose.Schema({
  
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  }
)



module.exports = mongoose.model("Section", sectionSchema);
