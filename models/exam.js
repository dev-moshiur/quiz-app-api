

const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema(
  {
    perticipentId: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      
    },
    catagory: {
      type: String,
    },
    questions: {
      type: Object,
      
    },
    like: {
        type: Array,
        
      },
      disLike: {
        type: Array,
        
      },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exam", ExamSchema);
