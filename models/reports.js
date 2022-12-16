

const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    reporterId: {
      type: String,
      required: true,
    },
    quizeId: {
      type: String,
      
    },
    message: {
      type: String,
    },
    
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", ReportSchema);