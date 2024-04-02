const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require("./models/Student");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Students");

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

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("An account doesn't exist with this email");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running");
});
