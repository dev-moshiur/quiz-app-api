

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    
    username: {
      type: String,
      
    },
    email: {
      type: String,
      
      
    },
    password: {
      type: String,
      
    },
    img: {
      type: String,
    },
    
    isAdmin:{
      type:Boolean,
      default:false,
    
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
