const cookieParser = require("cookie-parser");
const StudentModel = require("./models/Student.js");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const CartModel = require("./models/Cart.js");
const bodyParser = require("body-parser");
const twilio = require("twilio")
const speakeasy = require('speakeasy');
const uuid = require('uuid')
dotenv.config();

/* BCRYPT */
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://yctbookshelf.onrender.com",
    credentials: true,
  })
);
app.use(bodyParser.json())
mongoose.connect(`${process.env.MONGODB_PROD_URL}`).then(() => {
  console.log("Database Connected!")
}).catch((err) => console.log(err))

app.get("/test", (req, res) =>
  res.json({
    message: "working",
  })
);



let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SUPPORT_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

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
    res.cookie("token", token, {httpOnly: true, sameSite: "none", secure: true, maxAge: (30 * 24 * 60 * 60 * 1000)})
    
    await newUser.save();

    const secret = speakeasy.generateSecret({ length: 6 });
    const otp = speakeasy.totp({
      secret: secret.base32,
      encoding: 'base32'
    });

    // Store user details and OTP (in-memory storage for demonstration)
    await StudentModel.updateOne(
      { _id: newUser._id },
      { $set: { otpSecret: secret.base32 } }
    );


    // Compose email
    const mailOptions = {
      from: "YCTLIB Team <raquereinforce@gmail.com>",
      to: email,
      subject: 'Your One-Time Passcode (OTP)',
      text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to send OTP email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ message: 'Signup successful. OTP sent to your email.' });
      }
    });

 
    return res.json({ status: true, message: "Account sucessfully created" });


  } catch (error) {
    console.log(error);
    res.send(error);
  }
});




/* VERIFY OTP */
app.post("/verifyUser",  async (req, res) => {
  const { otp } = req.body;
  const { token } = req.cookies

  try {
    const decoded = jwt.verify(token, process.env.KEY)
    const student = await StudentModel.findOne({ email: decoded.email });

    if (!student) {
      return res.status(400).json({ status: false, message: 'User not found' });
    }

    const isValid = speakeasy.totp.verify({
      secret: student.otpSecret,
      encoding: 'base32',
      token: otp
    });

    if (isValid) {
      await StudentModel.updateOne(
        { _id: student._id },
        { $set: { isVerified: true, otpSecret: null } } 
      );
      return res.json({ status: true, message: 'OTP verified successfully' });
    } else {
      return res.status(400).json({ status: false, message: 'Invalid OTP' });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: 'Internal server error' });
  }
})
  

 


/* LOGIN */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await StudentModel.findOne({ email });

    if (!student) {
      return res.json({
        status: false,
        message: "A user doesn't exist with this email",
      });
    }

    const validPassword = await bcrypt.compare(password, student.password);
    if (!validPassword) {
      return res.json({ message: "Incorrect password", status: false });
    }

    const token = jwt.sign({ name: student.name }, process.env.KEY, { expiresIn: "120h" });
    res.cookie("token", token, { httpOnly: true, sameSite: "none", secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 });

    const cart = await CartModel.findOne({ studentId: student.email });

    let cartItems = [];
    if (cart) {
      const cartToken = jwt.sign({ email: cart.studentId }, process.env.KEY);
      res.cookie('cartToken', cartToken, { httpOnly: true, secure: true, sameSite: "none", maxAge: 95 * 24 * 60 * 60 * 1000 });
      cartItems = cart.items;
    } else {
      console.log('No orders found');
    }

    res.json({
      message: "Login Successfully",
      status: true,
      userInfo: {
        userName: student.name,
        userEmail: student.email,
        token: token,
      },
      cartItems: cartItems,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred while logging in', error: error.message });
  }
});








// const client = new twilio(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
/* VALIDATE USER EMAIL OR PHONE TO UPDATE THE USER INFO */
app.post("/forgot-password", async (req, res) => {
  const { email, phone } = req.body;

  try {
    const query = email ? { email } : phone ? { phone } : null;
    if (!query) return res.json({ status: false, message: "No email or phone provided" });

    const student = await StudentModel.findOne(query);
    if (!student) return res.json({ status: false, message: "No record for this user" });

    const token = jwt.sign({ _id: student._id }, process.env.KEY, {
      expiresIn: "15m",
    });

    if (email) {

      let mailOptions = {
        from: "YCTLIB Team <raquereinforce@gmail.com>",
        to: student.email,
        subject: "Reset Password",
        text: `https://yctbookshelf.onrender.com/resetPassword/${token}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.json({ message: "Error sending email", status: false });
        } else {
          return res.json({
            status: true,
            emailMessage: "Please check your inbox for the link",
          });
        }
      });
    } else if (phone) {
      // Handle phone case here if needed, e.g., sending an SMS
      return res.json({
        status: true,
        phoneMessage: "A message has been sent to your phone number",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});





/* RESET PASSWORD */
app.post(`/resetPassword/:token`, async (req, res) => {
  const token = req.params.token;

  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.KEY);

    const hash = await bcrypt.hash(password, saltRounds);

    const student = await StudentModel.findByIdAndUpdate(
      decoded._id,
      {
        password: hash,
      },
      {new: true} 
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
    res.cookie("token", token, {httpOnly: true, sameSite: "none", secure: true, maxAge: (30 * 24 * 60 * 60 * 1000)})

    
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
  
    // Configure email options
    let mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.SUPPORT_EMAIL, 
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return res.status(200).json({ message: 'Email sent successfully', status: true });

  } catch (error) {
    console.error('Error processing contact request:', error);
    return res.status(500).json({ message: 'An error occurred', error: error });
  }
})

app.post("/", async (req, res) => {
  const { email, name, phone, address, message } = req.body;

  try {
    const student = await StudentModel.findOne({ email });
    if (!student) {
      return res.json({ status: false, message: "No record for this user" });
    }

    // Configure email options
    let mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.SUPPORT_EMAIL,
      subject: "Feedback from " + name,
      text: `Name: ${name}\nAddress: ${address}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`,
    };


    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return res.status(200).json({ message: 'Email sent successfully', status: true });

  } catch (error) {
    console.error('Error processing feedback request:', error);
    return res.status(500).json({ message: 'An error occurred', error: error });
  }
});


app.post("/feedback", async (req, res) => {
  const { email, name, phone, address, message } = req.body;

  try {
    const student = await StudentModel.findOne({ email });
    if (!student) {
      return res.json({ status: false, message: "No record for this user" });
    }

    // Configure email options
    let mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.SUPPORT_EMAIL,
      subject: "Feedback from " + name,
      text: `Name: ${name}\nAddress: ${address}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return res.status(200).json({ message: 'Email sent successfully', status: true });

  } catch (error) {
    console.error('Error processing feedback request:', error);
    return res.status(500).json({ message: 'An error occurred', error: error });
  }
});








app.get("/verify", async (req, res) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      return res.json({ meessage: "no token", status: false });
    }

    const decoded = jwt.verify(token, process.env.KEY);

    const student = await StudentModel.findOne(decoded.email ? {email: decoded.email} : decoded.name && {name: decoded.name} )

    if (student) {
      return res.json({ meessage: "Authorized", status: true, userInfo: {
        name: student.name,
        email: student.email,
        phone: student.phone,
        bio: student.bio, 
        password: student.password,
        joinDate: student.createdAt,
      }});
    } 


    res.end();
  } catch (error) {
    console.log(error);
    res.json({message: "Token expired", status: false})
  }
});





/* CART CONTROLLER */
app.post("/books", async (req, res) => {
  try {
    const token = req.cookies.token;

    const cartItem = req.body; 

    if (!token) return res.json({ status: false, messsage: "Please login!" });

    const decoded = jwt.verify(token, process.env.KEY);

    const student = await StudentModel.findOne(decoded.email ? { email: decoded.email } : decoded.name && { name: decoded.name } );

    let existingCart = await CartModel.findOne({ studentId: student.email });

    if (!existingCart) {
      const newCart = new CartModel({
        items: cartItem,
        studentId: student.email 
      });

      await newCart.save();

      const cartToken = jwt.sign({ email: newCart.studentId }, process.env.KEY, { expiresIn: "95d" });
      res.cookie("cartToken", cartToken, { httpOnly: true, sameSite: "none", secure: true, maxAge: (95 * 24 * 60 * 60 * 1000) });

      return res.json({ status: true, message: "Cart items saved successfully", items: newCart });
    } else { 
      existingCart.items.push(...cartItem);
      await existingCart.save();

      const cartToken = jwt.sign({ email: existingCart.studentId }, process.env.KEY);
      res.cookie("cartToken", cartToken, { httpOnly: true, sameSite: "none", secure: true, maxAge: (95 * 24 * 60 * 60 * 1000) });

      res.json({ status: true, message: "Item added to cart successfully", items: existingCart });
    }


    let mailOptions = {
      from: `Yctlibrary <${process.env.SUPPORT_EMAIL}>`,
      to: student.email,
      subject: "Order from Yctlibrary",
      text: `You have added the following items to your cart: ${JSON.stringify(cartItem, null, 2)}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log('Email sent successfully:', info.response);
      }
    });

    

  } catch (error) {
    console.log("Error while saving cart items:", error);
    res.status(500).json({
      message: "An error occurred while saving cart items"
    });
  }
});




app.get("/orders", async (req, res) => {
  try {
    const cartToken = req.cookies.cartToken;
    if (!cartToken) return res.json({ status: false, message: "No token" });

    const userToken = req.cookies.token;
    if (!userToken) return res.json({ status: false, message: "please login" });

    const cartDecoded = jwt.verify(cartToken, process.env.KEY);
    const userDecoded = jwt.verify(userToken, process.env.KEY); 

    const cart = await CartModel.findOne({ studentId: cartDecoded.email });
    if (!cart) return res.json({ status: false, message: "Cart not found" });

    const user = await StudentModel.findOne(userDecoded.name ? { name: userDecoded.name } : userDecoded.email && { email: userDecoded.email } );
    if (!user) return res.json({ status: false, message: "User not found" });

    
    const newCartToken = jwt.sign({ email: cart.studentId }, process.env.KEY)
    res.cookie("cartToken", newCartToken, {httpOnly: true, secure: true, sameSite: "none"})
    
    const newCartDecoded = jwt.verify(newCartToken, process.env.KEY)

 
    const studentCart = await CartModel.findOne({ studentId: newCartDecoded.email })
    
    if (user.email !== studentCart.studentId ) return res.json({ status: false, message: "userId don't match" });

    return res.json({ status: true, message: "Recorded orders", items: cart.items });

  } catch (error) {
    console.log("Error getting cart", error);
    res.status(500).json({ message: "An error occurred while trying to get orders: " + error, status: false });
  }
});



/* SERVER RESPONSE */
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
