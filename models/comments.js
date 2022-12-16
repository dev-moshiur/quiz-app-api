

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    examId: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      
    },
    disLike: {
      type: Array,
      
    },
    message: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);