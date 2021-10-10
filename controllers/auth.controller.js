const User = require("../models/user.model");
const express = require("express");
const app = express();
app.use(express.json());

// login
exports.login = async (req, res) => {
	console.log(req.body);
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email,
      password:password
    });

    if (!user) {
		 console.log("Invalid user")
      return res.status(400).json({msg: "Invalid User." });
    }
        console.log("Login Successfull")
        return res.status(200).json({
        name:user.name,
        html: user.html,
        css: user.css,
        javaScript: user.javaScript  
    })

  } catch (err) {
    console.log("Invalid")	  
    res.status(400).json({ msg: err.message });
  }
};

// register
exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const html= Math.floor(Math.random() *100)
    const css = Math.floor(Math.random() *100)
    const javaScript = Math.floor(Math.random() *100)
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      html: html,
      css: css,
      javaScript: javaScript
    });
    console.log("Account Create done");
    res.status(200).json({
       name: req.body.name,
       html: html,
       css: css,
       javaScript: javaScript,
       msg: "Account Created",
      });
  } catch (err) {
    console.log("email is already exist");
    res.status(400).json({ msg: "email is already exist" });
	}
};
