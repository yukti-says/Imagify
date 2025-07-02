import userModel from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ 
                success: false, message: "Please fill all the fields"
             });     
            }
        // encrypt password
        const salt = await bcrypt.genSalt(10);
        // hash password with salt just mix 
        const hashedPassword = await bcrypt.hash(password, salt);
        // store this data in database

        const userData = {
            name, 
            email,
            password: hashedPassword  
        }
        
        // save in mongodb , save userData in userModel
        const newUser = new userModel(userData)
        // save this in database
        const user = await newUser.save();


        // generate token will be send in response so we can use it in frontend for login
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {
            expiresIn: "30d"
        });

        // send this data in response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            user:{name:user.name}
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
        
    }
}

const loginUser = async (req, res) => {
    try {
        // get email and password from request body
        const { email, password } = req.body;
        // get the user from database using email
        const user = await userModel.findOne({ email });
        // check if user is there with this email
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        // check if password is correct
        const isMach = await bcrypt.compare(password, user.password);
        if (!isMach) {
            res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        // generate token and send this in response
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {
            expiresIn: "30d"
        });
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
            user:{name:user.name}
        });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
         
        
        
    }
}

// controller for user credit
const userCredit = async (req, res) => {
    try {
        // needed user if to get credit balance
        // providing user ID with the help of middleware
       const {userId} = req.body;
        // get user from database using userId
        const user = await userModel.findById(userId);
        // check if user is there with this id
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.json({
            success: true,
            credits: user.creditBalance,
            user:{name:user.name}
        })
        
        
    }
    catch(error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

// export these functions so we can use it in userRoute.js
export { registerUser, loginUser , userCredit };