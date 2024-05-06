const cookieParser = require("cookie-parser");
const StudentModel = require("./models/Student.js");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

/* BCRYPT */
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose.connect("mongodb://127.0.0.1:27017/Students");

app.get("/test", (req, res) =>
  res.json({
    message: "working",
  })
);

/* REGISTER */
app.post("/register", async (req, res) => {
  const { email, name, phone, password } = req.body;

  try {
    const student = await StudentModel.findOne({ email });


    if (student)
      return res.json({
        status: false,
        message: "a user already exist with this email",
      });

    const hash = await bcrypt.hash(password, saltRounds);

    const newUser = new StudentModel({
      name,
      email,
      phone,
      password: hash,
    });

    const token = jwt.sign({email: newUser.email}, process.env.KEY, {expiresIn: "120h"})
    res.cookie("token", token, {httpOnly: true, maxAge: (30 * 24 * 60 * 60 * 1000)})
    
    await newUser.save();


    return res.json({ status: true, message: "Account sucessfully created" });


  } catch (error) {
    console.log(error);
    res.send(error);
  }
});


 


/* LOGIN */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;


  try {
    const student = await StudentModel.findOne({ email });

    if (!student) {
      return res.json({
        status: false,
        message: "a user doesn't exist with this email",
      });
    }

    const validPassword = await bcrypt.compare(password, student.password);
    if (!validPassword) {
      return res.json({ message: "incorrect password", status: false });
    }

    const token = jwt.sign({name: student.name}, process.env.KEY, {expiresIn: "120h"})
    res.cookie("token", token, {httpOnly: true, maxAge: (30 * 24 * 60 * 60 * 1000)})

    return res.json({
      message: "Login Successfully",
      status: true,
      userInfo: {
        userName: student.name,
        userEmail: student.email,
        userPassword: student.password,
        token: req.cookies.token,
      },
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});




/* VALIDATE USER EMAIL TO UPDATE THE USER INFO */
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const student = await StudentModel.findOne({ email });
    if (!student) return res.json({ status: false, message: "No record for this user" });

    const token = jwt.sign({ _id: student._id }, process.env.KEY, {
      expiresIn: "15m",
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "raquereinforce@gmail.com",
        pass: "xdkutqvhdzdmzfuq",
      },
    });

    let mailOptions = {
      from: "Raque Team raquereinforce@@gmail.com",
      to: student.email,
      subject: "Reset Password",
      text: `http://localhost:5173/resetPassword/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.json({ message: "Error sending email", status: false });
      } else {
        return res.json({
          message: "Email sent: " + info.response,
          status: true,
        });
      }
    })

    res.clearCookie("token")

    // res.end()
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});




/* RESET PASSWORD */
app.post("/resetPassword/:token", async (req, res) => {
  const token = req.params.token;

  console.log(req.body)

  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.KEY);

    const hash = await bcrypt.hash(password, saltRounds);

    const student = await StudentModel.findByIdAndUpdate(
      decoded._id,
      {
        password: hash,
      }
    );

    if (!student) return res.json({ status: false, message: "Not updated" });

    return res.json({ status: true, message: "password updated successfully" });
  } catch (err) {
    console.log(err);
    return res.send("Token expired");
  }
});




app.post("/product/:id", async (req, res) => {
  res.clearCookie("token")

  return res.json({status: true, message: "Logged out"})
})








/* UPDATE THE USER INFO THROUGH USER ACCOUNT */
app.post("/profile", async (req, res) => {

  const { userEmail, currentPassword, newPassword, fullName } = req.body;
  
  try {
    const currentUser = await StudentModel.findOne({email: userEmail})

    if (!currentUser) return res.json({ status: false, message: "Not updated" });

    const validPassword = await bcrypt.compare(currentPassword, currentUser.password)

    if (!validPassword)  return res.json({ status: false, message: "Incorrect current password" });

    const hash = await bcrypt.hash(newPassword, 10)
    const student = await StudentModel.findOneAndUpdate({ email: userEmail }, {password: hash, name: fullName}, {returnOriginal: false})
    
    if (!student) return res.json({ status: false, message: "Not updated" });
    
    const token = jwt.sign({name: student.name}, process.env.KEY, {expiresIn: "120h"})
    res.cookie("token", token, {httpOnly: true, maxAge: (30 * 24 * 60 * 60 * 1000)})

    
    const validToken = req.cookies.token;
    
    if (!validToken) return res.json({message: "invalid token", status: false})
    
    return res.json({ status: true, message: "Info updated successfully" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}); 

 
app.post("/profile", async (req, res) => {
  const token = req.cookies.token;

  const { bio } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.KEY);

    const student = await StudentModel.findOneAndUpdate(decoded.name, {bio: bio})

    if (!student) return res.json({ status: false, message: "Not updated" })

    return res.json({ status: true, message: "Bio updated" })
    
  } catch (error) {
    console.log(error)
    return res.send(error)
  }

})  



app.post("/contact", async (req, res) => {
  const {email, name, phone, subject, message} = req.body;

  try {
    const student = await StudentModel.findOne({ email });
    if (!student) return res.json({ status: false, message: "No record for this user" });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "raquereinforce@gmail.com",
        // pass: "xdkutqvhdzdmzfuq",
      },
    });
 
    let mailOptions = {
      from: `${name} Raque-user ${email}`,
      to: "raquereinforce@@gmail.com",
      subject: `${subject}`,
      text: `${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.json({ message: "Error sending email", status: false });
      } else {
        return res.json({
          message: "Email sent: " + info.response,
          status: true,
        });
      }
    });
    
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})







app.get("/verifyNewUser", async (req, res) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      return res.json({ meessage: "no token", status: false });
    }

    const decoded = jwt.verify(token, process.env.KEY);

    const student = await StudentModel.findOne({email: decoded.email})

    if (student) {
      return res.json({ meessage: "Authorized", status: true, userInfo: {
        name: student.name,
        email: student.email,
        phone: student.phone,
        bio: student.bio,
        password: student.password,
      }});
    } 


    res.end();
  } catch (error) {
    console.log(error);
    res.json({message: "Token expired", status: false})
  }
});






app.get("/verify", async (req, res) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      return res.json({ meessage: "no token", status: false });
    }

    const decoded = jwt.verify(token, process.env.KEY);

    const student = await StudentModel.findOne({name: decoded.name})

    if (student) {
      return res.json({ meessage: "Authorized", status: true, userInfo: {
        name: student.name,
        email: student.email,
        phone: student.phone,
        bio: student.bio,
        password: student.password,
      }});
    } 


    res.end();
  } catch (error) {
    console.log(error);
    res.json({message: "Token expired", status: false})
  }
});

/* SERVER RESPONSE */
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
