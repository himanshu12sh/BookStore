import User from "../database/model/user.js";
import bcrypt from "bcrypt"; 

export const Register = async (req, res) => {
  try {
    const { fname, email, password } = req.body;

   
    if (!fname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new User({
      fname,
      email,
      password: hashedPassword, 
    });

    
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: { id: savedUser._id, fname: savedUser.fname, email: savedUser.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, fname: user.fname, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
