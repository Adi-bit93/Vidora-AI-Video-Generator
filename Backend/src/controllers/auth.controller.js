import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req, res, next) => {
    try {
        const {username, email, password} = req.body;
    
        if(!username || !email || !password ){
            return res.status(400).json({message: "All fields are required"})
        }
    
        const alreadyExists = await User.findOne({email})
    
        if(alreadyExists){
            return res.status(400).json({message: "Emails are already in use"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
    
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })
    
        const token = generateToken(user._id);
    
        return res.status(201).cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        }).json({
            success: true,
            message: "Account created successfully",
            user: {
                id: user._id,
                name: user.username,
                email: user.email,
            }
        })
    } catch (error) {
        next(error);
    }




})

const loginUser = asyncHandler(async(req, res, next) => {
   try {
     const {email, password } = req.body;
 
     if (!email || !password) {
         return res.status(400).json({meassage: "All fields are required"})
     }
 
     const user = await User.findOne({email}).select("+password");
 
     if(!user) return res.status(400).json({message: "User does not exist"})
 
     const isMatch = await bcrypt.compare(password, user.password);
 
     if(!isMatch){
         return res.status(400).json({message: "email or password is incorrect"})
     }
     
     const token = generateToken(user._id);
 
     return res 
         .status(200)
         .cookie("token", token, {
             httpOnly:true, 
             secure: process.env.NODE_ENV === "production",
             sameSite: "strict",
             maxAge: 7 * 24 * 60 * 1000,
         })
         .json({
             success: true,
             message: "Logged in successfully",
             user: {
                 id: user._id,
                 name: user.name,
                 email: user.email,
             },
         });
   } catch (error) {
        next(error);
   }

})

export {
    registerUser,
    loginUser
}

