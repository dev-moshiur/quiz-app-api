


const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

//save user and respond
const user = await newUser.save();
res.status(200).json(user);
  } catch (err) {
res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

const validPassword = await bcrypt.compare(req.body.password, user.password)
    

    if (validPassword) {

      //genarate token

      const token = await jwt.sign(
        {
          username: user.username,

          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "6h",
        }
      );
      if (user.isAdmin) {
        res
          .cookie("token", token, {
            secure: true,
          })
          .send("Cookie have been saved successfully");
      } else {
        res.status(400).json("You are not an admin");
      }

      
    } else {
      res.status(400).json("wrong password")
    }

res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;