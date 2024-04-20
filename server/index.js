const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require("./models/Student");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Students");

// REGISTER
app.post("/register", (req, res) => {
  const { email, name } = req.body;
  StudentModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.email === email) {
        res.json(`a user already exist with ${email}`);
      }
    } else {
      StudentModel.create(req.body)
        .then((students) => res.json(students))
        .catch((err) => res.json(err));
    }
  });
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ message: "Success", userInfo: { userName: user.name, userEmail: user.email, userPassword: user.password } });
      } else {
        res.json({ message: "the password is incorrect" });
      }
    } else {
      res.json({ message: "An account doesn't exist with this email" });
    }
  });
});

// UPDATE THE USER INFO
app.post("/account", (req, res) => {
  const { email, password, name } = req.body;

  StudentModel.findOneAndUpdate({
    name: name,
    email: email,
    password: password,
  }).then((user) => {
    if (user.password === password) {
      res.json("Password can't be the same with the old one");
    } else {
      StudentModel.findOneAndUpdate({ email: email }, { name: name });
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running");
});
