
const mongoose = require("mongoose");

const QuizeSchema = new mongoose.Schema(
  {
    creatorId: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
    },
    question: {
      type: String,
    },
    options: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quize", QuizeSchema);
